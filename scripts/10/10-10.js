import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// let data = "12/16";
// function deviders(num) {
//   let result = [num];
//   let root = num ** 0.5;
//   for (let i = 2; i < root; i++) {
//     if (num % i === 0) {
//       result.push(i, num / i);
//     }
//   }
//   if (Number.isInteger(root)) result.push(root);
//   return result.sort((a, b) => a - b);
// }
// function nn1() {
//   let [num1, num2] = data.split("/").map(Number);
//   let devNum1;
//   let devNum2;
//   let result = [[`${num1}/${num2}`]];
//   let count = 0;
//   let flag = false;

//   do {
//     count++;
//     devNum1 = deviders(num1);
//     devNum2 = deviders(num2);
//     devNum1.forEach((elem, index) => {
//       if (devNum2.includes(elem)) {
//         result.push([`${num1 / elem}/${num2 / elem}`]);
//       } else if (index == devNum1.length - 1) {
//         flag = true;
//       }
//     });
//   } while (count < 500 && flag == false);
//   console.log(result.join(" = "));
// }

// selectors.btn.addEventListener("click", nn1);
2;
// selectors.btn.addEventListener("click", function () {
//   let finish = parseInt(selectors.inp1.value);
//   if ( finish) {
//     let data = [];
//     for (let i = 2; i <= finish; i++) {
//       data.push(i);
//     }
//     let current;
//     let count = 0;
//     let index = 0;
//     do {
//       current = data[index];
//       console.log(current);
//       data = data.filter((elem) => {
//         if (elem === current) return true;
//         if (elem % current !== 0) return true;
//       });
//       index++;
//     } while (count <= 500 && data[index] != undefined);
//     console.log(data);
//   }
// });
3;
// skipping canvas
4;
// selectors.btn.addEventListener("click", function () {
//   let parent = selectors.table;
//   let cells = parent.querySelectorAll("td");
//   cells.forEach((elem) => (elem.textContent = ""));
//   let rows = parent.querySelectorAll("tr");
//   let index = Math.floor(rows.length / 2) - 1;
//   let centerRow = rows[index];
//   centerRow.children[index].textContent = "+";
//   centerRow.children[index + 1].textContent = "+";
//   rows[index + 1].children[index].textContent = "+";
//   rows[index + 1].children[index + 1].textContent = "+";
// });
