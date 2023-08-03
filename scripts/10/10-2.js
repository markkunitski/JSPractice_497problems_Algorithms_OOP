import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// selectors.table.addEventListener("click", function (e) {
//   let target = e.target;
//   if (target.classList.contains("unavaiable")) return;
//   if (target.tagName == "TD" || target.tagName == "TH") {
//     target.classList.toggle("activated");
//     let rows = selectors.table.querySelectorAll("tr");
//     let parentRow = target.closest("tr");
//     let colIndex = [...parentRow.children].indexOf(target);
//     let rowIndex = [...rows].indexOf(parentRow);
//     let sameRowElems = [
//       parentRow.children[colIndex - 1],
//       parentRow.children[colIndex + 1],
//     ];
//     let upperBottom = [rows[rowIndex - 1], rows[rowIndex + 1]];
//     upperBottom.forEach((elem) => {
//       if (elem?.children[colIndex])
//         elem.children[colIndex].classList.add("unavaiable");
//     });
//     sameRowElems.forEach((elem) => {
//       if (elem) elem.classList.add("unavaiable");
//     });
//   }
// });
2;
// selectors.btn.addEventListener("click", function () {
//   let cells = selectors.table.querySelectorAll("td");
//   let cache = [];
//   let tableInterval = setInterval(() => {
//     let sudoIndex;
//     do {
//       sudoIndex = Math.floor(Math.random() * cells.length);
//     } while (cache.includes(sudoIndex));
//     cells[sudoIndex].classList.add("activated");
//     cache.push(sudoIndex);
//     if (cache.length >= cells.length) clearInterval(tableInterval);
//   }, 100);
// });
3;
// let elem = localStorage.getItem('elem')
// if (elem){
//     console.log('found!')
//     console.log(elem)
// }
// let toAdd = selectors.area
// localStorage.setItem('elem', toAdd)

// function setter(where) {
//   let height = localStorage.getItem("height");
//   let width = localStorage.getItem("width");
//   where.style.height = height + "px";
//   where.style.width = width + "px";
// }
// setter(selectors.area);
// function handler() {
//   let height = selectors.area.offsetHeight;
//   let width = selectors.area.offsetWidth;
//   console.log(height, width);
// }
// let observer = new MutationObserver(handler);
// observer.observe(selectors.area, { attributes: true });
// function onUserLeave() {
//   localStorage.setItem("height", selectors.area.offsetHeight);
//   localStorage.setItem("width", selectors.area.offsetWidth);
// }
// window.addEventListener("beforeunload", onUserLeave);
4;
// function devidersSum(num) {
//   let result = [1];
//   let root = num ** 0.5;
//   for (let i = 2; i < root; i++) {
//     if (num % i === 0) {
//       result.push(i, num / i);
//     }
//   }
//   if (Number.isInteger(root)) result.push(root);

//   let sum = result.reduce((acc, curr) => acc + curr, 0);
//   return [sum > num, result];
// }
// selectors.btn.addEventListener("click", function () {
//     selectors.ul.innerHTML = ''
//   let start = parseInt(selectors.inp1.value);
//   let end = parseInt(selectors.inp2.value);
//   for (start; start <= end; start++) {
//     let [bool, arr] = devidersSum(start);
//     console.log(bool);
//     if (!bool) continue;
//     let child = document.createElement("li");
//     child.textContent = start + ` ${arr}`;
//     selectors.ul.append(child);
//   }
// });
5;
// selectors.btn.addEventListener('click', function () {
//     let parent = selectors.table
//     let rows = parent.querySelectorAll('tr')
//     rows.forEach((elem, index)=>{
//         for (let i = 0; i<=elem.children.length - 1 - index; i++){
//             let current = elem.children[i]
//             console.log(current)
//             current.textContent = '+'
//         }
//     })
// })
6;
// selectors.btn.addEventListener('click', function () {})
