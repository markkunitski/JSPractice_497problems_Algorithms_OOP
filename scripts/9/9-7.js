import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// selectors.table.addEventListener("click", function (e) {
//     let parentNode = e.target.parentNode
//     parentNode.style.background = 'red'
// });
2;
// selectors.table.addEventListener("click", function (e) {
//   let rows = document.querySelectorAll("#table tr");
//   let curr = e.target;
//   let parent = curr.parentNode;
//   let children = parent.children;
//   let index = [...children].indexOf(curr);
//   rows.forEach((row) => {
//     let children = [...row.children]
//     children[index].style.background = 'wheat';
//   });
// });
3;
// selectors.table.addEventListener('click', function (e) {
//     let parentNode = e.target.parentNode
//     parentNode.remove()
// })
4;
// selectors.table.addEventListener("click", function (e) {
//   let curr = e.target;
//   let parent = curr.parentNode;
//   let index = [...parent.children].indexOf(curr);
//   console.log(index);
//   let cellsToRemove = document.querySelectorAll(
//     `#table tr th:nth-child(${index + 1})`
//   );
//   cellsToRemove.forEach((cell) => cell.remove());
// });

5;
selectors.btn.addEventListener("click", function () {
  let table = selectors.table;
  let rows = document.querySelectorAll("table tr");
  for (let i = 0; i < rows.length; i++) {
    let children = rows[i].children;
    if (!children[i]) break;
    children[i].style.background = "red";
  }
  for (let j = 0; j < rows.length; j++) {
    let children = rows[j].children;
    if (!children[j]) break;
    children[children.length - 1 - j].style.background = "red";
  }
});
6;
// selectors.btn.addEventListener('click', function () {})
