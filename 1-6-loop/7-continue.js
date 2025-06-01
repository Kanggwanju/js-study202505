

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
}

// 1부터 20까지의 숫자 중에서 3의 배수를 제외하고 나머지 숫자를 출력하는 예제
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
