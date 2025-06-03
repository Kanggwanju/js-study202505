/*
💬 시나리오 - 2단계 시나리오 - 여러 회원 중 로그인

1. 여러 명의 회원 정보를 객체 배열 users에 담습니다. 예를 들어:
  [
    { id: "kim123", password: "pw01", name: "김철수" },
    { id: "lee456", password: "pw02", name: "이영희" },
    { id: "park789", password: "pw03", name: "박민수" }
  ]

2. 사용자에게 id를 입력받고, 배열에서 해당 id가 존재하는지 확인합니다.

3. 없으면 "존재하지 않는 회원입니다" 출력.

4. 있으면 비밀번호 입력 → 비밀번호가 일치하면 "로그인 성공", 아니면 "비밀번호 틀림" 출력!

🧪 목표: 배열 안 객체 탐색 연습 (`for`, `find`, `some`, `includes` 등 중 택1)
*/

let users = [
  { id: 'kim123', password: 'pw01', name: '김철수' },
  { id: 'lee456', password: 'pw02', name: '이영희' },
  { id: 'park789', password: 'pw03', name: '박민수' }
];

let inputId;
let inputPassword;
let flag1;
let flag2;
let loginName;

inputId = prompt('아이디를 입력해주세요.');
for (let user of users) {
  if (user.id === inputId) {
    flag1 = 1;
    loginName = user.name;
  }
}

if (flag1 === 1) {
  inputPassword = prompt('비밀번호를 입력해주세요.');
  for (let user of users) {
    if (user.password === inputPassword) {
      flag2 = 1;
    }
  }

  if (flag2 === 1) {
    alert(`${loginName}님 로그인 성공`)
  } else {
    alert('비밀번호 틀림');
  }
} else {
  alert('존재하지 않는 회원입니다');
}


