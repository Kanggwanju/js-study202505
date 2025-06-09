
const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbies: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbies: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbies: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbies: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

/**
 * @param callback - 모두가 이 조건에 부합한지 확인할 함수
 * @returns {boolean} - 하나라도 만족하지 않으면 false,
 *                      모두 만족하면 true
 */

function every(callback) {
  // 유저 배열을 순회한다.
  for (const user of userList) {
    // 콜백조건을 실행했을 때 결과가 false인 경우
    if (!callback(user)) {
      // 더 볼 필요 없이 false를 반환한다.
      return false;
    }
  }
  // 반복문이 모두 끝났는데도 리턴이 안나왔다면
  // 모든 요소가 조건에 만족하는 것이므로 최종적으로 true 반환
  return true;
}

function some(callback) {
  // 유저 배열을 순회한다.
  for (const user of userList) {
    // 콜백조건을 실행했을 때 결과가 하나라도 true인 경우
    if (callback(user)) {
      // 더 볼 필요 없이 true를 반환한다.
      return true;
    }
  }
  // 반복문이 모두 끝났는데도 리턴이 안나왔다면
  // 모든 요소가 조건에 만족하는 것 없는것이므로 최종적으로 false 반환
  return false;
}
/*
// none 함수는 some 함수의 반대이다.
function none(callback) {
  return !some(callback);
}
*/

function none(callback) {
  for (const user of userList) {
    if (callback(user)) {
      return false;
    }
  }
  return true;
}

function custom(userArray, callback, type) {
  if (type === "filter") {
    const filteredArray = [];
    for (const user of userArray) {
      if (callback(user)) {
        filteredArray.push(user);
      }
    }
    return filteredArray;
  } else if (type === "map") {
    const mappedArray = [];
    for (const user of userArray) {
      const item = callback(user);
      mappedArray.push(item);
    }
    return mappedArray;
  } else if (type === "every") {
    for (const user of userArray) {
      if (callback(user)) {
      } else {
        return false;
      }
    }
    return true;
  } else if (type === "some") {
    for (const user of userArray) {
      if (callback(user)) {
        return true;
      }
    }
    return false;
  } else {
    console.log("올바른 타입을 입력해주세요.");
  }
}





// 모든 사용자가 서울에 사는가?
const result1 = every(user => user.address === '서울');  // false
console.log(result1);
console.log('=======================================');

// 모든 사용자의 취미가 1개 이상인가?
const result2 = every(user => user.hobbies.length > 0);  // true
console.log(result2);
console.log('=======================================');

// 이름에 '왕'이 포함된 사람이 있는가?
const result3 = some(user => user.userName.includes('왕')); // true
console.log(result3);
console.log('=======================================');

// 부산에 사는 사용자가 있는가?
const result4 = some(user => user.address === '부산'); // false
console.log(result4);
console.log('=======================================');

// '게임'이라는 취미를 가진 사용자가 없는가?
const result5 = none(user => user.hobbies.includes('게임')); // true
console.log(result5);
console.log('=======================================');

// 서울에 사는 사용자가 아무도 없는가?
const result6 = none(user => user.address === '서울'); // false
console.log(result6);
console.log('=======================================');

const result7 = custom(userList, user => user.hobbies.length === 2, 'filter');
console.log(result7);
console.log('=======================================');
const result8 = custom(userList, user => user.job, 'map');
console.log(result8);
console.log('=======================================');
const result9 = custom(userList, user => user.address === '서울', 'every');
console.log(result9);
console.log('=======================================');
const result10 = custom(userList, user => user.userName.includes('왕'), 'some');
console.log(result10);
console.log('=======================================');







