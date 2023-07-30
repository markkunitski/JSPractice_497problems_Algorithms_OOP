import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// btn.addEventListener("click", function () {
//   parent = selectors.table;
//   let newCode = `<tr>
//     <th>11</th>
//     <th>21</th>
//     <th>31</th>
//   </tr>`;
//   parent.insertAdjacentHTML('beforeend', newCode)
// });
2;
// selectors.btn.addEventListener("click", function () {
//   let child = `<th>999</th>`;
//   let target = selectors.table.firstElementChild.children
//   Array.from(target).forEach(elem => {
//     elem.insertAdjacentHTML("beforeend", child);
//   });
// });
3;
// const parentElement = selectors.table;
// const observer = new MutationObserver((events) => {
//   // Handle changes to the table (rows) here
//   let rows = document.querySelectorAll("#table tr");
//   console.log(rows.length); // Log the number of rows
// });
// observer.observe(parentElement, { childList: true, subtree: true });

// selectors.btn.addEventListener("click", function () {
//   let parent = selectors.table.firstElementChild;
//   let count = parent.children.length;
//     console.log(parent.children);
//   // Add columns to existing rows
//   [...parent.children].forEach((row) => {
//     let child = document.createElement("th");
//     child.textContent = "999";
//     row.appendChild(child);
//   });

//   // Add new row with columns
//   let newRow = document.createElement("tr");
//   for (let i = 1; i <= count+2; i++) {
//     let child = document.createElement("th");
//     child.textContent = "333";
//     newRow.appendChild(child);
//   }
//   parent.appendChild(newRow);
// });
4;
// selectors.btn.addEventListener('click', function () {
//     let elems = document.querySelectorAll('#table th')
//     elems.forEach(elem=>{
//         elem.contentEditable = 'true'
//     })
// })
5;
// let cache = [];
// selectors.btn.addEventListener("click", function () {
//   let elems = document.querySelectorAll("#table th");

//   if (cache.length == elems.length) return;
//   let randomIndex = Math.floor(Math.random() * elems.length);
//   while (elems[randomIndex].hasAttribute("style")) {
//     randomIndex = Math.floor(Math.random() * elems.length);
//   }
//   cache.push(randomIndex)
//   console.log(cache);
//   elems[randomIndex].style.background = "red";
// });
6;
// let index = 0;
// selectors.btn.addEventListener("click", function () {
//   let elems = document.querySelectorAll("#table th");
//   if (index >= elems.length) return;
//   elems[index].style.background = "red";
//   index++;
// });
