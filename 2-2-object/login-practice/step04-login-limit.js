/*
🔹 4단계 시나리오 - 로그인 시도 제한 두기

1. 사용자 정보를 객체 배열 users에 저장한다.

2. 사용자에게 아이디 → 비밀번호 입력을 받는다.

3. 로그인 실패 시도 횟수를 5번으로 제한한다.

4. 5번 안에 로그인 성공하면 "로그인 성공" 메시지 출력 후 종료

5. 5번 모두 실패하면 "로그인 시도 횟수 초과. 계정이 잠겼습니다." 출력 후 종료
*/

let users = [
  { id: 'kim123', password: 'pw01', name: '김철수' },
  { id: 'lee456', password: 'pw02', name: '이영희' },
  { id: 'park789', password: 'pw03', name: '박민수' }
];
let count = 5;

while (true) {
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
      alert('비밀번호가 틀렸습니다.');
    }
  } else {
    alert('존재하지 않는 회원입니다.');
  }

  if (count > 0) {}
  else {
    alert('로그인 시도 횟수 초과. 계정이 잠겼습니다.');
    break;
  }
  count --;
}



