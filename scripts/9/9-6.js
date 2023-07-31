import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// const drawLesson = () => {
//   let parent = selectors.table;
//   for (let i = 1; i <= 8; i++) {
//     let isBlackStart = i % 2 === 0;
//     let next = isBlackStart ? "gray" : "wheat";
//     let row = document.createElement("tr");
//     for (let j = 1; j <= 8; j++) {
//       let child = document.createElement("th");
//       child.textContent = "field";
//       child.style.background = next;
//       next = next === "wheat" ? "gray" : "wheat";
//       row.appendChild(child);
//     }
//     parent.append(row);
//   }
// };
// selectors.btn.addEventListener("click", function () {
//   drawLesson();
// });
2;
// selectors.table.addEventListener("click", function (e) {
//   let curr = e.target;
//   let elems = document.querySelectorAll(`#${this.id} th`);
//   let index = [...elems].indexOf(curr);
//   curr.innerText += ` index: ${index}`;
// });
3;
// selectors.table.addEventListener("click", function (e) {
//   let target = e.target;
//   let row = target.parentNode;
//   let rows = document.querySelectorAll("#table tr");
//   let children = row.children;
//   console.log([...children]);
//   let rowNumber = [...rows].indexOf(row) + 1;
//   let colNumber = [...children].indexOf(target) + 1;
//   target.textContent += " " + [rowNumber, colNumber];
// });
4;
// selectors.btn.addEventListener("click", function () {
//   let boxes = document.querySelectorAll("#checkboxes input");
//   boxes.forEach((elem) => {
//     elem.addEventListener("click", (e) => {
//       let actives = document.getElementsByClassName("active");
//       if (actives.length > 2 && !elem.classList.contains("active")) {
//         e.preventDefault();
//         console.log(actives);
//         console.log("Statement: You can't check more than 3.");
//         return;
//       }
//       elem.classList.toggle("active");
//     });
//   });
// });

5;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// selectors.btn.addEventListener("click", function () {
//   let parent = selectors.table;
//   let copy = [...arr];
//   for (let i = 1; i <= arr.length / 5; i++) {
//     let row = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//       let child = document.createElement("th");
//       child.textContent = copy[j];
//       row.appendChild(child);
//     }
//     copy = copy.slice(5);
//     parent.append(row);
//   }
//   if (copy.length) {
//     let row = document.createElement("tr");
//     copy.forEach((elem) => {
//       let child = document.createElement("th");
//       child.textContent = elem;
//       row.appendChild(child);
//     });
//     parent.append(row);
//   }
// });
6;
// selectors.btn.addEventListener('click', function () {})
