export const foodCategories = [
  { id: 'grain', name: '곡류군' },
  { id: 'meat', name: '어육류군' },
  { id: 'fruit', name: '과일군' },
];

const assetPath = (name) => `/assets/${name}.png`;

export const foodData = [
  // 곡류군 (Grains)
  { id: 1, category: 'grain', name: '쌀밥', weight: '70g', portion: '1/3공기', img: assetPath('rice') },
  { id: 2, category: 'grain', name: '현미밥', weight: '70g', portion: '1/3공기', img: assetPath('brown_rice') },
  { id: 3, category: 'grain', name: '치아바타', weight: '35g', portion: '1조각', img: assetPath('ciabatta') },
  { id: 4, category: 'grain', name: '인절미', weight: '50g', portion: '3개', img: assetPath('injeolmi') },
  { id: 5, category: 'grain', name: '옥수수', weight: '70g', portion: '1/2개', img: assetPath('corn') },
  { id: 6, category: 'grain', name: '식빵', weight: '35g', portion: '1쪽', img: assetPath('bread') },
  { id: 7, category: 'grain', name: '시리얼', weight: '30g', portion: '3/4컵', img: assetPath('cereal') },
  { id: 8, category: 'grain', name: '시루떡', weight: '50g', portion: '1토막', img: assetPath('sirutteok') },
  { id: 9, category: 'grain', name: '베이글', weight: '35g', portion: '1/2개', img: assetPath('bagel') },
  { id: 10, category: 'grain', name: '백설기', weight: '50g', portion: '1토막', img: assetPath('baekseolgi') },
  { id: 11, category: 'grain', name: '미숫가루', weight: '30g', portion: '1/2컵', img: assetPath('misugaru') },
  { id: 12, category: 'grain', name: '국수', weight: '90g', portion: '1/2공기', img: assetPath('noodles') },
  { id: 13, category: 'grain', name: '고구마', weight: '70g', portion: '1/2개', img: assetPath('sweet_potato') },
  { id: 14, category: 'grain', name: '감자', weight: '140g', portion: '1개', img: assetPath('potato') },
  { id: 15, category: 'grain', name: '호밀빵', weight: '35g', portion: '1쪽', img: assetPath('rye_bread') },

  // 어육류군 (Meat/Protein)
  { id: 101, category: 'meat', name: '가자미', weight: '40g', portion: '1토막', img: assetPath('flatfish') },
  { id: 102, category: 'meat', name: '고등어', weight: '40g', portion: '1토막', img: assetPath('mackerel') },
  { id: 103, category: 'meat', name: '두부', weight: '80g', portion: '1/5모', img: assetPath('tofu') },
  { id: 104, category: 'meat', name: '멸치', weight: '15g', portion: '1/4컵', img: assetPath('anchovy') },
  { id: 105, category: 'meat', name: '살코기', weight: '40g', portion: '1회분', img: assetPath('lean_meat') },
  { id: 106, category: 'meat', name: '새우', weight: '40g', portion: '3~5마리', img: assetPath('shrimp') },
  { id: 107, category: 'meat', name: '조갯살', weight: '40g', portion: '1/3컵', img: assetPath('clam_meat') },
  { id: 108, category: 'meat', name: '조기', weight: '40g', portion: '1토막', img: assetPath('yellow_croaker') },
  { id: 109, category: 'meat', name: '검은콩', weight: '20g', portion: '2큰술', img: assetPath('black_bean') },
  { id: 110, category: 'meat', name: '달걀', weight: '55g', portion: '1개', img: assetPath('egg') },
  { id: 111, category: 'meat', name: '오징어', weight: '50g', portion: '1/3마리', img: assetPath('squid') },

  // 과일군 (Fruit)
  { id: 201, category: 'fruit', name: '귤', weight: '120g', portion: '1개', img: assetPath('tangerine') },
  { id: 202, category: 'fruit', name: '딸기', weight: '150g', portion: '7개', img: assetPath('strawberry') },
  { id: 203, category: 'fruit', name: '바나나', weight: '50g', portion: '1/2개', img: assetPath('banana') },
  { id: 204, category: 'fruit', name: '방울토마토', weight: '300g', portion: '20개', img: assetPath('cherry_tomato') },
  { id: 205, category: 'fruit', name: '배', weight: '110g', portion: '1/4개', img: assetPath('pear') },
  { id: 206, category: 'fruit', name: '복숭아', weight: '150g', portion: '1/2개', img: assetPath('peach') },
  { id: 207, category: 'fruit', name: '사과', weight: '100g', portion: '1/3개', img: assetPath('apple') },
  { id: 208, category: 'fruit', name: '샤인머스켓', weight: '100g', portion: '10알', img: assetPath('shine_muscat') },
  { id: 209, category: 'fruit', name: '수박', weight: '150g', portion: '1쪽', img: assetPath('watermelon') },
  { id: 210, category: 'fruit', name: '오렌지', weight: '100g', portion: '1/2개', img: assetPath('orange') },
  { id: 211, category: 'fruit', name: '토마토', weight: '350g', portion: '2개', img: assetPath('tomato') },
  { id: 212, category: 'fruit', name: '포도', weight: '100g', portion: '19알', img: assetPath('grape') },
];
