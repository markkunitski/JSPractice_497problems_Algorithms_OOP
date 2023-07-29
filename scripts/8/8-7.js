import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;

// for (let i = 1; i <= 10; i++) {
//   let word = "hello";
//   let result = "";
//   let cache = [];
//   for (let char of word) {
//     let randomIndex = Math.floor(Math.random() * word.length);
//     while (cache.includes(randomIndex)) {
//       randomIndex = Math.floor(Math.random() * word.length);
//     }
//     result += word[randomIndex];
//     cache.push(randomIndex);
//   }
//   console.log(result.toLowerCase());
// }

// btn.addEventListener("click", function () {});
2;
// selectors.btn.addEventListener("click", function () {
//   let num = parseInt(selectors.inp1.value);
//   selectors.ul.innerHTML = ''
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       let child = document.createElement("li");
//       child.textContent = `${i}*${num / i}`;
//       selectors.ul.append(child);
//     }
//   }
// });
4;
// const makeZindex = (curr, sibling, event) => {
//    if (event.ctrlKey) {
//     curr.style.zIndex = 2
//     sibling.style.zIndex = 1
//    }
// }
// selectors.nested1.addEventListener("click", function (e) {
//   makeZindex(this, selectors.nested2, e)
// });
// selectors.nested2.addEventListener("click", function (e) {
//     makeZindex(this, selectors.nested1, e)
//   });
// function makeElementDraggable(element) {
//   let isDragging = false;
//   let initialX, initialY, offsetX, offsetY;

//   element.addEventListener("mousedown", (e) => {
//     isDragging = true;
//     initialX = e.clientX;
//     initialY = e.clientY;
//     offsetX = element.offsetLeft;
//     offsetY = element.offsetTop;
//     element.style.cursor = "grabbing";
//   });

//   document.addEventListener("mousemove", (e) => {
//     if (!isDragging) return;
//     const currentX = e.clientX;
//     const currentY = e.clientY;
//     const deltaX = currentX - initialX;
//     const deltaY = currentY - initialY;
//     element.style.left = offsetX + deltaX + "px";
//     element.style.top = offsetY + deltaY + "px";

//   });

//   document.addEventListener("mouseup", () => {
//     isDragging = false;
//     element.style.cursor = "grab";
//   });
// }

// const nested1 = document.getElementById("nested1");
// makeElementDraggable(nested1);

// const nested2 = document.getElementById("nested2");
// makeElementDraggable(nested2);

5;
// function piramid(start) {
//   let end;
//   if (start == 9) {
//     end = 1;
//     for (let i = start; i >= end; i--) {
//       let symbol = String(i);
//       console.log(symbol.padStart(i, symbol));
//     }
//   } else {
//     end = 9;
//     for (let i = start; i <= end; i++) {
//       let symbol = String(i);
//       console.log(symbol.padStart(i, symbol));
//     }
//   }
// }
// selectors.btn.addEventListener("click",  () => piramid(1));
6;
// let events = {
//   "2019-12-29": ["name1", "name3", "name5", "name7"],
//   "2019-12-30": ["name4", "name8", "name9"],
//   "2019-12-31": ["name2", "name6"],
// };
// selectors.btn.addEventListener("click", function () {
//   let unsortedData = [];
//   for (let key in events) {
//     events[key].forEach((elem) => {
//       let currDate = { date: key, event: elem };
//       unsortedData.push(currDate);
//     });
//   }
//   let sorted = unsortedData.sort((a, b) => a.event.localeCompare(b.event));
//   console.log(sorted);
// });
