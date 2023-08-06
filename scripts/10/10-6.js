import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// selectors.inp1.addEventListener("input", function (e) {
//   let keyWord = "blur";
//   if (e.target.value.toLowerCase().indexOf(keyWord) !== -1) {
//     this.blur();
//   }
// });
2;
// let data = {
//   I: [[1, 1, 1, 1], []],
//   O: [
//     [1, 1],
//     [1, 1],
//   ],
//   T: [
//     [1, 1, 1],
//     [0, 1, 0],
//   ],
//   L: [
//     [1, 1, 1, 1],
//     [0, 0, 0, 1],
//   ],
//   S: [
//     [1, 1, 0],
//     [0, 1, 1],
//   ],
// };
// function getCol(nth) {
//   return selectors.table.querySelectorAll(`tr td:nth-child(${nth + 1})`);
// }
// function drawElem(upperRow, lowerRow, direction) {
//   let cells = selectors.table.querySelectorAll("td");
//   cells.forEach((elem) => {
//     elem.style.background = "white";
//     elem.textContent = "";
//   });
//   let [directionUpper, directionLower, shift] = direction;
//   let startIndex = Math.floor(directionUpper.length / 2);
//   if (shift[0]) {
//     console.log('first')
//     shift = upperRow.length-1;
//     startIndex -= shift;
//   }

//   upperRow.forEach((elem, index) => {
//     if (elem === 0) return;
//     directionUpper[startIndex + index].style.background = "gray";
//   });
//   if (lowerRow.length) {
//     lowerRow.forEach((elem, index) => {
//       if (elem === 0) return;
//       directionLower[startIndex + index].style.background = "gray";
//     });
//   }
// }
// selectors.btn.addEventListener("click", function () {
//   let parent = selectors.table;
//   let rows = parent.querySelectorAll("tr");
//   let center = Math.floor(rows.length / 2);
//   let startIndex = Math.floor(rows[center].children.length / 2);
//   console.log(startIndex);
//   let keys = Object.keys(data);
//   let pointer = 2;
//   let direction = {
//     0: [[...rows[center].children], [...rows[center - 1].children], [true]],
//     1: [getCol(startIndex), getCol(startIndex + 1), [true]],
//     2: [[...rows[center].children], [...rows[center + 1].children], [false]],
//     3: [getCol(startIndex), getCol(startIndex - 1), [false]],
//   };

//   let directionPointer = 2;
//   let [row1, row2] = data[keys[pointer]];
//   left.addEventListener("click", () => {
//     let current = directionPointer - 1;
//     if (current < 0) current = Object.keys(direction).length - 1;
//     directionPointer = current;
//     drawElem(row1, row2, direction[directionPointer]);
//     console.log(directionPointer);
//   });
//   right.addEventListener("click", () => {
//     directionPointer = (directionPointer + 1) % Object.keys(direction).length;
//     drawElem(row1, row2, direction[directionPointer]);
//     console.log(directionPointer);
//     console.log(direction[directionPointer]);
//   });
//   pointer = (pointer + 1) % keys.length;
//   drawElem(row1, row2, direction[directionPointer]);
// });
3;

4;
// selectors.btn.addEventListener('click', function () {})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
