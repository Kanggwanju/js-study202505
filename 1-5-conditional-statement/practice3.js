
let number1 = +prompt('첫번째 수 입력');
let number2 = +prompt('두번째 수 입력');
let number3 = +prompt('세번째 수 입력');

// if (number1 + number2 === number3) {
//   alert('비밀의 문이 열립니다!');
// } else if (number2 + number3 === number1) {
//   alert('비밀의 문이 열립니다!');
// } else if (number1 + number3 === number2) {
//   alert('비밀의 문이 열립니다!');
// } else {
//   alert('퍼즐이 맞지 않습니다. 다시 시도하세요!');
// }

if (number1 + number2 === number3 || 
    number2 + number3 === number1 ||
    number1 + number3 === number2) {
  alert('비밀의 문이 열립니다!');
} else {
  alert('퍼즐이 맞지 않습니다.');
}



// 조건이 맞을 때 사용할 논리 플래그
let isCorrect = false;

if (a + b === c) {
  isCorrect = true;
}
else if (a + c === b) {
  isCorrect = true;
}
else if (b + c === a) {
  isCorrect = true;
}

if (isCorrect) {
  alert('비밀의 문이 열립니다.');
} else {
  alert('퍼즐이 맞지 않습니다.');
}
