
const student = {
  stuName: '뽀로로',
  age: 5,
  birthDay: '2020-01-01'
};

// 구조가 쉬울 때는 이렇게 표현할 수 있지만, 구조가 복잡해지면 변수로 추출하는게 간단해진다.
// console.log(`학생의 이름은 ${student.stuName}이고, 나이는 ${student.age}살이고, 생일은 ${student.birthDay}입니다.`);
/*
예전에 사용하던 문법
const name = student.stuName;
const age = student.age;
const birth = student.birthDay;
*/

// 이미 선언된 변수의 이름과 같을 경우 에러를 일으킴.
// stuName: name 처럼 이름을 변경 가능
// 객체는 배열과 달리 순서 상관이 없고, 원하는 것만 뽑을 수 있음
const stuName = '김철수';

const {stuName: name, age, birthDay} = student;
console.log(`학생의 이름은 ${name}이고, 나이는 ${age}살이고, 생일은 ${birthDay}입니다.`);

console.log('=======================================');

const divStyle = {
  'font-size': '16px',
  'border-radius': '50%'
};
// 프로퍼티 키('font-size')가 ''으로 감싸여진 경우는 divStyle.~ 을 이용하지 못함. 대괄호 이용
// console.log(divStyle['font-size']);

// ''으로 감싸여진 프로퍼티 키는 별칭 지정을 이용해서 디스트럭처링을 하면 된다.
const { 'font-size':fontSize, 'border-radius':radius } = divStyle;
console.log(fontSize);
console.log(radius);


// 함수 내부에서 하지 않고, 파라미터를 받자 마자 바로 디스트럭처링이 가능
const myPetInfo = ({name, age}) => {

  // 함수 내부에서 파라미터를 이용하여 디스트럭처링
  // 파라미터가 myPet(name, age를 가진 객체)일 경우.
  // const { name, age } = myPet;

  console.log(`우리 애완동물의 이름은 ${name}입니다.`);
  console.log(`우리 애완동물의 나이는 ${age}입니다.`);
};

// 따로 변수에 넣어놔야 디스트럭처링을 할 수 있다.
const cat = {
  name: '나비',
  age: 7,
  kind: '러시안블루',
  injection: true
};

// 함수 호출부에서 바로 입력하면 디스트럭처링을 할 수 없음.
// = 이름 변경 불가
myPetInfo({
  name: '초코',
  age: 3
});

// cat 객체의 프로퍼티 키 kind, injection은 디스트럭처링을 진행하고,
// 이외의 나머지 키들은 basicInfo 객체에 복사해줌.
const {kind, injection, ...basicInfo} = cat;
console.log(kind);
console.log(injection);
console.log(basicInfo);
