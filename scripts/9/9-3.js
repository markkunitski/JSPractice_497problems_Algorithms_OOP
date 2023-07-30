import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// let arr = [
//   "Дан",
//   "массив",
//   "со",
//   "словами",
//   "Получите",
//   "из",
//   "этого",
//   "массива",
//   "случайное",
//   "слово",
//   "начинающееся",
//   "на",
//   "заданную",
//   "букву",
// ];
// btn.addEventListener("click", function () {
//   let target = selectors.inp1.value;
//   let slice = arr.filter((elem) => elem.toLowerCase().startsWith(target));
//   let randomIndex = Math.floor(Math.random() * slice.length);
//   console.log(slice[randomIndex]);
// });
2;
// function countTwo(arr) {
//   let count = 0;
//   let flag = true;
//   arr.forEach((elem) => {
//     while (elem) {
//       if (elem % 10 === 2) count++;
//       elem = ~~(elem / 10);
//     }
//     if (count > 4) {
//       flag = false;
//       return;
//     }
//   });
//   return count === 4;
// }

// selectors.btn.addEventListener("click", function () {
//   let now = new Date();
//   let startYear = String(now.getFullYear());
//   startYear = startYear.slice(0, startYear.length - 2) + "00";
//   let endYear = Number(startYear) + 100;
//   let start = new Date(startYear, 0, 1);
//   let end = new Date(endYear, 0, 1);
//   console.log(start, end);
//   let count = 0;
//   while (start < end) {
//     count++;

//     let year = Number(start.getFullYear());
//     let month = Number(start.getMonth());
//     let date = Number(start.getDate());

//     if (countTwo([year, month + 1, date])) {
//       console.log([year, month + 1, date]);
//     }
//     start.setDate(date + 1);
//   }
// });
3;
// selectors.btn.addEventListener("click", function () {
//   const points = [
//     [1, 2],
//     [2, 4],
//     [3, 8],
//     [4, 16],
//     [5, 32],
//   ];
//   function drawPoint(ctx, x, y) {
//     ctx.beginPath();
//     ctx.arc(x, y, 4, 0, 2 * Math.PI);
//     ctx.fillStyle = "blue";
//     ctx.fill();
//     ctx.stroke();
//   }
//   function drawGraph() {
//     const canvas = document.getElementById("graphCanvas");
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (const [x, y] of points) {
//       drawPoint(ctx, x * 40, canvas.height - y * 20);
//     }
//   }
//   drawGraph();
// });
4;
// selectors.btn.addEventListener('click', function () {})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
