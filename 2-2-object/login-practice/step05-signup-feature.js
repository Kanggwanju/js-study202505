/*
🔹 5단계 시나리오 - 회원가입 기능 추가하기

1. 사용자 정보를 담은 객체 배열 users가 존재합니다.

2. 사용자에게 아이디를 입력받습니다.

3. 입력한 아이디가 없다면
  - "존재하지 않는 회원입니다." 메시지 출력
  - "회원가입 하시겠습니까?"를 confirm()으로 물어봅니다.
  - 확인을 누르면:
    - 새로 가입할 비밀번호와 이름을 prompt()로 입력받고
    - users 배열에 새로운 객체로 push() 합니다.
    - "회원가입이 완료되었습니다." 출력
    - 이어서 다시 로그인 시도 (반복 계속됨)
  - 취소를 누르면:
    - "회원가입이 취소되었습니다." 출력
    - 다시 로그인 루프로 돌아감 (횟수 차감 O)

4. 아이디가 있다면 비밀번호 입력 →
  - 맞으면 로그인 성공, 종료
  - 틀리면 로그인 실패, 시도 횟수 차감

5. 로그인 시도는 최대 5회로 제한하며, 가입 후 첫 로그인 시도부터 포함
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
      let accountPass = prompt('설정할 비밀번호를 입력해주세요.');
      let accountName = prompt('설정할 이름을 입력해주세요.');
      user.id = accountId;
      user.password = accountPass;
      user.name = accountName;
      users.push(user);
    } else {
      alert(`회원가입이 취소되었습니다. 남은 시도 횟수: ${count}`);
      count--;
    }
  }

  if (count === 0) {
    alert('로그인 시도 횟수 초과. 계정이 잠겼습니다.');
  }
}


