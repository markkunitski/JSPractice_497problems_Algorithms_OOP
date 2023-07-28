import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// let data = selectors.p1.innerText;
// function createList(letter, wordsArr) {
//   let parent = document.createElement("ul");
//   wordsArr.forEach((word) => {
//     let child = document.createElement("li");
//     child.textContent = word;
//     parent.appendChild(child);
//   });
//   let domElem = selectors.div;
//   let name = document.createElement("h2");
//   name.textContent = letter;
//   domElem.appendChild(name);
//   domElem.append(parent);
// }
// function dataFilter(elem) {
//   let arr = elem.toLowerCase().trim().split(" ");
//   let result = arr.map((elem) => {
//     if (
//       elem[elem.length - 1].toLowerCase() == elem[elem.length - 1].toUpperCase()
//     ) {
//       return elem.slice(0, elem.length - 1);
//     } else {
//       return elem;
//     }
//   });
//   return result;
// }
// const createObject = (data) => {
//   let result = [];
//   data.forEach((elem) => {
//     let firtsLetter = elem[0];
//     let targetIndex;
//     result.forEach((acc, index) => {
//       if (acc[firtsLetter]) {
//         targetIndex = index;
//         return;
//       }
//     });
//     if (targetIndex === undefined) {
//       let newO = { [firtsLetter]: [elem] };
//       result.push(newO);
//     } else if (!result[targetIndex][firtsLetter].includes(elem)){
//         result[targetIndex][firtsLetter].push(elem);
//     }

//   });
//   result.forEach((elem) => {
//     let letter = Object.keys(elem);
//     let arr = elem[letter];
//     createList(letter, arr);
//   });
// };
// selectors.btn.addEventListener("click", function () {
//   let filtered = dataFilter(data);
//   createObject(filtered);
// });
2;
// let curr = {
//   month: 0,
//   year: 2000,
// };

// const makeDays = (now, mutable) => {
//   let parent = document.createElement("select");
//   parent.name = "day";
//   parent.id = "daySelect";
//   let flag = document.querySelector("#daySelect");
//   if (flag) {
//     selectors.div.removeChild(flag);
//   }
//   let start = new Date(mutable.year, mutable.month + 1, 0);
//   console.log(mutable);
//   console.log(start + " start");
//   for (let i = 1; i <= start.getDate(); i++) {
//     let child = document.createElement("option");
//     child.value = i;
//     child.textContent = i;
//     if (i == now) child.selected = true;
//     parent.append(child);
//   }

//   selectors.div.prepend(parent);
// };
// const makeMonths = (now) => {
//   let parent = document.createElement("select");
//   parent.name = "month";
//   parent.id = "monthSelect";
//   let start = new Date(now.getFullYear(), 0, 1);
//   for (let i = 0; i <= 11; i++) {
//     let name = start.toLocaleString("en-US", { month: "long" });
//     let child = document.createElement("option");
//     child.value = i;
//     child.textContent = name;
//     if (i == now.getMonth()) child.selected = true;
//     parent.append(child);
//     start.setMonth(i + 1);
//   }
//   parent.addEventListener("change", (e) => {
//     curr.month = Number(e.target.value);
//     makeDays(1, curr);
//     console.log(new Date(curr.year, curr.month));
//   });
//   selectors.div.append(parent);
// };
// const makeYears = (now, len) => {
//   let parent = document.createElement("select");
//   parent.name = "year";
//   parent.id = "yearSelect";
//   let start = new Date(now.getFullYear() - len, 0, 1);
//   for (let i = 1; i <= len * 2; i++) {
//     let name = start.toLocaleString("en-US", { year: "numeric" });
//     let child = document.createElement("option");
//     child.value = name;
//     child.textContent = name;
//     if (start.getFullYear() == now.getFullYear()) child.selected = true;
//     parent.append(child);
//     start.setFullYear(start.getFullYear() + 1);
//   }
//   parent.addEventListener("change", (e) => {
//     curr.year = Number(e.target.value);
//     makeDays(1, curr);
//     console.log(new Date(curr.year, curr.month));
//   });
//   selectors.div.append(parent);
// };
// selectors.btn.addEventListener("click", function () {
//   let date = new Date();
//   curr.month = date.getMonth();
//   curr.year = date.getFullYear();
//   makeDays(date.getDate(), curr);
//   makeMonths(date);
//   makeYears(date, 10);
// });
3;
function f5(){
  for (let i = 1; i<=9; i +=2){
    let symbol = String(i)
    let result = symbol.padStart(i, symbol)
    console.log(result)
  }
}
selectors.btn.addEventListener('click', f5)
4;
// selectors.btn.addEventListener('click', function () {})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
