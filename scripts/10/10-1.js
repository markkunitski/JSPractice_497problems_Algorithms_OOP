import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// let specialForms = new Map();
// specialForms.set(["s", "ss", "sh", "ch", "x", "z"], "es");
// specialForms.set("y", "ies");
// let vowels = ["a", "e", "i", "o", "u"];
// selectors.btn.addEventListener("click", function () {
//   let noun = selectors.inp1.value;
//   let last = noun[noun.length - 1];
//   let preLast = noun[noun.length - 2];
//   console.log(preLast);
//   let plural = null;
//   for (let [key, value] of specialForms) {
//     if (key == last) {
//       if (key == "y" && !vowels.includes(preLast)) {
//         console.log(vowels.includes(preLast));
//         plural = noun.slice(0, noun.length - 1) + value;
//       }
//       break;
//     }
//     if (key.includes(last) || key.includes(preLast + last)) {
//       plural = noun + value;
//       break;
//     }
//   }
//   if (plural) {
//     console.log(plural);
//   } else {
//     console.log(noun + "s");
//   }
// });
2;
// let count = 1;
// document.addEventListener("click", function (e) {
//   let left = e.clientX;
//   let top = e.clientY;
//   let newElem = document.createElement("span");
//   newElem.style.cssText = `position: absolute; left: ${left}px; top: ${top}px`;
//   newElem.textContent = count;
//   document.body.appendChild(newElem);
//   count++;
// });
3;
// let data = "aaa bbb, ccc. Xxx - eee bbb, kkk!";
// function isLetter(symbol) {
//   return symbol.toLowerCase() != symbol.toUpperCase();
// }
// function returnSymbols(string) {
//   let words = "";
//   for (let char of string) {
//     if (isLetter(char)) {
//       words += char;
//     }
//   }
//   return words;
// }
// selectors.btn.addEventListener("click", function () {
//   let arr = data.split(" ");
//   let filtered = [];
//   arr.forEach((elem) => {
//     let result = returnSymbols(elem);
//     if (result) {
//       filtered.push(result);
//     }
//   });
//   console.log(filtered);
// });
// function returnSymbols(string) {
//   // Use a regular expression to match alphabetic characters
//   return string.match(/[a-zA-Z]+/g) || [];
// }

// selectors.btn.addEventListener("click", function () {
//   let arr = data.split(" ");
//   let filteredWords = arr.filter(word => returnSymbols(word).length > 0);
//   let result = filteredWords.map(word => returnSymbols(word).join('')).join(' ');

//   console.log(result + '.');
// });
4;
// selectors.inp1.addEventListener("input", function (e) {
//   let target = e.target.value;
//   if (!target.length) return;

//   let pureLen = target.split("").filter((elem) => elem != " ");
//   if (pureLen.length % 3 == 0) {
//     e.target.value += " ";
//     console.log(e.target.value);
//   }
// });
5;
// selectors.btn.addEventListener("click", function () {
//     let factor = 199;
//     let times = 12;
//     let arr = String(factor).split("");
//     arr.reverse().forEach((elem, index) => {
//       let rank = index + 1;
//       let rightNum = elem.padEnd(rank, "0");
//       console.log(
//         `${rank} action is to multiply ${rank} rank digit to second factor`
//       );
//       console.log(
//         `${elem} * ${times} = ${rightNum * times} ` + ` (${rank} rank)`
//       );
//     });
//     console.log(`And all answers combined are our final result ${factor * times}`);
//   });
6;
// selectors.btn.addEventListener("click", function () {
//   let target = document.querySelector("#hidden");
//   target.style.top = "0px";
// });
// document.addEventListener("click", function (e) {
//   let target = document.querySelector("#hidden");
//   if (e.target == selectors.btn || e.target == target) return;
//   console.log(e.target);
//   target.style.top = "-300px";
// });
