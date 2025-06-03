/*
📁 step02-refactored.js
📝 리팩토링 포인트
- flag 제거
- 조건 간소화 (if (foundUser))
- 객체를 변수에 저장하여 반복 최소화
*/



let users = [
  { id: 'kim123', password: 'pw01', name: '김철수' },
  { id: 'lee456', password: 'pw02', name: '이영희' },
  { id: 'park789', password: 'pw03', name: '박민수' }
];

let inputId = prompt('아이디를 입력해주세요.');

// 입력한 아이디에 해당하는 사용자 찾기
let foundUser = null;

for (let user of users) {
  if (user.id === inputId) {
    foundUser = user;
    break; // 찾으면 반복 중단!
  }
}

if (foundUser) {
  let inputPassword = prompt('비밀번호를 입력해주세요.');
  if (foundUser.password === inputPassword) {
    alert(`${foundUser.name}님 로그인 성공`);
  } else {
    alert('비밀번호 틀림');
  }
} else {
  alert('존재하지 않는 회원입니다');
}
