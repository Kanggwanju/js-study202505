
// ====== 함수 정의 영역 ======= //

// 게임 데이터들을 변경하는 클로저 정의
function changeGameData(begin, end, chances) {
  // 최소값
  let minValue = begin;
  // 최대값
  let maxValue = end;
  // 남은 기회
  let chance = chances;
  // 1 ~ 100 사이의 무작위 난수 생성
  let secret = Math.floor(Math.random() * end) + begin;

  return {
    up: (guess) => {
      console.log('UP!!');
      minValue = guess + 1;
      chance = chance - 1;
    },
    down: (guess) => {
      console.log('DOWN!!');
      maxValue = guess - 1;
      chance = chance - 1;
    },
    getStatus: () => ({ minValue, maxValue, chance, secret }), // 자기 정보 가져오기
  };
}

// UP 처리 함수
function secretUp($input, random) {
  random.up(+$input.value);
  $input.value = '';
  // console.log(`minValue: ${random.getStatus().minValue}`);
}

// DOWN 처리 함수
function secretDown($input, random) {
  random.down(+$input.value);
  $input.value = '';
  // console.log(`maxValue: ${random.getStatus().maxValue}`);
}

// 정답 처리 함수
function secretCorrect(random, $form) {
  // 정답 모달
  const $modalOverlay = document.getElementById('finish-modal');
  // 정답 텍스트 요소
  const $finishTitle = document.getElementById('finish-title');
  const $finishText = document.getElementById('finish-text');
  // 재도전 버튼
  $finishTitle.textContent = 'Congratulation!';
  $finishText.textContent = `정답은 ${random.getStatus().secret}였습니다!`;
  $modalOverlay.classList.add('show');

  resetGame($form);
}

// 실패 처리 함수
function gameOver(random, $form) {
  // 실패 모달
  const $modalOverlay = document.getElementById('finish-modal');
  // 실패 텍스트 요소
  const $finishTitle = document.getElementById('finish-title');
  const $finishText = document.getElementById('finish-text');
  $finishTitle.textContent = 'GAME OVER';
  $finishText.textContent = `정답은 ${random.getStatus().secret}였습니다...`;
  $finishTitle.style.color = 'red';
  $modalOverlay.classList.add('show');

  // 게임 리셋 함수
  resetGame($form);
}

// 게임 리셋 함수
function resetGame($form) {
  const $restartBtn = document.getElementById('restart-button');
  $restartBtn.addEventListener('click', e => {
    $form.submit();
  });
}


// 인터페이스 변경 함수
function changeInterface(random, upDown, userGuess) {
  // 범위 최소 가져오기
  const $beginSpan = document.getElementById('begin');
  // 범위 최대 가져오기
  const $endSpan = document.getElementById('end');
  // 남은 기회 가져오기
  const $chancesSpan = document.getElementById('chances-left');
  // 피드백 노드 가져오기
  const $feedback = document.getElementById('feedback');
  // 도전 기록 리스트 노드 가져오기
  const $historyList = document.getElementById('history-list');
  $beginSpan.textContent = random.getStatus().minValue;
  $endSpan.textContent = random.getStatus().maxValue;
  $chancesSpan.textContent = random.getStatus().chance;

  if (upDown === 'up') {
    $feedback.textContent = 'UP!!';
    $feedback.classList.add('up');
    $feedback.classList.remove('down');

    const $newDiv = document.createElement('div');
    $newDiv.classList.add('up');
    $newDiv.classList.add('history-item');
    $newDiv.textContent = `${userGuess} (UP)`;
    $historyList.prepend($newDiv);

  } else if (upDown === 'down') {
    $feedback.textContent = 'DOWN!!';
    $feedback.classList.add('down');
    $feedback.classList.remove('up');

    const $newDiv = document.createElement('div');
    $newDiv.classList.add('down');
    $newDiv.classList.add('history-item');
    $newDiv.textContent = `${userGuess} (DOWN)`;
    $historyList.prepend($newDiv);

  } else if (upDown === 'correct') {
    $feedback.textContent = 'CORRECT!!';
    $feedback.classList.add('correct');
    $feedback.classList.remove('up');
    $feedback.classList.remove('down');
  }
}


// 패널을 설정하는 함수 정의
function setGamePanel() {
  // console.log('UP & DOWN 게임을 시작합니다.');
  // 범위 최소 가져오기
  const $beginSpan = document.getElementById('begin');
  // 범위 최대 가져오기
  const $endSpan = document.getElementById('end');
  // 남은 기회 가져오기
  const $chancesSpan = document.getElementById('chances-left');
  // 폼 가져오기
  const $form = document.getElementById('guess-form');
  let random = null;

  // 난수 생성
  random = changeGameData(+$beginSpan.textContent, +$endSpan.textContent, +$chancesSpan.textContent);

  // 난수 디버깅 로그
  console.log(random.getStatus().secret);

  // 폼 제출 이벤트
  $form.addEventListener('submit', e => {
    e.preventDefault(); // 제출 자체를 막음, 제출되면 새로고침 된다.
    const $input = document.getElementById('guess-input');
    const userGuess = +$input.value;
    // console.log('유저 추측:',userGuess);

    // 입력값 검증
    if (userGuess < random.getStatus().minValue || userGuess > random.getStatus().maxValue) {
      $input.value = '';
      alert(`반드시 ${random.getStatus().minValue}와 ${random.getStatus().maxValue} 사이의 숫자를 입력하세요!`);
      return;
    }

    // 정답을 판별하는 조건 로직
    if (random.getStatus().secret === userGuess) {
      // 정답인 경우
      secretCorrect(random, $form);
      changeInterface(random, 'correct', userGuess);
    } else if (random.getStatus().secret > userGuess) {
      // UP인 경우
      secretUp($input, random);
      changeInterface(random, 'up', userGuess);
    } else {
      // DOWN인 경우
      secretDown($input, random);
      changeInterface(random, 'down', userGuess);
    }

    // 입력 횟수 소진 게임 종료 함수
    if (random.getStatus().chance === 0) {
      console.log('기회가 모두 소진되었습니다.');
      gameOver(random, $form);
    }
  });
}

// ====== 코드 실행 영역 ======= //

// 패널 설정 함수 실행
setGamePanel();