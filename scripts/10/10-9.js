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
let ships = {
  4: 1,
};
function random10() {
  let result = Math.floor(Math.random() * 10);
  console.log(result);
  return result;
}
selectors.btn.addEventListener("click", function () {
  let parent = selectors.table;
  let cells = parent.querySelectorAll("td");
  cells.forEach((elem) => (elem.textContent = ""));
  let trs = parent.querySelectorAll("tr");
  let rows = [...trs].map((elem) => {
    return elem.children;
  });
  let cols = rows.map((elem, index) => {
    return parent.querySelectorAll(`tr td:nth-child(${index + 1})`);
  });
  for (let key in ships) {
    let count = ships[key];
    let len = key;
    let colORrow = Math.floor(Math.random() * 2) == 0 ? rows : cols;
    let sudoRow = colORrow[random10()];
    let startIndex;
    do {
      startIndex = random10();
    } while (sudoRow.length - (startIndex + 1) < len);
    for (let i = startIndex; i <= startIndex + len; i++) {
      sudoRow[i].classList.add(`ship__${key}`);
    }
  }
});
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
