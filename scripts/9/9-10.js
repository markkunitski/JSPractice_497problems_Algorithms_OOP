import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// const drawLine = (e) => {
//   let target = e.target;
//   target.classList.toggle("selected");
//   let selected = selectors.table.getElementsByClassName("selected");
//   if (selected.length == 2) {
//     let cells = selectors.table.querySelectorAll("td");
//     let elemsIndexes = [];
//     [...selected].forEach((elem) => {
//       elemsIndexes.push([...cells].indexOf(elem));
//     });
//     for (let i = elemsIndexes[0] + 1; i < elemsIndexes[1]; i++) {
//       cells[i].classList.add("selected");
//     }
//     selectors.table.removeEventListener("click", drawLine);
//   }
// };
// selectors.table.addEventListener("click", drawLine);
2;
// const nestedArray = [
//   1,
//   [2, 3],
//   [4, [5, [6, [7, 8]]]],
//   [9, 10],
//   [11, [12, [13, [14, [15, [16]]]]]],
//   17,
// ];

// function nestedCheck(arr, depth) {
//   if (!Array.isArray(arr)) return 1;
//   let maxDepth = depth;
//   arr.forEach((elem) => {
//     if (Array.isArray(elem)) {
//       let nestedDepth = nestedCheck(elem, depth + 1);
//       maxDepth = Math.max(nestedDepth, maxDepth)
//     }
//   });
//   return maxDepth
// }
// selectors.btn.addEventListener("click", function () {
//   let result = [];
//   nestedArray.forEach((elem) => {
//     let maxDepth = nestedCheck(elem, 1);
//     result.push(maxDepth);
//   });
//   console.log(Math.max(...result))
// });
3;
// let data = [
//   {
//     year: 2019,
//     month: 11,
//     day: '20DAY',
//     data: ["1", "2"],
//   },
//   {
//     year: 2019,
//     month: 11,
//     day: '21DAY',
//     data: ["3", "4"],
//   },
//   {
//     year: 2019,
//     month: 12,
//     day: '25DAY',
//     data: ["5", "6", "7"],
//   },
//   {
//     year: 2019,
//     month: 12,
//     day: '26DAY',
//     data: ["8", "9", "10", "11"],
//   },
//   {
//     year: 2020,
//     month: 10,
//     day: '29DAY',
//     data: ["12", "13"],
//   },
//   {
//     year: 2020,
//     month: 10,
//     day: '30DAY',
//     data: ["14", "15"],
//   },
//   {
//     year: 2020,
//     month: 11,
//     day: '19DAY',
//     data: ["16", "17"],
//   },
//   {
//     year: 2020,
//     month: 11,
//     day: '20DAY',
//     data: ["18", "19"],
//   },
// ];

// selectors.btn.addEventListener("click", function () {
//   let result = {};
//   data.forEach((elem) => {
//     let target = result[elem.year];
//     if (target) {
//       let month = target[elem.month]
//       if (month) {
//         let dataArray = month[elem.day]
//         if (dataArray){
//           dataArray.push(...elem.data)
//         } else {
//           month[elem.day] = elem.data
//         }
//       } else {
//         target[elem.month] = {[elem.day] : [...elem.data]}
//       }
//     } else {
//       result[elem.year] = { [elem.month]: { [elem.day]: [...elem.data] } };
//       console.log(result);
//     }
//   });
//   console.log(result);
// });
4;
selectors.btn.addEventListener('click', function () {
  
})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
