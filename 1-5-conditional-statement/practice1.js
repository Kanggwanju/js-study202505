
let userScore = +prompt('점수를 입력하세요');

let grade;
if (userScore >= 90) {
  grade = 'A';
} else if (userScore >= 80) {
  grade = 'B';
} else if (userScore >= 70) {
  grade = 'C';
} else if (userScore >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

alert(grade);
