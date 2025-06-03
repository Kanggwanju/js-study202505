/*
🔹 3단계 시나리오 - 로그인 성공할 때까지 반복하기

1. 여러 명의 사용자 정보를 객체 배열 users에 담는다.

2. 사용자에게 아이디를 입력받는다.
  - 없다면 "존재하지 않는 회원입니다" 출력

3. 있다면 비밀번호를 입력받는다.
  - 비밀번호가 맞으면 "로그인 성공! {이름}님 환영합니다" 출력 후 반복 종료
  - 틀리면 "비밀번호가 틀렸습니다" 출력

4. 로그인에 성공할 때까지 2~3단계를 계속 반복
*/

let users = [
  { id: 'kim123', password: 'pw01', name: '김철수' },
  { id: 'lee456', password: 'pw02', name: '이영희' },
  { id: 'park789', password: 'pw03', name: '박민수' }
];

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
}
