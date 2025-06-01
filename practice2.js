/*
    # v1.0 요구사항

    시스템은 1~10사이의 무작위의 정수 2개를 생성하여
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여
    사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.

    # v1.1 요구사항

    종료시점에 시스템은 정답횟수와 오답횟수를 출력한다.

    # v1.2 요구사항

    덧셈이외에 뺄셈, 곱셈을 랜덤으로 추가 출제한다.

    # v1.3 요구사항

    난이도를 3가지 (상중하)로 설정하여
    상 난이도에서는 세자리수 사칙연산문제를 출제
    중 난이도는 두자리수
    하 난이도는 한자리수
*/

let randomNum1;
let randomNum2;
let temp;
let maxNum;
let minNum;
let answer;
let correctAnswer;
let questionNum = 1;
let correctNum = 0;
let wrongNum = 0;
let operation;
let level = +prompt(`~~~~~ 난이도 설정 ~~~~~\n[ 1. 상 (3자리수) | 2. 중 (2자리수) | 3. 하 (1자리수) ]`);;


// Math.floor(Math.random()*(maxNum - minNum) + minNum);
while (true) {
    if (level === 1) {
        maxNum = 1000;
        minNum = 100;
    } else if (level === 2) {
        maxNum = 100;
        minNum = 10;
    } else if (level === 3) {
        maxNum = 10;
        minNum = 1;
    }

    randomNum1 = Math.floor(Math.random()*(maxNum - minNum) + minNum);
    randomNum2 = Math.floor(Math.random()*(maxNum - minNum) + minNum);
    if (randomNum2 >= randomNum1) {
        temp = randomNum1;
        randomNum1 = randomNum2;
        randomNum2 = temp;
    }

    operation = Math.floor(Math.random()*(4 - 1) + 1);

    if (operation === 1) {
        correctAnswer = randomNum1 + randomNum2;
        answer = prompt(`Q${questionNum}. ${randomNum1} + ${randomNum2} = ??`);
    } else if (operation === 2) {
        correctAnswer = randomNum1 - randomNum2;
        answer = prompt(`Q${questionNum}. ${randomNum1} - ${randomNum2} = ??`);
    } else if (operation === 3) {
        correctAnswer = randomNum1 * randomNum2;
        answer = prompt(`Q${questionNum}. ${randomNum1} * ${randomNum2} = ??`);
    }
    let userInput = answer;

    // 사용자가 취소하거나 입력을 안 했을 경우
    if (userInput === null || userInput.trim() === '') {
        alert('값을 입력해주세요!');
        continue;
    }

    // 정확히 "0"을 입력했을 경우만 종료
    if (userInput.trim() === '0') {
        alert('게임을 종료합니다.');
        alert(`# 정답 횟수: ${correctNum}회, 틀린 횟수: ${wrongNum}회`);
        break;
    }

    if (+answer === correctAnswer) {
        alert('정답입니다!');
        correctNum++;
        questionNum++;
    } else if (+answer !== correctAnswer){
       alert('틀렸습니다!');
       wrongNum++;
       questionNum++;
    }
}























