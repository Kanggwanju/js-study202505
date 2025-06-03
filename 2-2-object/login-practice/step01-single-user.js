/*
💬 시나리오 - 1단계 시나리오 - 단일 사용자 정보 확인하기

1. 객체 user가 있습니다. 이 객체는 하나의 회원 정보를 담고 있습니다.
- id: "test01"
- password: "1234"
- name: "홍길동"

2. 사용자에게 id를 입력받습니다.
3. 입력한 id가 user 객체의 id와 같으면 → 비밀번호 입력을 요구합니다.
4. 비밀번호가 일치하면 "로그인 성공", 틀리면 "비밀번호가 틀렸습니다"를 출력하세요.
5. id가 다르면 "존재하지 않는 아이디입니다"를 출력하세요.

🧪 목표: 객체의 프로퍼티 접근과 조건문(if)을 정확히 사용해보는 연습!
*/

let user = {
  id: 'test01',
  password: '1234',
  name: '홍길동',
}

let inputId;
let inputPassword;
inputId = prompt('아이디를 입력해주세요.');

if (inputId === user['id']) {
  inputPassword = prompt('비밀번호를 입력하세요');
  if (inputPassword === user.password) {
    alert(`${user.name}님, 로그인 성공!`);
  } else {
    alert('비밀번호가 틀렸습니다.');
  }
} else {
  alert('존재하지 않는 아이디입니다.');
}
