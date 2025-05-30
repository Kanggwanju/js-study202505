
// 반복문 3요소: 시작값(begin), 끝조건(end), 증감값
for (let n = 1; n <= 5; n++) {
  console.log("안녕");
}
console.log("반복문 종료!");

// n=1, n<=5, 안녕, n++, n<=5, 안녕, ...

for (let i = 1; i <= 5; i++) {
  console.log(`${i}번 학생 안녕하세요!`);
}
console.log("반복문 종료!");

// 구구단 2단 출력
/*let level = 6;
for (let gogo=1; gogo<=9; gogo++) {
  console.log(`${level} * ${gogo} = ${level * gogo}`);
}*/
// 구구단 3단 출력
let level = 3;
for (let line = 1; line <= 9; line++) {
  console.log(`${level} x ${line} = ${level * line}`);
}
// 변수값 swap
let x = 10;
let y = 20;
let t = x;
x = y;
y = t;
console.log(`x: ${x}, y:${y}`);

console.log('====================');

// 1 ~ 10 누적합 - 합을 저장할 공간을 설정하고
// 거기에 반복해서 1부터 10까지의 숫자를 더해나간다.
let number = 0;
let n = 1;
for (n; n<=10; n++) {
  number = number + n;
}
console.log(`number: ${number}`);

console.log('===================');

/*for (let i = 5; i>= 0; i--) {
  console.log(`countdown - ${i}`);
}*/

/*
for (let i = 3; i <= 100; i+=3) {
  console.log(`i: ${i}`);
}
*/

console.log('===================');
// 무한루프 조심, 시작과 끝, 증감값에 대해 신경써야한다.
/*for (let i = 0; i<10; i--) {
  console.log('안녕');
}*/

