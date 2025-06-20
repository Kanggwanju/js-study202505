
import { $btn } from './dom.js';
import { clickHandler } from './event-handler.js';

// import { add as plus, sub, multi } from './calculation.js'
// import { operation } from './calculation.js'
import xx from './calculation.js';

// const {add: plus, sub, multi} = operation;
const {add: plus, sub, multi} = xx;

const add = (...numbers) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

console.log(plus(10, 20));
console.log(sub(10, 8));
console.log(multi(3, 5));


// 모든 태그가 그려진 이후에 발생하는 이벤트
// document.addEventListener('DOMContentLoaded', e => {


console.log('btn: ', $btn);



$btn.addEventListener('click', clickHandler);

// });