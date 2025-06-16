
// 일급 함수: 함수를 값으로 처리
// 함수가 함수를 리턴하는 것이 가능

function foo() {
  return 100;
}

function bar() {
  return foo;
}

const result = bar();
console.log(typeof result); // 함수
console.log(result);        // foo

const r1 = result(); // foo();
console.log(`r1: ${r1}`); // 100

function calculate() {
  // 중첩함수, 헬퍼함수
  function add(n1, n2) {
    return n1 + n2;
  }
  return add;
}

// 중첩함수, 헬퍼함수를 calculate 외부에서
// 호출하는 것은 불가능
// add(10, 20); => 에러!
const result2 = calculate(); // add()
console.log(`result2: `, result2(50, 70));

console.log('=======================================');

// function calculate2() {
//   return (n1, n2) => n1 * n2;
// }

const calculate2 = () => (n1, n2) => n1 * n2;

const r3 = calculate2()(10, 3);
console.log(`r3: ${r3}`);

