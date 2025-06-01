
let number1 = +prompt('첫번째 수 입력');
let number2 = +prompt('두번째 수 입력');
let number3 = +prompt('세번째 수 입력');

let a = +prompt('첫번째 수 입력');
let b = +prompt('두번째 수 입력');
let c = +prompt('세번째 수 입력');

// 자리 뺏기 싸움
// 최소값을 담을 변수
let min = a;
// 가장 작은 수 찾기
if (b < min) {
  min = b;
}
if (c < min) {
  min = c;
}
alert(`최소값: ${min}`);

// if (number2 >= number1) {
//   if (number3 >= number1) {
//     alert(`최소값: ${number1}`);
//   } else {
//     alert(`최소값: ${number3}`);
//   }
// } else {
//   if (number3 >= number2) {
//     alert(`최소값: ${number2}`);
//   } else {
//     alert(`최소값: ${number3}`);
//   }
// }