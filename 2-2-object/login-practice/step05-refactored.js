/*
📁 step05-refactored.js
🔹 5단계 시나리오 리팩토링 버전 - 회원가입 기능 + 중복 체크 포함

1. 로그인 시도는 최대 5번으로 제한됩니다.
2. 아이디가 존재하지 않으면 confirm()으로 회원가입 여부를 묻고,
   - 확인 시 새로운 사용자 정보를 입력받아 users 배열에 추가합니다.
   - 중복 아이디는 등록할 수 없습니다.
   - 가입 후 시도 횟수를 5회로 초기화합니다.
   - 취소 시 남은 시도 횟수가 차감됩니다.
3. 아이디가 존재하면 비밀번호 입력 → 성공 시 로그인 종료, 실패 시 시도 횟수 차감
4. 시도 횟수가 0이 되면 계정이 잠깁니다.

🧠 학습 포인트:
- 배열 탐색 (for...of)
- 사용자 입력(prompt, confirm)
- 조건 분기, 반복 제어
- 중복 검사 (Array.prototype.some)
- 객체 생성 및 push()
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
    let isAgree = confirm('회원가입 하시겠습니까?');

    if (isAgree) {
      count = 5;
      let user = {};
      let accountId = prompt('설정할 아이디를 입력해주세요.');
      let duplicate = users.some(user => user.id === accountId);
      if (duplicate) {
        alert('이미 존재하는 아이디입니다.');
      } else {
        let accountPass = prompt('설정할 비밀번호를 입력해주세요.');
        let accountName = prompt('설정할 이름을 입력해주세요.');
        user.id = accountId;
        user.password = accountPass;
        user.name = accountName;
        users.push(user);
      }
    } else {
      alert(`회원가입이 취소되었습니다. 남은 시도 횟수: ${count}`);
      count--;
    }
  }

  if (count === 0) {
    alert('로그인 시도 횟수 초과. 계정이 잠겼습니다.');
  }
}


