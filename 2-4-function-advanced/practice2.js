
const productList = [
  {
    id: 1,
    name: '초코파이',
    category: '과자',
    price: 3000,
    stock: 15,
    tags: ['인기', '달콤함'],
  },
  {
    id: 2,
    name: '콜라',
    category: '음료',
    price: 1500,
    stock: 0,
    tags: ['탄산', '인기'],
  },
  {
    id: 3,
    name: '물티슈',
    category: '생활용품',
    price: 1000,
    stock: 8,
    tags: ['필수', '편리함'],
  },
  {
    id: 4,
    name: '커피',
    category: '음료',
    price: 2000,
    stock: 10,
    tags: ['카페인', '인기'],
  },
];

function every(callback) {
  for (const product of productList) {
    if (!callback(product)) return false;
  }
  return true;
}

function some(callback) {
  for (const product of productList) {
    if (callback(product)) return true;
  }
  return false;
}


const result1 = every(product => product.stock > 0);
console.log(result1);  // false

const result2 = some(product => product.category === '음료');
console.log(result2);  // true

/*
const result3 = none(product => product.name.endsWith('이'));
console.log(result3);  // false

const result4 = custom(productList, product => product.tags.includes('인기'), 'filter');
console.log(result4);

const result5 = custom(productList, product => product.name, 'map');
console.log(result5);
*/
