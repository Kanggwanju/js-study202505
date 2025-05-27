
// string : 문자열
// [h, e, l, l, o]

let myName = "김철수";
myName = `뽀로로`; // 특수 문법이 포함됨
console.log(typeof myName);

myName = 100;
console.log(typeof myName);

let sentence = '너 선 그 "자세" 그대로 죽어라.';
console.log(sentence);

let htmlTag = "<ul>\n\t<li>딸기</li>\n\t<li>바나나</li>\n</ul>";
console.log(htmlTag);
htmlTag = `
<ul>
  <li>딸기</li>
  <li>바나</li>
</ul>
`
console.log(htmlTag);

// x월 x일은 x입니다.
let month = 6;
let day = 6;
let anniversary = '현충일';
// console.log(month + '월 '+ day + '일은 ' + anniversary + '입니다.');
console.log(`${month}월 ${day}일은 ${anniversary}입니다.`);
