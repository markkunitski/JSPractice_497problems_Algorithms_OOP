import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// selectors.inp1.addEventListener("keydown", function (e) {
//   let value = e.key;
//   if (Number.isNaN(Number(value))) {
//     e.preventDefault();
//     throw new Error('only number')
//   }
// });
2;
// function drawToolTip(elem, parentPos) {
//   let [x, y] = parentPos;
//   let direction;
//   y < 200 ? (direction = "down") : (direction = "up");
//   let span = document.createElement("span");
//   span.textContent =
//     "loremipsum lsdhjgf sbnfv xcvbn amsndb qwetu xchvz6q8wtge ! dfsm,dbf ,iht qgweuytuhc xcvhjb";

//   span.id = "tooltip";
//   span.style.cssText = `margin-inline = 20px left: ${x}px; position:absolute; top: ${
//     y + 20
//   }px; background: wheat;`;

//   document.body.appendChild(span);
//   let width = span.offsetWidth / 2;
//   console.log(x - width + "summ");
//   span.style.left = x - width + "px";
// }

// document.addEventListener("click", function (e) {
//   let target = e.target;

//   let span = document.querySelector("#tooltip");
//   if (target == document || target == document.body || span) return;
//   target.classList.add("toggled");
//   let rect = target.getBoundingClientRect();
//   console.log(rect);
//   let clientY = rect.bottom;
//   let clientX = target.offsetLeft + target.offsetWidth / 2;
//   drawToolTip(target, [clientX, clientY]);
// });
// window.addEventListener("resize", function (e) {
//   let span = document.querySelector("#tooltip");
//   if (!span) return;
//   let parent = document.querySelector(".toggled");
//   let width = span.offsetWidth / 2;
//   let currentLEFT = parent.offsetLeft + 50 - width;
//   currentLEFT >= 0
//     ? (span.style.left = currentLEFT + "px")
//     : (span.style.left = "0");

// });
3;
// let arr = ["2", "1", "2", "8", "3", "6"];
// function findLucky() {
//   if (arr.length != 6) throw new Error("has to be 6 digit num");
//   let sorted = arr.sort((a, b) => b - a);
//   let result = [];
//   let leftSum = 0;
//   let rightSum = 0;
//   let pointer = 1;
//   for (let i = 0; i <= 4; i += 2) {
//     let [start, end] = sorted.slice(i, i + 2);
//     let left;
//     let right;
//     console.log(start, end);
//     if (pointer == 1) {
//       left = start;
//       right = end;
//     } else {
//       if (leftSum >= rightSum) {
//         right = start;
//         left = end;
//       } else {
//         right = end;
//         left = start;
//       }
//     }
//     pointer++;
//     leftSum += parseInt(left);
//     rightSum += parseInt(right);
//     result.push(right);
//     result.unshift(left);
//   }
//   console.log(result, leftSum, rightSum, leftSum == rightSum);
// }
// selectors.btn.addEventListener("click", findLucky);
// let arr = ['0', '6', '2', '9', '8'];
// function luckyList() {
//   let result = [];
//   for (let i = 0; i < 1e6; i++) {
//     let num = String(i);
//     let sum = 0;
//     for (let j = 1; j <= 6; j++) {
//       let last = num % 10;
//       if (j <= 3) {
//         sum += last;
//       } else {
//         sum -= last;
//       }
//       num = ~~(num / 10);
//     }
//     if (sum == 0) {
//       let string = String(i).padStart(6, "0");
//       let flag = true;
//       for (let char of string) {
//         if (!arr.includes(char)) {
//           flag = false;
//           break;
//         }
//       }
//       if (flag) result.push(string);
//     }
//   }
//   console.log(result);
// }
// selectors.btn.addEventListener("click", luckyList);
4;
// selectors.btn.addEventListener("click", function () {
//   let rows = selectors.table.querySelectorAll("#table tr");
//   rows.forEach((row, index) => {
//     let redIndex = index;
//     let tealIndex = row.children.length - 1 - index
//     row.children[redIndex].style.background = 'red'
//     row.children[tealIndex].style.background = 'teal'
//   });
// });
5;
// function createPass(len) {
//   if (len <= 6) throw new Error("too short");
//   let result = "";
//   let start = 48;
//   let end = 122;
//   let data = {
//     symbols: [33, 47],
//     numbers: [48, 57],
//     upper: [65, 90],
//     lower: [97, 122],
//   };
//   for (let key in data) {
//     let [start, end] = data[key];
//     let sudo = Math.floor(Math.random() * (end - start) + start + 1);
//     result += String.fromCharCode(sudo);
//   }
//   for (let i = result.length; i <= len; i++) {
//     let sudo = Math.floor(Math.random() * (end - start) + start + 1);
//     result += String.fromCharCode(sudo);
//   }
//   return result;
// }

// selectors.btn.addEventListener("click", function () {
//   console.log(createPass(7));
// });
6;
// selectors.btn.addEventListener("click", function () {
//   let mid = window.innerWidth / 2;
//   let elems = document.body.querySelectorAll("*");
//   elems.forEach((elem) => {
//     let rect = elem.getBoundingClientRect();
//     if (rect.left < mid && rect.right < mid) {
//       elem.style.background = "wheat";
//     }
//     if (rect.left > mid && rect.right > mid) {
//       elem.style.background = "lightGray";
//     }
//   });
// });
7;
// function makeArray(number) {
//   let string = String(number);
//   let result = [];
//   for (let char of string) {
//     result.push(char);
//   }
//   return [[number], result];
// }
// function lowest(initial, fromLast) {
//   return initial % 10 ** fromLast;
// }
// selectors.btn.addEventListener("click", function () {
//   let devider = parseInt(selectors.inp2.value);
//   let [num, splitted] = makeArray(parseInt(selectors.inp1.value));
//   if (!devider || devider == 0 || devider > num)
//     throw new Error("wrong devider in second input");
//   let rank = String(devider).length;
//   let completePart = 0;
//   do {
//     console.log(
//       `We need to find lowest number we are able to devide, lets take the same rank number as our rank = (${rank})`
//     );
//     let lastToRank = lowest(num, rank);
//     console.log(`That number is ${lastToRank}`);
//     let lastToDevider = Math.floor(lastToRank / devider);
//     let smallerNum
//     let canWe;
//     let newInitial;
//     if (lastToDevider) {
//       canWe = "CAN";
//       completePart += lastToDevider
//       newInitial = num - (devider * lastToDevider);
//       console.log(
//         `Compare our devider to number we got, we ${canWe} devide ${lastToRank} / ${devider}, and ${num} - (${devider} * ${lastToDevider} times) =  ${newInitial} is our new number`
//       );
//       num = newInitial;
//     } else {
//       canWe = "CAN'T";
//       newInitial = lowest(num, rank + 1);
//       console.log(
//         `Compare our devider to number we got, we ${canWe} devide ${lastToRank} / ${devider}, and ${newInitial} is our new number`
//       );
//       rank++;
//     }
//   } while (num >= devider);
//   if (num) {
//     console.log(`Hurray! That's it! We get ${completePart}. But don't forget that ${num} left`);
//   } else {
//     console.log(`Hurray! That's it! We devided our number without fraction and get ${completePart}`);
//   }
// });
8;
// let data = "10 + 10"; // never use eval()
// selectors.btn.addEventListener("click", function () {
//   let [num1, operand, num2] = data.split(" ");
//   let functions = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     "*": (a, b) => a * b,
//     "/": (a, b) => a / b,
//   };
//   let func = functions[operand];
//   console.log(num1, operand, num2);
//   if (func != undefined) {
//     console.log(func(Number(num1), Number(num2)));
//   } else {
//     throw new Error("wrong data");
//   }
// });
