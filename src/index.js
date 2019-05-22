import { observable, reaction, computed, autorun } from 'mobx';

//observalbe State : 관찰할 수 있는 상태
const calculator = observable({
  a: 1,
  b: 2
});

//reaction : 특정 값이 바뀔때 특정 작업
reaction(
  () => calculator.a,
  (value, reaction) => {
    console.log(`a 값이 ${value}로 바뀌었습니다.`);
  }
);

reaction(
  () => calculator.b,
  (value, reaction) => {
    console.log(`b 값이 ${value}로 바뀌었습니다.`);
  }
);

//computed 로 특정 값 캐싱
const sum = computed(() => {
  console.log('계산중..');
  return calculator.a + calculator.b ;
});

sum.observe(() => calculator.a); //a값 주시
sum.observe(() => calculator.b); //b값 주시

//autorun 사용시
// **** autorun 은 함수 내에서 조회하는 값을 자동으로 주시함
autorun(() => console.log(`a 값이 ${calculator.a} 로 바뀌었네요!`));
autorun(() => console.log(`b 값이 ${calculator.b} 로 바뀌었네요!`));
autorun(() => sum.get());


calculator.a = 10;
calculator.b = 20;

