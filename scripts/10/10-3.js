import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// selectors.inp1.addEventListener("keydown", function (e) {
//   let value = e.key;
//   if (Number.isNaN(Number(value))) {
//     e.preventDefault();
//     throw new Error('only number')
//   }
// });
2;
// function drawToolTip(elem, parentPos) {
//   let [x, y] = parentPos;
//   let direction;
//   y < 200 ? (direction = "down") : (direction = "up");
//   let span = document.createElement("span");
//   span.textContent =
//     "loremipsum lsdhjgf sbnfv xcvbn amsndb qwetu xchvz6q8wtge ! dfsm,dbf ,iht qgweuytuhc xcvhjb";

//   span.id = "tooltip";
//   span.style.cssText = `margin-inline = 20px left: ${x}px; position:absolute; top: ${
//     y + 20
//   }px; background: wheat;`;

//   document.body.appendChild(span);
//   let width = span.offsetWidth / 2;
//   console.log(x - width + "summ");
//   span.style.left = x - width + "px";
// }

// document.addEventListener("click", function (e) {
//   let target = e.target;

//   let span = document.querySelector("#tooltip");
//   if (target == document || target == document.body || span) return;
//   target.classList.add("toggled");
//   let rect = target.getBoundingClientRect();
//   console.log(rect);
//   let clientY = rect.bottom;
//   let clientX = target.offsetLeft + target.offsetWidth / 2;
//   drawToolTip(target, [clientX, clientY]);
// });
// window.addEventListener("resize", function (e) {
//   let span = document.querySelector("#tooltip");
//   if (!span) return;
//   let parent = document.querySelector(".toggled");
//   let width = span.offsetWidth / 2;
//   let currentLEFT = parent.offsetLeft + 50 - width;
//   currentLEFT >= 0
//     ? (span.style.left = currentLEFT + "px")
//     : (span.style.left = "0");

// });
3;
// let arr = ['0', '6', '2', '9', '8'];
// function luckyList() {
//   let result = [];
//   for (let i = 0; i < 1e6; i++) {
//     let num = String(i);
//     let sum = 0;
//     for (let j = 1; j <= 6; j++) {
//       let last = num % 10;
//       if (j <= 3) {
//         sum += last;
//       } else {
//         sum -= last;
//       }
//       num = ~~(num / 10);
//     }
//     if (sum == 0) {
//       let string = String(i).padStart(6, "0");
//       let flag = true;
//       for (let char of string) {
//         if (!arr.includes(char)) {
//           flag = false;
//           break;
//         }
//       }
//       if (flag) result.push(string);
//     }
//   }
//   console.log(result);
// }
// selectors.btn.addEventListener("click", luckyList);
4;
// selectors.btn.addEventListener("click", function () {
//   let rows = selectors.table.querySelectorAll("#table tr");
//   rows.forEach((row, index) => {
//     let redIndex = index;
//     let tealIndex = row.children.length - 1 - index
//     row.children[redIndex].style.background = 'red'
//     row.children[tealIndex].style.background = 'teal'
//   });
// });
5;
// function createPass(len) {
//   if (len <= 6) throw new Error("too short");
//   let result = "";
//   let start = 48;
//   let end = 122;
//   let data = {
//     symbols: [33, 47],
//     numbers: [48, 57],
//     upper: [65, 90],
//     lower: [97, 122],
//   };
//   for (let key in data) {
//     let [start, end] = data[key];
//     let sudo = Math.floor(Math.random() * (end - start) + start + 1);
//     result += String.fromCharCode(sudo);
//   }
//   for (let i = result.length; i <= len; i++) {
//     let sudo = Math.floor(Math.random() * (end - start) + start + 1);
//     result += String.fromCharCode(sudo);
//   }
//   return result;
// }

// selectors.btn.addEventListener("click", function () {
//   console.log(createPass(7));
// });
6;
selectors.btn.addEventListener('click', function () {
    let mid = window.innerWidth / 2
    let elems = document.body.querySelectorAll('*')
    elems.forEach(elem=>{
        let rect = elem.getBoundingClientRect()
       if (rect.right > mid){
        elem.style.background = 'wheat'
        return
       }
       if (rect.left < mid ){
        elem.style.background = 'lightGray'
       }
    })
})
