
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

// 함수 정의부
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

function none(callback) {
  for (const product of productList) {
    if (callback(product)) return false;
  }
  return true;
}

function custom(userArray, callback, type, initialValue) {
  switch (type) {
    case 'filter':
      const filteredArray = [];
      for (const item of userArray) {
        if (callback(item)) filteredArray.push(item);
      }
      return filteredArray;

    case 'map':
      const mappedArray = [];
      for (const item of userArray) {
        mappedArray.push(callback(item));
      }
      return mappedArray;

    case 'reduce':
      let acc = initialValue;
      for (const item of userArray) {
        acc = callback(acc, item);
      }
      return acc;

    case 'find':
      /*
        filter는 조건을 만족하는 모든 항목을 배열로 반환하는 반면,
        find는 조건을 만족하는 첫 번째 항목만 반환하고 끝남
      */
      for (const item of userArray) {
        if (callback(item)) return item;
      }
      return undefined;
    default:
      throw new Error(`지원하지 않는 타입입니다: ${type}`);
  }
}

const result1 = every(product => product.stock > 0);
console.log(result1);  // false

const result2 = some(product => product.category === '음료');
console.log(result2);  // true

const result3 = none(product => product.name.endsWith('이'));
console.log(result3);  // false

const result4 = custom(productList, product => product.tags.includes('인기'), 'filter');
console.log(result4);

const result5 = custom(productList, product => product.name, 'map');
console.log(result5);

const result6 = every(product => product.price >= 2000);
console.log(result6);  // false

const result7 = none(product => !product.tags.includes('탄산'));
console.log(result7);  // false

const result8 = custom(productList, (acc, item) => acc + item.stock, 'reduce', 0);
console.log(result8);  // 33 (15 + 0 + 8 + 10)

const result9 = custom(productList, product => product.tags.includes('필수'), 'find');
console.log(result9);

