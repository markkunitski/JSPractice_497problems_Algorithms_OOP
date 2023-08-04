import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// function shaffleText() {
//   let text = selectors.p1.innerText.split(" ");
//   let result = new Array(text.length)
//   for (let i = 0; i<text.length; i++) {
//     let initial = text[i]
//     let randomPlaceResult;
//     do {
//         randomPlaceResult = Math.floor(Math.random() * result.length);
//     } while (result[randomPlaceResult] != undefined);
//     result[randomPlaceResult] = initial
//   }
//   selectors.p1.textContent = result.join(' ')
// }
// selectors.btn.addEventListener("click", shaffleText);
2;
selectors.btn.addEventListener("click", function () {
  let now = new Date();
  let NY = new Date(now.getFullYear() + 1, 0, 1);
  let dif = (NY - now) / 1000;

  console.log(initial);

  let initial = [];
  let mins, hours, days, sec;
  let dateInterval = setInterval(() => {
    mins = dif / 1000 / 60 / 60;
    hours = mins / 60;
    days = hours / 24;
    dif - 1;
  }, 1000);
});
3;
// selectors.btn.addEventListener('click', function () {})
4;
// selectors.btn.addEventListener('click', function () {})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
