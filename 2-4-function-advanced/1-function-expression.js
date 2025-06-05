
multiply(20, 10);

// 함수 선언식 : 호출보다 정의가 아래에 있어도 정상 작동
// hoisting: 함수 정의식이 실행시점에 맨위로 끌어올려짐
function multiply(n1, n2) {
  console.log('곱셈!');
}

// 함수 표현식, 값이므로 끝에 ;를 붙여줌
// 이건 호출이 선언보다 위에 있으면 에러가 난다.
// = 호이스팅이 안된다.
const add = function (n1, n2) {
  console.log('덧셈!');
  return n1 + n2;
};

const result = add(10, 20);
console.log(`result: ${result}`);

console.log('=======================================');

console.log(typeof multiply);
console.log(typeof add);

// 함수의 참조값 변경: 함수 이름이 바뀐효과
// 함수의 주소값을 넘기는 것
// multiply(); 함수를 호출
const moolty = multiply;
moolty(50, 20);

const log = console.log;
log('메롱메롱');

const rr = Math.random;
const rn = rr();
console.log(`rn: ${rn}`);


const plus = add;
const r2 = plus(50, 20);
console.log(typeof r2); // number, 70
console.log(typeof plus); // function

const arr = [
    10,
    'hello',
    true,
    [1,2,3],
  { age: 3, name: '영희' },
    add,
    // 함수 표현식, 익명 함수
    function (n1, n2) {
      return n1 - n2;
    }
]
console.log(arr.length); // 7
console.log(typeof arr[5]); // function
console.log(arr[2]); // true
console.log(arr[3][1]); // 2
console.log(arr[4].age); // 3
console.log(arr[4]['name']); // 영희
console.log(arr[5](10, 45)); // 55
console.log(arr[6](100, 70)); // 30

const minus = arr[6];

const r3 = minus(50, 34);
console.log(`r3: ${r3}`); // 16

console.log('=======================================');

const obj = {
  name: '나비',
  age: 5,
  injection: true,
  favorites: ['산책', 공놀이],
  owner: {
    name: '홍길동',
    age: 30
  },
  sleep: function () {
    console.log('쿨쿨 잡니다.');
  },
  plus: add
};

obj.sleep();
const r4 = obj.plus(10, 20);

// 배열의 비밀: 사실 배열은 객체다.
// 프로퍼티 키가 숫자로 되어있는 객체.
const array = {
  0: '짜장면',
  1: '탕수육',
  2: '볶음밥',
  length: 3,
  pop: function () {},
  push: function (...items) {}
};

































