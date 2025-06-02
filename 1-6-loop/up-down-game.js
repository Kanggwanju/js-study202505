//========== v1.0 시나리오 =================
// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

//========== v1.1 시나리오 =================
// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

//========== v1.2 시나리오 =================
// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상(3자리수, 20회), 중(2자리수, 10회), 하(1자리수, 5회) 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.


//선생님 풀이
/*// 난이도 입력기회 상수
const DIFFICULT = 4;
const NORMAL = 6;
const EASY = 10;

const MIN = 1, MAX = 100;

// 최소 최대값 변수
let minValue = MIN, maxValue = MAX;

// 1 ~ 100 사이의 무작위 난수 생성
let secret = Math.floor(Math.random() * MAX) + MIN;

// 입력 남은 기회 총 카운트 저장
let countDown;

while (true) {

// 난이도 선택 입력창
  let level = prompt(`
  난이도를 선택하세요!
  [1. 상 (${DIFFICULT}번의 기회) | 2. 중 (${NORMAL}번의 기회) | 3. 하 (${EASY}번의 기회)]
  `);

  switch (level) {
    case '상':
    case '1':
      countDown = DIFFICULT;
      break;
    case '중':
    case '2':
      countDown = NORMAL;
      break;
    case '하':
    case '3':
      countDown = EASY;
      break;
    default:
      alert('난이도를 다시 입력해주세요!');
      continue;
  }
  break; // default가 아닐 경우 작동
}



while (true) {
  // 사용자가 입력한 정답을 저장
  let rangeText = `${minValue} ~ ${maxValue}`;
  if (minValue === maxValue) {
    rangeText = minValue;
  }
  let userAnswer = +prompt(`# 숫자를 입력하세요! [ ${rangeText} ]`);

  // 입력값 검증
  if (userAnswer < minValue || userAnswer > maxValue) {
    alert('범위 안의 값을 입력하세요.');
    continue;
  }

  // 정답을 판별하는 조건 로직
  if (secret === userAnswer) { // 정답인 경우
    alert('정답입니다!');
    break;
  } else if (secret > userAnswer) { // UP인 경우
    alert('UP!!');
    minValue = userAnswer + 1;
  } else { // DOWN인 경우
    alert('DOWN!!');
    maxValue = userAnswer - 1;
  }

  countDown--; // 입력 횟수 1회 차감

  // 입력 횟수 소진 게임 종료
  if (countDown === 0) {
    alert('기회가 모두 소진되었습니다. ㅋㅋㅋㅋ Bye~');
    break;
  } else {
    if (countDown === 1) {
      alert('마지막 기회입니다. 집중하세요!!');
    } else {
      alert(`${countDown}번의 기회가 남았습니다.`);
    }
  }
}*/




// 선택한 숫자
let selectedNumber = 0;

// 1 ~ 100, 랜덤 번호
let minNumber = 1;
let maxNumber;
let randomNumber;

// 제한 횟수
let maxAttempts;
let attempt = 1;

// 선택한 레벨
let selectedLevel = '';

while (true) {
  selectedLevel = prompt(`~~~~~ 난이도 설정 ~~~~~\n[ 1. 상 (3자리수) | 2. 중 (2자리수) | 3. 하 (1자리수)] `);
  if (selectedLevel === '상' || +selectedLevel === 1) {
    alert('난이도가 1. 상으로 선택되었습니다.');
    maxNumber = 1000;
    maxAttempts = 20;
    break;
  } else if (selectedLevel === '중' || +selectedLevel === 2) {
    alert('난이도가 2. 중으로 선택되었습니다.');
    maxNumber = 100;
    maxAttempts = 10;
    break;
  } else if (selectedLevel === '하' || +selectedLevel === 3) {
    alert('난이도가 3. 하으로 선택되었습니다.');
    maxNumber = 10;
    maxAttempts = 5;
    break;
  } else {
    alert('정해진 난이도 중에 선택해 주세요');
  }
}
randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
alert(`입력 기회가 ${maxAttempts}가(이) 되었습니다.`);
while (true) {
  if (attempt <= maxAttempts) {
    selectedNumber = +prompt(`숫자를 입력하세요! [ ${minNumber} ~ ${maxNumber} ] ${randomNumber}`);
    if (selectedNumber >= minNumber && selectedNumber <= maxNumber) {
      if (selectedNumber < randomNumber) {
        minNumber = selectedNumber + 1;
        alert('UP!!');
      } else if (selectedNumber > randomNumber) {
        maxNumber = selectedNumber - 1;
        alert('DOWN!!');
      } else if (selectedNumber === randomNumber) {
        alert('정답입니다!');
        break;
      }
    } else {
      alert('범위에 맞는 값을 입력해주세요!');
      if (attempt === 1) { attempt = 0; }
      else attempt--;
    }
  } else {
    alert(`기회가 모두 소진되었습니다. 정답은 ${selectedNumber}이었지롱~ ㅋㅋ`);
    break;
  }
  alert(`${maxAttempts - attempt}번의 기회가 남았습니다.`);
  attempt++;
}



/*while (true) {
  selectedNumber = +prompt('숫자를 입력하세요! [ 1 ~ 100 ]');
  if (selectedNumber >= 1 && selectedNumber <= 100) {
    if (selectedNumber < ramdomNumber) {
      alert('UP!!');
    } else if (selectedNumber > ramdomNumber) {
      alert('DOWN!!');
    } else if (selectedNumber === ramdomNumber) {
      alert('정답입니다!');
      break;
    }
  }
  else {
    alert('범위에 맞는 값을 입력해주세요!');
  }
}*/

















