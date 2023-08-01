import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// selectors.btn.addEventListener("click", function () {
//     let tBody = selectors.table.firstElementChild
//     let first = tBody.firstChild
//     let second = tBody.children[1]
//     first.remove()
//     second.remove()
//     tBody.prepend(first)
//     tBody.prepend(second)
// });
2;
// selectors.btn.addEventListener("click", function () {
//   let firstCol = document.querySelectorAll("#table tr th:nth-child(1)");
//   let secondCol = document.querySelectorAll("#table tr th:nth-child(2)");
//   let rows = document.querySelectorAll('#table tr')
//   firstCol.forEach(elem=> elem.remove())
//   secondCol.forEach(elem=> elem.remove())
//   rows.forEach((elem, index)=>{
//     elem.prepend(firstCol[index])
//     elem.prepend(secondCol[index])
//   })
//   console.log(firstCol, secondCol);
// });
3;
// STARTER
// selectors.table.addEventListener("click", function (e) {
//     let top = e.target;
//     let index = [...this.firstElementChild.firstElementChild.children].indexOf(
//       top
//     );
//     let parent = document.querySelectorAll(
//       `#table tr th:nth-child(${index + 1})`
//     );
//     let toSort = [...parent].slice(1);

//     let sortedArr;
//     if (!Number.isNaN(Number(toSort[0].textContent))) {
//       console.log("NUMBER");
//       sortedArr = toSort.sort(
//         (a, b) => Number(a.textContent) - Number(b.textContent)
//       );
//     } else {
//       console.log("STRING");
//       sortedArr = toSort.sort((a, b) =>
//         a.textContent.localeCompare(b.textContent)
//       );
//     }
//     let rows = document.querySelectorAll("#table tr");
//     rows.forEach((row, frameIndex) => {
//       if (frameIndex == 0) return;
//       row.children[index].textContent = sortedArr[frameIndex - 1].textContent;
//     });
//     console.log(parent);
//   });

// EDITED
selectors.table.addEventListener("click", function (e) {
  let top = e.target;
  console.log(top.tagName)
  if (top.tagName != 'TH') return
  let index = [...this.firstElementChild.firstElementChild.children].indexOf(
    top
  );
  let parent = document.querySelectorAll(
    `#table tr td:nth-child(${index + 1})`
  );
  let toSort = [];
  parent.forEach((elem, parentIdnex) => {
    toSort.push(elem.innerText)
  });
  let sortedArr;
  if (!Number.isNaN(Number(toSort[0]))) {
    console.log("NUMBER");
    sortedArr = toSort.sort(
      (a, b) => Number(a) - Number(b)
    );
  } else {
    console.log("STRING");
    sortedArr = toSort.sort((a, b) =>
      a.localeCompare(b)
    );
  }
  console.log(sortedArr);
  let rows = document.querySelectorAll("#table tr");
  rows.forEach((row, frameIndex) => {
    if (frameIndex == 0) return;
    row.children[index].textContent = sortedArr[frameIndex - 1];
  });
  console.log(parent);
});
// // GPT
// selectors.table.addEventListener("click", function (e) {
//     let top = e.target;
//     let index = [...this.firstElementChild.firstElementChild.children].indexOf(top);
//     let parent = document.querySelectorAll(`#table tr th:nth-child(${index + 1})`);
//     let toSort = [...parent].slice(1);

//     let cellInfoArr = []; // Array to store cell info before sorting
//     toSort.forEach((cell) => {
//       cellInfoArr.push({
//         textContent: cell.textContent,
//         cellRef: cell,
//       });
//     });

//     let sortedArr;
//     if (!Number.isNaN(Number(cellInfoArr[0].textContent))) {
//       console.log("NUMBER");
//       sortedArr = cellInfoArr.sort((a, b) =>
//         Number(a.textContent) - Number(b.textContent)
//       );
//     } else {
//       console.log("STRING");
//       sortedArr = cellInfoArr.sort((a, b) =>
//         a.textContent.localeCompare(b.textContent)
//       );
//     }

//     let rows = document.querySelectorAll("#table tr");
//     rows.forEach((row, frameIndex) => {
//       if (frameIndex === 0) return;
//       row.children[index].textContent = sortedArr[frameIndex - 1].textContent;
//     });
//   });
4;
// let options = ["1", "2", "3"];
// let pointer = 0;
// selectors.table.addEventListener("click", function (e) {
//   let target = e.target;
//   target.innerText += "\n" + options[pointer];
//   pointer == options.length - 1 ? (pointer = 0) : pointer++;
// });
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
