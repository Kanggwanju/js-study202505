
function foo(callback) {

  return (...x) => {
    callback(...x);
  };
}

function sayHello(greet) {
  console.log(greet);
}

function sayGoodbye(name, hobby) {
  console.log(`${name}의 ${hobby} 이제 그만 ~~`);
}
const bar = foo(sayGoodbye);
bar('김철수', '수영');


// const bar = foo(sayHello);
// bar('안녕');