
// 스프레드: 배열을 평탄화(해체해서 늘어놓는다) 시킨다.

const foods = ['햄버거', '콜라', '감자튀김'];
const fruits = ['오렌지', '레몬', '라임'];

// combination ['햄버거', '콜라', '감자튀김', '오렌지', '레몬', '라임']

// 예전에 사용하던 문법
// const combination = foods.concat(fruits);

// ...이 배열에서 꺼내주는 역할을 한다.
const combination = [...foods, ...fruits];

console.log(combination);

// 배열 복사
const newFruits = [...fruits];
// 0번 인덱스에 족발 추가
const myFavorites = ['족발', ...foods];
console.log(myFavorites);

// push : 원본을 손상시키므로 추천되지 않음.
const newFoods = [...foods, '치즈스틱'];
console.log(newFoods);
console.log(foods);
