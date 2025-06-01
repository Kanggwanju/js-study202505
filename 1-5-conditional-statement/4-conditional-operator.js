
// 돈이 3000원 이상이면 김밥을 먹을 수 있고 미만이면 집밥을 먹어야 한다.
// 그런데 먹을 수 있는 음식이름을 변수에 조건부로 저장해야 한다.

let money = 2000;

// 3항 조건 연산자
let foodName = (money >= 4000) ? '김밥' : '집밥';

/*
let foodName; // 음식이름을 저장할 변수
if (money >= 4000) {
  foodName = '김밥';
} else {
  foodName = '집밥';
}
*/
console.log(`먹을 수 있는 음식 이름: ${foodName}`);
console.log('==========================');

// 3항 조건 연산자 쓰면 가독성이 떨어지는 경우
let score = 60;
(score >= 70) ? console.log('합격') : console.log('불합격');

if (score >= 70) {
  console.log('합격');
} else {
  console.log('불합격');
}

console.log('==========================');


let age = 15;
































