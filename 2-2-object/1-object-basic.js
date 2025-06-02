
// 우리 집 강아지 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

// 객체
let myDog1 = {
  name: '초코',
  age: 3,
  tall: 30,
  weight: 10,
  injection: false,
  vegetarian: true,
  favorites: ['산책', '간식']
};

let myDog2 = {
  name: '해피',
  age: 5,
  tall: 45,
  weight: 14,
  injection: true,
  vegetarian: false,
  favorites: ['꼬리흔들기', '뒷발로까지', '초코괴롭히기']
};

// 객체 프로퍼티 참조법
// 배열은 엘리먼트(요소) 참조 = 인덱스
console.log(myDog1.name);
console.log(myDog2.name);
console.log(myDog2.age);

console.log(typeof myDog1); // object
console.log(typeof myDog1.name); // string
console.log(typeof myDog2.injection); // boolean
console.log(typeof myDog2.favorites); // object
console.log(typeof myDog2.favorites[1]); // string

console.log('=======================================');
// 프로퍼티 참조법 2
console.log(myDog2['name']);
console.log(myDog2["age"]);
// console.log(myDog2[age]); -> 에러, ''붙여야함.

// 이건 가능
let height = 'tall';
console.log(myDog1[height]);

console.log('=======================================');
// 활용
let key = 'age';
console.log(myDog2[key]);

let myCat = {
  name: '나비',
  age: 4,
  'my hobby': '시비걸기'
  // 프로퍼티가 띄어쓰기가 있을 경우, my-hobby 같은 경우 '' 사용
};

console.log(myCat['my hobby']);





















