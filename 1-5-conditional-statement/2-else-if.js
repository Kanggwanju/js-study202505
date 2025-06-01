
let age = 18;

// 조건은 위에서부터 순차적으로 작동하기 때문에
// 위쪽 조건이 아래쪽 조건을 먹어버리면 안된다.
// 성인에서 한번 조건이 걸리면 if else 문 전체를 나간다.

if (age >= 20) {
  console.log('성인입니다.');
} else if (age >= 17) {
  console.log('고등학생입니다.');
} else if (age >=14) {
  console.log('중학생입니다.');
} else if (age >= 8) {
  console.log('초등학생입니다.');
} else {
  console.log('미취학 아동입니다.');
}