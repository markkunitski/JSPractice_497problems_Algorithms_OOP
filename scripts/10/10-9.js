import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";

2;
// selectors.btn.addEventListener("click", function () {
//   let text = document.querySelector("#content");
//   let separeted = text.innerText.trim().split("}");
//   text.innerHTML = "";
//   separeted.forEach((param, index) => {
//     let block = param.slice(param.indexOf("{") + 1);
//     let lines = block.split(";");
//     let editedLines = [];
//     lines.forEach((elem) => {
//       let center = elem.indexOf(":");
//       if (center === -1) return;
//       let leftStartIndex = 0;
//       let rightEndIndex = elem.length;
//       //left
//       for (let i = center - 1; i >= 0; i--) {
//         let curr = elem[i];

//         if (curr === "" || curr === " ") {
//           leftStartIndex = i + 1;
//           break;
//         }
//       }
//       let newName = `<span class='name'>${elem.slice(
//         leftStartIndex,
//         center
//       )}</span>`;
//       let newClass = Number.isNaN(Number(elem[center + 2])) ? "text" : "num";
//       let newText = `<span class='${newClass}'>${elem.slice(
//         center + 1,
//         rightEndIndex
//       )}</span>`;
//       elem = elem.slice(0, leftStartIndex) + newName + ":" + newText + ";";
//       editedLines.push(elem);
//     });
//     let openedIndex = param.indexOf("{");
//     let propertyName = [...param.slice(0, openedIndex)].filter(elem=> elem != ' ').join('')
//     console.log(propertyName)
//     let result =
//       `<span class='outer'>${propertyName} {</span>` +
//       editedLines.join("") +
//       `<span class='outer'>\n }</span>`;
//     if (editedLines.length) {
//       text.insertAdjacentHTML("beforeend", result);
//     }
//   });
// });
3;
// let timeLeft
// function startTimer() {
//   let initial = localStorage.getItem("timeLeft");
//   if (!initial) {
//     initial = 60 * 60 - 1;
//   }
//   setInterval(() => {
//     sec.textContent = Math.floor(initial % 60);
//     mins.textContent = Math.floor((initial / 60) % 60);
//     hours.textContent = Math.floor((initial / 60 / 60) % 60);
//     initial--;
//     timeLeft = initial
//   }, 1000);
// }
// function setStorage(){
//     localStorage.setItem('timeLeft', timeLeft)
// }
// window.addEventListener("load", startTimer);
// window.addEventListener('beforeunload', setStorage)
4;
// let ships = [
//   [4, 1],
//   [3, 2],
//   [2, 3],
//   [1, 4],
// ];
// function random10() {
//   return Math.floor(Math.random() * 10);
// }
// function findStart(rowToScan, shift) {
//   let result = null;
//   for (let i = 0; i < rowToScan.length; i++) {
//     let startIndex = Math.floor(Math.random() * (rowToScan.length - 1 - shift));
//     if (
//       rowToScan[startIndex].className ||
//       rowToScan[startIndex + shift].className
//     ) {
//       continue;
//     } else {
//       result = startIndex;
//       break;
//     }
//   }
//   return result;
// }
// selectors.btn.addEventListener("click", function () {
//   let parent = selectors.table;
//   let cells = parent.querySelectorAll("td");
//   cells.forEach((elem) => {
//     elem.textContent = "";
//     elem.className = "";
//   });
//   let trs = parent.querySelectorAll("tr");
//   let rows = [...trs].map((elem) => {
//     return elem.children;
//   });
//   let cols = rows.map((elem, index) => {
//     return parent.querySelectorAll(`tr td:nth-child(${index + 1})`);
//   });
//   for (let key of ships) {
//     let count = key[1];
//     let len = Number(key[0]);
//     for (let counter = 1; counter <= count; counter++) {
//       let colORrow;
//       let rowIndex, sudoRow, startIndex;
//       let count = 0;
//       do {
//         colORrow = Math.floor(Math.random() * 2) == 0 ? rows : cols;
//         count++;
//         rowIndex = random10();
//         sudoRow = colORrow[rowIndex];
//         startIndex = findStart(sudoRow, len - 1);
//       } while (startIndex == null && count <= 1000);
//       // drawing a ship
//       for (let i = startIndex; i < startIndex + len; i++) {
//         try {
//           sudoRow[i].classList.add(`ship__${len}`);
//         } catch (error) {
//           console.log(sudoRow, startIndex, count);
//           throw new Error(error);
//         }
//         // drawing closed
//         for (let j = -1; j <= 1; j += 2) {
//           let disabledRow = colORrow[j + rowIndex];
//           if (disabledRow) {
//             for (let k = startIndex - 1; k <= startIndex + len; k++) {
//               if (disabledRow[k]) disabledRow[k].classList.add(`stop`);
//             }
//           }
//         }
//       }

//       for (let j = startIndex; j < startIndex + len; j++) {}
//       if (sudoRow[startIndex - 1])
//         sudoRow[startIndex - 1].classList.add("stop");
//       if (sudoRow[startIndex + len])
//         sudoRow[startIndex + len].classList.add("stop");
//     }
//   }
// });
5;
// function random100() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// function upperBottom(left, right, center, mainArray) {
//   for (let j = -10; j <= 10; j += 20) {
//     if (left) {
//       if (j + left <= 100 && j + left >= 0) {
//         mainArray.push(j + left);
//       }
//     }
//     if (right) {
//       if (j + right <= 100 && j + right >= 0) mainArray.push(j + right);
//     }
//     if (j + center <= 100 && j + center >= 0) mainArray.push(j + center);
//   }
//   return mainArray;
// }
// function drawTable() {
//   let matrix = [];
//   let parent = selectors.table;
//   let rows = parent.querySelectorAll("tr");
//   let cellCount = 1;
//   let minusFirst = [];
//   let minusSecond = [];
//   let count = 0;
//   let firstIndex;
//   let secondIndex;
//   do {
//     count++;
//     firstIndex = random100();
//     do {
//       secondIndex = random100();
//     } while (secondIndex == firstIndex);

//     for (let i = -1; i <= 1; i += 2) {
//       let curr = i + firstIndex;

//       // check left
//       if (firstIndex > curr && curr % 10 === 0) {
//         minusFirst.push(null);
//         continue;
//       }
//       //check right
//       if (firstIndex % 10 === 0 && i == 1) {
//         minusFirst.push(null);
//         continue;
//       }
//       minusFirst.push(curr);
//     }
//     for (let i = -1; i <= 1; i += 2) {
//       let curr = i + secondIndex;

//       // check left
//       if (secondIndex > curr && curr % 10 === 0) {
//         minusSecond.push(null);
//         continue;
//       }
//       // check right
//       if (secondIndex % 10 === 0 && i == 1) {
//         minusSecond.push(null);
//         continue;
//       }
//       minusSecond.push(curr);
//     }
//     minusFirst = upperBottom(
//       minusFirst[0],
//       minusFirst[1],
//       firstIndex,
//       minusFirst
//     );
//     minusSecond = upperBottom(
//       minusSecond[0],
//       minusSecond[1],
//       secondIndex,
//       minusSecond
//     );
//   } while (minusFirst.filter((elem) => minusSecond.includes(elem)).length > 1);
//   console.log(count)
//   rows.forEach((row) => {
//     let matrixRow = [];
//     [...row.children].forEach((elem) => {
//       let toPush = 0;
//       if (cellCount == firstIndex || cellCount == secondIndex) {
//         toPush = 2;
//       }
//       if (minusFirst.includes(cellCount) || minusSecond.includes(cellCount)) {
//         toPush = 1;
//       }
//       matrixRow.push(toPush);
//       cellCount++;
//     });
//     matrix.push(matrixRow);
//   });
//   let [plus, minus] = ["+", "-"];
//   let newBlock = document.createDocumentFragment();
//   matrix.forEach((row) => {
//     let newRow = document.createElement("tr");
//     row.forEach((elem) => {
//       let cell = document.createElement("td");
//       let content = "";
//       if (elem == 2) content = plus;
//       if (elem == 1) content = minus;
//       cell.textContent = content;
//       newRow.append(cell);
//     });
//     newBlock.append(newRow);
//   });
//   if (newBlock) {
//     parent.firstElementChild.remove();
//     let tbody = document.createElement("tbody");
//     tbody.append(newBlock);
//     parent.append(tbody);
//   }
// }
// selectors.btn.addEventListener("click", drawTable);
6;
// selectors.btn.addEventListener('click', function () {})
