/*
- Quiz.
아래 요구사항에 맞는 코드를 작성하고
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후,
   입력받은 값들을 배열에 순차적으로 저장합니다.

2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/
let result = 0;
let List = [];


while (true) {
  let a = prompt('숫자를 입력하세요.\n그만두려면 그만이라고 입력하세요!');
  if (a === '그만') {
    for (let n of List) {
      if (isNaN(+n)) {
        // alert('문자');
      } else {
        // alert('숫자');
        result += +n;
      }
    }
    alert(`입력한 숫자 목록 [${List}]\n입력한 숫자 총합: ${result}`);
    break;
  } else {
    List.push(a);
  }
}

// 배운 점
// 1. 문자열에 + 하면 NaN이 나온다.
// 2. alert 에서 배열을 ${List} 하면 대괄호를 빼서 나옴.
// 3. prompt('') 내부에서 '을 쓰고 싶으면 \'으로 쓰면 된다.


// 선생님 풀이
/*
// 숫자들을 쌓아놓을 배열
let numbers = [];

// 총합을 저장할 변수
let total = 0;

while (numbers.length < 6) {
  // 사용자에게 특정 숫자를 입력받음
  let num = prompt('숫자를 입력하세요.\n그만두려면 \'그만\'이라고 입력하세요!');

  // 종료조건
  if (num === '그만') {
    break;
  }
  // 입력한 데이터가 숫자인지 검증
  if (isNaN(+num)) {
    alert('숫자만 정확하게 입력하세요.');
    continue;
  }

  // 해당숫자를 배열에 저장
  numbers.push(num);
  total += parseInt(num);

} // end while

alert(`입력한 숫자 목록: [${numbers}]
입력한 숫자 총합: ${total}`);
*/

