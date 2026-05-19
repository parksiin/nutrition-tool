export const foodCategories = [
  { id: 'grain', name: '곡류군' },
  { id: 'meat', name: '어육류군' },
  { id: 'fruit', name: '과일군' },
];

const assetPath = (name) => `./assets/${name}.png`;

export const foodData = [
  // 곡류군 (Grains) - 영양사 요청 순서
  { id: 1, category: 'grain', name: '쌀밥', weight: '70g', portion: '1/3공기', img: assetPath('rice') },
  { id: 2, category: 'grain', name: '현미밥', weight: '70g', portion: '1/3공기', img: assetPath('brown_rice') },
  { id: 16, category: 'grain', name: '잡곡밥', weight: '70g', portion: '1/3 공기', img: assetPath('multigrain_rice') },
  { id: 11, category: 'grain', name: '미숫가루', weight: '30g', portion: '1/4컵', img: assetPath('misugaru') },
  { id: 12, category: 'grain', name: '국수(삶은 것)', weight: '90g', portion: '', img: assetPath('noodles') },
  { id: 7, category: 'grain', name: '시리얼', weight: '25g', portion: '2/3컵', img: assetPath('cereal') },
  { id: 13, category: 'grain', name: '고구마', weight: '70g', portion: '중 1/2개', img: assetPath('sweet_potato') },
  { id: 5, category: 'grain', name: '옥수수', weight: '70g', portion: '1/2개', img: assetPath('corn') },
  { id: 14, category: 'grain', name: '감자', weight: '140g', portion: '중 1개', img: assetPath('potato') },
  { id: 10, category: 'grain', name: '백설기', weight: '50g', portion: '', img: assetPath('baekseolgi') },
  { id: 8, category: 'grain', name: '시루떡', weight: '50g', portion: '', img: assetPath('sirutteok') },
  { id: 4, category: 'grain', name: '인절미', weight: '50g', portion: '3개', img: assetPath('injeolmi') },
  { id: 15, category: 'grain', name: '호밀빵', weight: '35g', portion: '', img: assetPath('rye_bread') },
  { id: 9, category: 'grain', name: '베이글', weight: '35g', portion: '', img: assetPath('bagel') },
  { id: 6, category: 'grain', name: '식빵', weight: '35g', portion: '소 1개', img: assetPath('bread') },
  { id: 3, category: 'grain', name: '치아바타', weight: '35g', portion: '', img: assetPath('ciabatta') },

  // 어육류군 (Meat/Protein) - 영양사 요청 순서
  { id: 105, category: 'meat', name: '살코기', weight: '40g', portion: '탁구공 크기', img: assetPath('lean_meat') },
  { id: 108, category: 'meat', name: '조기', weight: '50g', portion: '소 1토막', img: assetPath('yellow_croaker') },
  { id: 101, category: 'meat', name: '가자미', weight: '50g', portion: '소 1토막', img: assetPath('flatfish') },
  { id: 102, category: 'meat', name: '고등어', weight: '50g', portion: '소 1토막', img: assetPath('mackerel') },
  { id: 110, category: 'meat', name: '계란', weight: '55g', portion: '중 1개', img: assetPath('egg') },
  { id: 103, category: 'meat', name: '두부', weight: '80g', portion: '1/4모', img: assetPath('tofu') },
  { id: 109, category: 'meat', name: '검정콩', weight: '20g', portion: '2큰술', img: assetPath('black_bean') },
  { id: 104, category: 'meat', name: '멸치', weight: '15g', portion: '잔 것 1/4컵', img: assetPath('anchovy') },
  { id: 111, category: 'meat', name: '물오징어', weight: '50g', portion: '몸통 1/3등분', img: assetPath('squid') },
  { id: 106, category: 'meat', name: '새우(중하)', weight: '50g', portion: '3마리', img: assetPath('shrimp') },
  { id: 107, category: 'meat', name: '조갯살', weight: '70g', portion: '1/3컵', img: assetPath('clam_meat') },

  // 과일군 (Fruit) - 영양사 요청 순서
  { id: 206, category: 'fruit', name: '복숭아(백도)', weight: '100g', portion: '대 1/2개', img: assetPath('peach') },
  { id: 203, category: 'fruit', name: '바나나', weight: '80g', portion: '중 2/3개', img: assetPath('banana') },
  { id: 212, category: 'fruit', name: '포도', weight: '80g', portion: '소 19알', img: assetPath('grape') },
  { id: 208, category: 'fruit', name: '샤인머스켓', weight: '80g', portion: '5알', img: assetPath('shine_muscat') },
  { id: 201, category: 'fruit', name: '귤', weight: '100g', portion: '대 1개', img: assetPath('tangerine') },
  { id: 205, category: 'fruit', name: '배', weight: '100g', portion: '대 1/5개', img: assetPath('pear') },
  { id: 207, category: 'fruit', name: '사과(부사)', weight: '100g', portion: '중 1/2개', img: assetPath('apple') },
  { id: 210, category: 'fruit', name: '오렌지', weight: '100g', portion: '대 1/2개', img: assetPath('orange') },
  { id: 202, category: 'fruit', name: '딸기', weight: '150g', portion: '중 7개', img: assetPath('strawberry') },
  { id: 209, category: 'fruit', name: '수박', weight: '150g', portion: '중 1쪽', img: assetPath('watermelon') },
  { id: 211, category: 'fruit', name: '토마토', weight: '250g', portion: '대 1개', img: assetPath('tomato') },
  { id: 204, category: 'fruit', name: '방울토마토', weight: '200g', portion: '중 15개', img: assetPath('cherry_tomato') },
];
