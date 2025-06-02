
let foods = ['닭꼬치', '피자', '햄버거', '팝콘'];
console.log(foods);

// indexOf() : 배열의 특정 요소가 몇번 인덱스에 있는지 알려줌.
// 있으면 인덱스 번호 리턴, 없으면 -1 리턴
let idx = foods.indexOf('피자');
console.log(`idx: ${idx}`);

// 음식목록에서 피자를 찾아서 보쌈으로 바꿔주세요.
foods[foods.indexOf('피자')] = '보쌈';
console.log(foods);

// includes(): 배열에 특정 요소가 있는지의 유무를 확인
// true or false 반환
let flag = foods.includes('파스타');
console.log(`flag: ${flag}`);

// 음식목록에 햄버거가 없다면~
if (!foods.includes('햄버거')) {}

console.log('=======================================');


// slice() : 배열을 원하는 만큼 분할해서 복사배열로 반환
// 원본이 안 변한다.
// numbers.slice (1, 3); 1이상 3미만
let numbers = [10, 20, 30, 40, 50, 60];

let slicedNumbers = numbers.slice (1, 3);
console.log(`slice: `, slicedNumbers);
console.log(`origin: `, numbers);

console.log(numbers.slice(3)); // 3번부터 끝까지
console.log(numbers.slice()); // 전체복사

console.log('=======================================');
// splice() : 배열의 요소를 추가하거나 삭제 (중간에서 작업 가능)
// splice(시작) 시작 위치 이후로 다 지움
// splice(시작, 지울 개수) 시작 위치이상 지울 개수에 따라 지워짐
// splice(시작, 지울 개수, 그 자리에 넣을 아이템)
// 지울 개수를 0으로 하면 시작 위치에 아이템을 그냥 집어넣을 수 있다.
// 배열의 원본을 건드림.
console.log(foods);

foods.splice(2, 1);
console.log(foods);

foods.splice(0, 1, '마라탕');
console.log(foods);

foods.splice(2, 0, '라멘');
console.log(foods);
















