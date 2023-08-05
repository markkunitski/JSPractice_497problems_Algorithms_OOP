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
// selectors.btn.addEventListener("click", function () {
//   let now = new Date();
//   let NY = new Date(now.getFullYear() + 1, 0, 1);
//   let dif = Math.floor((NY - now) / 1000);
//   let daysDom = document.querySelector("#days");
//   let hoursDom = document.querySelector("#hours");
//   let minsDom = document.querySelector("#mins");
//   let secDom = document.querySelector("#sec");
//   let mins, hours, days, sec;
//   let dateInterval = setInterval(() => {
//     console.log(dif);
//     sec = dif % 60;
//     secDom.textContent = Math.floor(sec);
//     mins = (dif / 60) % 60;
//     minsDom.textContent = Math.floor(mins);
//     hours = (dif / 60 / 60) % 60;
//     hoursDom.textContent = Math.floor(hours);
//     days = dif / 60 / 60 / 24;
//     daysDom.textContent = Math.floor(days);
//     dif--;
//     if (dif <= 0) clearInterval(dateInterval);
//   }, 1000);
// });
3;
// selectors.btn.addEventListener("click", function () {
//   let num1 = parseInt(selectors.inp1.value);
//   let num2 = parseInt(selectors.inp2.value);
//   let max = num1 > num2 ? num1 : num2;
//   let curr = num1;
//   for (let i = 1; i<=1e6; i++){
//     if (curr * i % num2 === 0) {
//       curr *= i
//       break
//     }
//   }
//   console.log(curr);
// });
4;
// function deviders(num) {
//   let result = [num];
//   let root = num ** 0.5;
//   for (let i = 2; i < root; i++) {
//     if (num % i === 0) {
//       result.push(i, num / i);
//     }
//   }
//   if (Number.isInteger(root)) result.push(root);
//   return result.sort((a,b)=> a-b);
// }
// selectors.btn.addEventListener("click", function () {
//   let num1 = deviders(Number(selectors.inp1.value));
//   let num2 = deviders(Number(selectors.inp2.value));
//   console.log(num1, num2)
//   let lowest = null
//   num1.forEach(elem=>{
//     if (num2.includes(elem)) {
//       lowest = elem
//       return
//     }
//   })
//   console.log(lowest)
// });
5;
// function drawPluses() {
//   let parent = selectors.table;
//   let cells = parent.querySelectorAll("td");
//   let indexes = [];
//   for (let i = 1; i <= 2; i++) {
//     let sudo;
//     do {
//       sudo = Math.floor(Math.random() * cells.length);
//     } while (Math.abs(indexes[0] - sudo) <= 3);
//     indexes.push(sudo);
//   }
//   indexes.sort((a, b) => a - b);
//   indexes.forEach((elem) => {
//     cells[elem].textContent = "+";
//   });
//   for (let i = indexes[0] + 1; i < indexes[1]; i++) {
//     cells[i].textContent = "-";
//   }
// }
// selectors.btn.addEventListener("click", drawPluses);
6;
selectors.btn.addEventListener('click', function () {
  
})
