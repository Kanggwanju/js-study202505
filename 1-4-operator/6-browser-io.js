console.log('브라우저 연결!');


/*
  브라우저 전용함수: nodejs환경에서는 실행 불가

  alert(): 브라우저 출력창을 띄움
  prompt(): 브라우저 입력창을 띄움
  confirm(): 브라우저 확인/취소창을 띄움
*/
// let userName = prompt('너의 이름은?');
// console.log(`입력된 이름: ${userName}`);
// alert(`${userName}님 안녕?`);

// 데이터를 주고받을 때는 문자로 저장하여 주고 받는게 좋음.
// ex) 000101을 숫자로 처리 -> 101, 문자로 처리 -> '000101'
let number = prompt('좋아하는 숫자를 쓰세요.');

alert(`당신이 좋아하는 숫자에 100을 더하면 ${+number + 100}입니다.`)


















