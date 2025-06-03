/*
📁 step04-refactored.js
💡 흐름 차이 핵심 요약
| 항목                                  | 코드                                          |
| --------------------------------------| ----------------------------------------------|
| `while (true)` + 조건 내부에 `count`  | `while (count > 0)`로 명확하게 종료 조건 선언 |
| `count--` 위치가 애매함               | 실패했을 때만 `count--` 하도록 분기           |
| 사용자가 몇 번의 기회가 있는 지 모름  | 남은 시도 횟수: ${count}로 알려줌             |
*/

let users = [
  { id: 'kim123', password: 'pw01', name: '김철수' },
  { id: 'lee456', password: 'pw02', name: '이영희' },
  { id: 'park789', password: 'pw03', name: '박민수' }
];

let count = 5;

while (count > 0) {
  let inputId = prompt('아이디를 입력해주세요.');
  let foundUser = null;

  for (let user of users) {
    if (inputId === user.id) {
      foundUser = user;
    }
  }

  if (foundUser) {
    let inputPassword = prompt('비밀번호를 입력해주세요.');
    if (inputPassword === foundUser.password) {
      alert(`로그인 성공! ${foundUser.name}님 환영합니다.`);
      break;
    } else {
      alert(`비밀번호가 틀렸습니다. 남은 시도 횟수: ${count}`);
      count--;
    }
  } else {
    alert('존재하지 않는 회원입니다.');
    count--;
  }

  if (count === 0) {
    alert('로그인 시도 횟수 초과. 계정이 잠겼습니다.');
  }
}

