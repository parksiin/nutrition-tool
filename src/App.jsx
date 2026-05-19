import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Download, Trash2, LayoutGrid, PlusCircle, CheckCircle2 } from 'lucide-react';
import { foodData, foodCategories } from './data/foodData';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('grain');
  const [columnCount, setColumnCount] = useState(5);
  const [previewScale, setPreviewScale] = useState(0.4);
  
  const canvasRef = useRef(null);
  const mainAreaRef = useRef(null);

  // 화면 크기에 맞춰 프리뷰 스케일 조정
  React.useEffect(() => {
    const updateScale = () => {
      if (mainAreaRef.current) {
        const availableWidth = mainAreaRef.current.offsetWidth - 80; // 패딩 제외
        const newScale = Math.min(availableWidth / 2000, 1);
        setPreviewScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const addItem = (item) => {
    // 이미 추가된 식품인지 확인
    if (selectedItems.find(selected => selected.id === item.id)) {
      alert('이미 추가된 식품입니다.');
      return;
    }
    setSelectedItems([...selectedItems, { ...item, instanceId: Date.now() + Math.random() }]);
  };

  const removeItem = (instanceId) => {
    setSelectedItems(selectedItems.filter(item => item.instanceId !== instanceId));
  };

  const clearCanvas = () => {
    setSelectedItems([]);
  };

  const [exportImage, setExportImage] = useState(null);

  const downloadImage = async () => {
    if (selectedItems.length === 0) return;
    
    try {
      // 1. 스케일 복구 및 캡처 (부모 요소의 스케일을 1로 잠시 복구)
      const wrapper = canvasRef.current.parentElement;
      const originalScale = wrapper.style.transform;
      wrapper.style.transform = 'scale(1)';
      
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: '#ffffff',
        width: 2000,
        scale: 1,
        logging: false,
        useCORS: false,
      });
      
      wrapper.style.transform = originalScale;
      
      // 2. 데이터 URL 생성
      const dataUrl = canvas.toDataURL('image/png');
      setExportImage(dataUrl); // 프리뷰 모달을 띄워 사용자에게 보여줌

      // 3. 자동 다운로드 시도 (백업)
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `plan_${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('이미지 저장 중 오류 발생:', error);
      alert('이미지 생성 중 오류가 발생했습니다. 브라우저 설정을 확인해주세요.');
    }
  };

  const filteredFood = foodData.filter(food => food.category === activeCategory);
  const itemWidth = columnCount === 5 ? 368 : 464;

  return (
    <div className="app-container">
      {/* Sidebar: Food Selector */}
      <aside className="sidebar">
        <h2>
          <PlusCircle size={24} className="text-primary" />
          식품 선택
        </h2>
        
        <div className="category-tabs">
          {foodCategories.map(cat => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="food-list">
          {filteredFood.map(food => {
            const isSelected = selectedItems.some(item => item.id === food.id);
            return (
              <div 
                key={food.id} 
                className={`food-item-card ${isSelected ? 'selected' : ''}`}
                onClick={() => addItem(food)}
              >
                <span className="food-item-name">{food.name} {food.weight}</span>
                <span className="food-item-portion">{food.portion}</span>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Area: Canvas & Controls */}
      <main className="main-area" ref={mainAreaRef}>
        <header className="toolbar">
          <div className="tool-group">
            <LayoutGrid size={20} />
            <span style={{ fontWeight: 600 }}>그리드 설정:</span>
            <div className="column-toggle">
              <button 
                className={`toggle-btn ${columnCount === 4 ? 'active' : ''}`}
                onClick={() => setColumnCount(4)}
              >
                4열
              </button>
              <button 
                className={`toggle-btn ${columnCount === 5 ? 'active' : ''}`}
                onClick={() => setColumnCount(5)}
              >
                5열
              </button>
            </div>
          </div>

          <div className="tool-group">
            <button className="btn btn-secondary" onClick={clearCanvas}>
              <Trash2 size={18} />
              전체 삭제
            </button>
            <button 
              className="btn btn-primary" 
              onClick={downloadImage}
              disabled={selectedItems.length === 0}
            >
              <Download size={18} />
              이미지로 저장
            </button>
          </div>
        </header>

        <div className="canvas-preview-area">
          {selectedItems.length > 0 ? (
            <div 
              className="canvas-wrapper"
              style={{ transform: `scale(${previewScale})` }}
            >
              <div 
                className="canvas-grid" 
                ref={canvasRef}
                style={{ 
                  gridTemplateColumns: `repeat(${columnCount}, ${itemWidth}px)`,
                }}
              >
                {selectedItems.map((item) => (
                  <div 
                    key={item.instanceId} 
                    className="grid-item"
                    style={{ width: `${itemWidth}px` }}
                    onClick={() => removeItem(item.instanceId)}
                  >
                    <div className="grid-item-img-container" style={{ width: `${itemWidth}px` }}>
                      <img src={item.img} alt={item.name} className="grid-item-img" />
                    </div>
                    <div className="grid-item-text">
                      <p className="grid-item-name">{item.name} {item.weight}</p>
                      <p className="grid-item-portion">{item.portion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <CheckCircle2 size={48} color="#e2e8f0" />
              <p>왼쪽 목록에서 식품을 클릭하여 식단을 구성해보세요.</p>
            </div>
          )}
        </div>
      </main>

      {/* Export Preview Modal */}
      {exportImage && (
        <div className="modal-overlay" onClick={() => setExportImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>이미지 생성 완료</h3>
              <button className="close-btn" onClick={() => setExportImage(null)}>✕</button>
            </div>
            <div className="modal-body">
              <p>이미지가 생성되었습니다. 아래 이미지를 <strong>우클릭하여 '이미지를 다른 이름으로 저장'</strong>하거나, 자동으로 다운로드된 파일을 확인해 주세요.</p>
              <div className="exported-image-container">
                <img src={exportImage} alt="Exported Plan" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setExportImage(null)}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
