import { observable, computed, autorun, action, transaction } from "mobx";

class GS25 {
  @observable basket = [];

  @computed
  get total() {
    console.log("계산중입니다..");
    return this.basket.reduce((prev, curr) => prev + curr.price, 0);
  }

  @action
  select(name, price) {
    this.basket.push({ name, price });
  }
}

const gs25 = new GS25();
autorun(() => gs25.total);
// *** 새 데이터 추가 될 때 알림
autorun(() => {
  if (gs25.basket.length > 0) {
    console.log(gs25.basket[gs25.basket.length - 1]);
  }
});

transaction(() => {
  gs25.select("물", 800);
  gs25.select("물", 800);
  gs25.select("포카칩", 1500);
});
