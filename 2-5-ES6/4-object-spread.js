
const person = {
  name: '홍길동',
  age: 30
};

// 아래 방식으로 객체를 복사하면 이후에 person의 프로퍼티키, 값이 변경되면
// 복사한 객체까지 동시에 변경이 된다.
// const copyPerson = person;
const copyPerson = { ...person };


person.age = 40;
person.occupation = '개발자';

console.log('person: ', person);
console.log('copyPerson: ', copyPerson);

console.log('=======================================');

const newPerson = {
  ...person,
  hobbies: ['산책', '풋살'],
  // 기존 객체에 있던 정보 수정
  age: 20
};
console.log(newPerson);
