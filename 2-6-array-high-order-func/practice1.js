
const traders = [
  {
    trader: {
      name: '김철수', // traders[0].trader.name
      city: '대전',
    },
    year: 2023, // traders[0].year
    value: 500000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: '뽀로로',
      city: '부산',
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
// [ {name, city}, {name, city}, ... ]
const finalUserList1 = traders
  .filter(trade => trade.year === 2022)
  .map(trade => ({
    name: trade.trader.name,
    city: trade.trader.city
}));
console.log(finalUserList1);
console.log('=======================================');

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const finalCityList2 = traders.map(trade => trade.trader.city);
// console.log(finalCityList2);
const distinctCities2 = [...new Set(finalCityList2)];
console.log(distinctCities2);
console.log('=======================================');

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
const finalUserList3 = traders
  .filter(trade => trade.trader.city === '대전')
  .map(trade => ({
    name: trade.trader.name,
    city: trade.trader.city
}));
console.log(finalUserList3);
console.log('=======================================');

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const finalUserList4 = traders.map(trade => trade.trader.name);
console.log(finalUserList4);
const distinctNames4 = [...new Set(finalUserList4)];
console.log(distinctNames4);
console.log('=======================================');

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
const finalUserList5 = traders
  .filter(trade => trade.trader.city === '서울')
  .map(trade => trade.value)
;
// console.log(finalUserList5);
let result5 = 0;
finalUserList5.forEach((n, i) => {
  result5 += n;
});
console.log(result5);



