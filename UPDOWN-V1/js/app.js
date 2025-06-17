/*
// 난이도 입력기회 상수
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
}
*/




// ====== 함수 정의 영역 ======= //

// 패널을 설정하는 함수 정의
function setGamePanel() {
  // console.log('UP & DOWN 게임을 시작합니다.');


  const MIN = 1, MAX = 100;

  // 최소 최대값 변수
  let minValue = MIN, maxValue = MAX;

  // 1 ~ 100 사이의 무작위 난수 생성
  let secret = Math.floor(Math.random() * MAX) + MIN;
}


// ====== 코드 실행 영역 ======= //

// 패널 설정 함수 실행
setGamePanel();