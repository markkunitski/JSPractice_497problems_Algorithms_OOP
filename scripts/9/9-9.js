import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// let clicks = 1;
// selectors.table.addEventListener("click", function (e) {
//   let target = e.target;
//   let number = `<span class='click'>${clicks}</span>`;
//   console.log(target);
//   let currSpan;
//   if (target.tagName == "SPAN") {
//     currSpan = [target];
//   } else {
//     currSpan = target.getElementsByTagName("span");
//   }
//   if (currSpan.length || target.tagName == "SPAN") {
//     currSpan[0].textContent = clicks;
//   } else {
//     target.insertAdjacentHTML("beforeend", number);
//   }
//   clicks++;
// });
2;
// const shuffle = () => {
//   let elems = document.querySelectorAll("#table th, #table td");
//   let initial = [];
//   elems.forEach((elem) => {
//     initial.push(elem.innerText);
//   });
//   elems.forEach((elem) => {
//     let sudoIndex = Math.floor(Math.random() * initial.length);
//     while (!initial[sudoIndex]) {
//       sudoIndex = Math.floor(Math.random() * initial.length);
//     }
//     elem.textContent = initial[sudoIndex];
//     initial[sudoIndex] = ''
//     console.log(initial)
//   });
// };
// selectors.btn.addEventListener("click", shuffle);
3;
// function isLetter(symbol) {
//   return symbol.toLowerCase() != symbol.toUpperCase();
// }
// selectors.btn.addEventListener("click", function () {
//   let initial = selectors.area.value;
//   let data = {};
//   let mostCommon = { biggest: 0 };
//   for (let char of initial) {
//     if (!isLetter(char)) continue;
//     let targetKey = char.toLowerCase();
//     if (data[targetKey] != undefined) {
//       data[targetKey]++;
//       let [biggest, value] = Object.entries(mostCommon)[0];
//       console.log(biggest);
//       if (data[targetKey] > value) {
//         mostCommon = { [targetKey]: data[targetKey] };
//       }
//     } else {
//       data[targetKey] = 1;
//     }
//   }
//   let key = Object.keys(mostCommon);
//   let result = `<span id="nn3">${key + " : " + mostCommon[key]}</span>`;
//   let spanCheck = document.getElementById('nn3');
//   console.log(spanCheck)
//   if (spanCheck) {
//     spanCheck.textContent = `${key + " : " + mostCommon[key]}`;
//   } else {
//     selectors.area.insertAdjacentHTML("beforebegin", result);
//   }
// });
4;
// let pointer = 0;
// let value = 1;
// selectors.btn.addEventListener("click", function () {
//   let inputs = document.querySelectorAll("input");
//   console.log(inputs)
//   setInterval(() => {
//     console.log(pointer);
//     let target = inputs[pointer];
//     target.value = value;
//     value++;
//     if (pointer >= 2) {
//       pointer = 0;
//     } else {
//       pointer++;
//     }
//   }, 1000);
// });
5;
// let triple = {
//   1: "сто",
//   2: "двести",
//   3: "триста",
//   4: "четыреста",
//   5: "пятьсот",
//   6: "шестьсот",
//   7: "семьсот",
//   8: "восьмьсот",
//   9: "девятьсот",
// };
// let double = {
//   1: "десять",
//   2: "двадцать",
//   3: "тридцать",
//   4: "сорок",
//   5: "пятдесят",
//   6: "шестдесят",
//   7: "семдесят",
//   8: "восемдесят",
//   9: "девяносто",
// };
// let single = {
//   1: "один",
//   2: "два",
//   3: "три",
//   4: "четыре",
//   5: "пять",
//   6: "шесть",
//   7: "семь",
//   8: "восьмь",
//   9: "девять",
// };
// let specialForm = {
//   11: "одинадцать",
//   12: "двенадцать",
//   13: "тринадцать",
//   14: "четырнадцать",
//   15: "пятнадцать",
//   16: "шестнадцать",
//   17: "семнадцать",
//   18: "восемнадцать",
//   19: "девятнадцать",
// };
// const spellNum = (num) => {
//   let splitted = String(num).split("");
//   if (splitted.length > 3) throw new Error('exceeded 1-999 range')
//   let objects = [single, double, triple, specialForm];
//   let filtered = [];
//   for (let i = 0; i < splitted.length; i++) {
//     let current = splitted[splitted.length - 1 - i];
//     console.log(current);
//     if (current == 0) continue;
//     if (i == 1 && splitted[splitted.length - 2] == 1 && splitted[splitted.length - 1] != 0) {
//       console.log(splitted[splitted.length - 2], splitted[splitted.length - 1]);
//       let lastTwo = current + splitted[splitted.length - 1];
//       filtered = [specialForm[lastTwo]];
//     } else {
//       let object = objects[i];
//       filtered.push(object[current]);
//     }
//   }
//   console.log(filtered.reverse());
// };
// selectors.btn.addEventListener("click", function () {
//   let num = selectors.inp1.value;
//   spellNum(num);
// });
6;
// selectors.btn.addEventListener('click', function () {})
