
// 1. 10안에 있는 2의 배수를 가로로 출력하기
let resultString = '';
let number = 2;
while (number <= 10) {
  resultString += `${number} `;
  number+=2;
}
console.log(resultString);
/*
for (let i = 2; i <= 10; i+=2) {
  resultString += `${i} `;
}*/

// 내가 쓴 for문
/*for (let i = '2'; i <= 10; i= parseInt(i) + 2) {
  resultString = resultString + i + ' ';
}*/

console.log('==============================');

// 2. 1~50 사이 6의 배수 출력하기
let number2 = 1;
while (number2 <= 50) {
  if (number2 % 6 === 0) {
    console.log(number2);
  }
  number2++;
}

/*for (let i = 1; i <= 50; i++) {
  if (i % 6 === 0) {
    console.log(i);
  }
}*/

/*for (let i = 6; i <= 50; i+=6) {
  console.log(`${i}`);
}*/
console.log('==============================');

// 3. 1~100사이 7의 배수이면서 14의 배수가 아닌수 출력하기
let number3 = 1;
while (number3 <= 100) {
  if (number3 % 7 === 0 && number3 % 14 !== 0) {
    console.log(number3);
  }
  number3++;
}

/*for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0 && i % 14 !== 0) {
    console.log(i);
  }
}*/

/*
for (let i = 7; i <= 100; i+=7) {
  if ( i % 14 === 0 ) { }
  else {
    console.log(`i: ${i}`);
  }
}*/
console.log('==============================');

// 4. 1~7777 안에 있는 3의 배수 개수 알아내기
let count = 0;
let number4 = 1;
while (number4 <= 7777) {
  if (number4 % 3 === 0) {
    count ++;
  }
  number4++
}

/*let count = 0;
for (let i = 1; i <= 7777; i++) {
  if (i % 3 === 0) {
    count ++;
  }
}*/

/*let number = 0;
for (let i = 3; i <= 7777; i+=3) {
  number += 1;
}*/
// 변수는 블록 레벨 스코프를 지원하므로 밖에서 i를 호출 할 수 없다.
console.log(`3의 배수의 총 개수: ${number}`);
console.log('==============================');

for (let i = 0; i < 5; i++) {
  console.log('hello');
}










