/*
  일급 함수
  : 함수를 마치 하나의 값처럼 보는 개념
  
  -> 함수를 다른 함수의 매개값으로 넘기는게 가능
  -> 함수가 함수를 리턴하는 것도 가능
*/

function foo(define) {
  define(); // define이 함수이면 foo 내부에서 호출도 가능
}

foo(function ( ) {
  console.log('노는게 젤 조아~');
  let x = 10;
  console.log('뽀로로롱롱롱');
  console.log('ㅋㅋㅋㅋ이거 재밌네 ~');
});

// 마음대로 함수 내부를 바꾸고 싶다면 직접
// 함수를 인수에 담아서 호출하면 된다. = 콜백
foo(function () {
  console.log('A');
  console.log('B');
  console.log('C');
});

console.log('=======================================');

// 편지지 양식 함수
function makePaper (receiver, sender, createContent) {
  console.log(`수신인: ${receiver}`);
  console.log('=======================================');
  // 이 사이에 편지 내용을 쓰세요.
  createContent();

  if (receiver === '하츄핑') {
    console.log('알로하~');
  }

  console.log('=======================================');
  console.log(`발신인: ${sender}`);
}

makePaper('둘리', '도우너', function () {
  console.log('도우너가 둘리에게 일침을 가한다.');
  console.log('지구정복을 포기해라');
});

makePaper('하츄핑', '하치와레', function () {
  for (let i = 0; i < 5; i++) {
    console.log('하이하츄핑핑~!!!');
  }
});






















