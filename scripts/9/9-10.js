import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
const drawLine = (e) => {
  let target = e.target;
  target.classList.toggle("selected");
  let selected = selectors.table.getElementsByClassName("selected");
  if (selected.length == 2) {
    let cells = selectors.table.querySelectorAll("td");
    let elemsIndexes = [];
    [...selected].forEach((elem) => {
      elemsIndexes.push([...cells].indexOf(elem));
    });
    for (let i = elemsIndexes[0] + 1; i < elemsIndexes[1]; i++) {
      cells[i].classList.add("selected");
    }
  }
};
selectors.table.addEventListener("click", (e) => drawLine(e));
2;
// selectors.btn.addEventListener('click', function () {})
3;
// selectors.btn.addEventListener('click', function () {})
4;
// selectors.btn.addEventListener('click', function () {})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
