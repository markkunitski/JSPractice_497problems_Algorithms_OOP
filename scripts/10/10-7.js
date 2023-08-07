import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// selectors.table.addEventListener("click", function (e) {
//   let target = e.target;
//   if (target.tagName != "TD") return;
//   let parent = target.parentNode;
//   let selected = parent.querySelectorAll(".activated");
//   console.log(parent)
//   if (selected.length <= 4) {
//     target.classList.add("activated");
//   } else {
//     console.log('too much')
//   }
// });
2;
// selectors.table.addEventListener("click", function (e) {
//   let target = e.target;
//   if (target.tagName != "TD") return;
//   let parent = target.parentNode;
//   let children = [...parent.children];
//   let index = children.indexOf(target);
//   let columnActivated = this.querySelectorAll(
//     `tr td:nth-child(${index + 1}).activated`
//   );
//   console.log(parent);
//   if (columnActivated.length <= 4) {
//     target.classList.add("activated");
//   } else {
//     console.log("too much");
//   }
//   console.log(columnActivated);
// });
3;
// selectors.table.addEventListener("click", function (e) {
//   let target = e.target;
//   if (target.tagName != "TD" || target.classList.contains("unavaiable")) return;
//   let row = target.parentNode;
//   let rowChildren = [...row.children];
//   let index = rowChildren.indexOf(target);
//   target.classList.toggle("activated");
//   let prev = rowChildren[index - 1];
//   let next = rowChildren[index + 1];
//   if (prev) {
//     if (!prev.id) {
//       prev.id = index;
//       prev.classList.toggle("unavaiable");
//     } else if (prev.id == index) {
//       prev.classList.toggle("unavaiable");
//     }
//   }
//   if (next) {
//     if (!next.id) {
//         next.id = index;
//         next.classList.toggle("unavaiable");
//       } else if (next.id == index) {
//         next.classList.toggle("unavaiable");
//       }
//   }
// });
4;
// selectors.table.addEventListener("click", function (e) {
//   let target = e.target;
//   if (target.tagName != "TD" || target.classList.contains('unavaiable')) return;
//   let row = target.parentNode;
//   let childrenX = row.children;
//   let indexX = [...childrenX].indexOf(target);
//   let column = this.querySelectorAll(`tr td:nth-child(${indexX + 1})`);
//   let indexY = [...column].indexOf(target);
//   target.classList.add("activated");
//   let toDisable = [
//     childrenX[indexX + 1],
//     childrenX[indexX - 1],
//     column[indexY + 1],
//     column[indexY - 1],
//   ];
//   toDisable.forEach((elem) => {
//     if (!elem) return
//     console.log(elem);
//     elem.classList.add("unavaiable");
//   });
// });
5;
// const wordList = [
//   "cat",
//   "act",
//   "at",
//   "a",
//   "rat",
//   "tar",
//   "art",
//   "car",
//   "arc",
//   "cart",
//   "cat",
//   "rat",
//   "track",
//   "rack",
//   "tack",
// ];
// selectors.btn.addEventListener("click", function () {
//   let initial = selectors.inp1.value.toLowerCase().trim().split("");
//   let filtered = wordList.filter((elem) => {
//     let flag = true;
//     for (let char of elem) {
//       if (!initial.includes(char)) {
//         flag = false;
//         break;
//       }
//     }
//     return flag;
//   });
//   console.log(filtered);
// });
7;
let data = "2/3 + 3/4";
function evalElem(elem) {
  let [num1, operand, num2] = elem;
  let actions = {
    "/": (a, b) => a / b,
    "+": (a, b) => a + b,
  };
  return actions[operand](num1, num2);
}
selectors.btn.addEventListener("click", function () {
  let arr = data.split(" ");
  let num1 = evalElem(arr[0].split(""));
  let num2 = evalElem(arr[2].split(""));
  console.log(evalElem([num1, arr[1], num2]));
});
