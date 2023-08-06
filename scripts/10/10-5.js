import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// document.addEventListener("keydown", async function (e) {
//   let selected;
//   if (e.ctrlKey && e.key === "Enter") {
//     selected = window.getSelection().toString().trim();
//     if (selected) {
//       try {
//         await navigator.clipboard.writeText(selected);
//         console.log("copied to clipboard");
//       } catch (err) {
//         console.error("error", err);
//       }
//     }
//   }
// });
2;
// selectors.area.addEventListener("keydown", function (e) {
//   if (e.key === "Tab") {
//     let position = selectors.area.selectionStart;
//     let current = selectors.area.value.trim();
//     console.log(current.slice(0, position))
//     console.log(current.slice(position))
//     selectors.area.value =
//       current.slice(0, position) + "\t" + current.slice(position);
//   }
// });
3;
// function store() {
//   let store = [];
//   let position = 0;
//   let functions = {
//     add: (value) => {
//       store.push(value);
//       position++;
//       console.log(store);
//     },
//     getElem: (shift) => {
//       let elem;
//       if (shift == "prev") {
//         elem = store[position - 1];
//         position = position == -1 ? -1 : position - 1;
//         console.log(position);
//       } else {
//         elem = store[position + 1];
//         position = position == store.length ? store.length : position + 1;
//         console.log(position);
//       }
//       return elem;
//     },
//   };
//   return functions;
// }
// let firstInput = store();
// let secondInput = store();
// selectors.inp1.addEventListener("keydown", function (e) {
//   if (e.key == "Enter") {
//     firstInput.add(this.value);
//     this.value = "";
//   }
// });
// selectors.inp2.addEventListener("keydown", function (e) {
//   if (e.key == "Enter") {
//     secondInput.add(this.value);
//     this.value = "";
//   }
// });
// document.addEventListener("click", (e) => {
//   if (e.target.dataset.parentid) {
//     let btn = e.target;
//     console.log(btn);
//     let parentid = e.target.dataset.parentid;
//     let inputElement = document.getElementById(parentid);
//     let parentStore = parentid == "in1" ? firstInput : secondInput;
//     let shift;
//     let elem;
//     if (btn.classList.contains("prev")) {
//       shift = "prev";
//       elem = parentStore.getElem(shift);
//       console.log(elem);
//       inputElement.value = elem == undefined ? "doesnt exists" : elem;
//     } else {
//       shift = "next";
//       elem = parentStore.getElem(shift);
//       console.log(elem);
//       inputElement.value = elem == undefined ? "doesnt exists" : elem;
//     }
//   }
// });
4;
// function findPrime(num) {
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     let flag = true;
//     let root = i ** 0.5;
//     if (Number.isInteger(root)) continue;
//     for (let j = 2; j < root; j++) {
//       if (i % j === 0) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) primes.push(i);
//   }
//   return primes;
// }
// selectors.btn.addEventListener("click", function () {
//   let num = Number(selectors.inp1.value);
//   if (Number.isNaN(num) || num == "") throw new Error("wrong input");
//   console.log("Our goal is to find every single prime deviders of a number");
//   let primes = findPrime(num);
//   console.log(primes);
//   let result = [];
//   let count = 0;
//   do {
//     count++;
//     let smallest = num;
//     for (let elem of primes) {
//       if (num % elem === 0) {
//         smallest = elem;
//         break;
//       }
//     }
//     console.log(
//       `Lets take a smallest prime one by one and see if we can devide our number ${num} on it`
//     );
//     console.log(`Smallest prime is ${smallest}`);
//     let current = num / smallest;
//     console.log(
//       `Write ${smallest} to result and our new number is ${num} / ${smallest} = ${current}`
//     );
//     result.push(smallest);
//     num = current;
//     if (count >= 10000) break;
//   } while (num != 1);
//   console.log(`We break thru number to one, and all prime deviders are - ${result.join(' * ')}`)
// });
5;
// let data = {
// 	a: {
// 		b: {
// 			c: '+++'
// 		}
// 	},
// }
// selectors.btn.addEventListener('click', function () {
//   let initials = 'a.b.c'.split('.')
//   let curr = data
//   initials.forEach((elem, index)=>{
//     curr = curr[elem]
//   })
//   console.log(curr)
// })
6;
// selectors.btn.addEventListener('click', function () {
//   let rows = selectors.table.querySelectorAll('tr')
//   let from = 5
//   rows.forEach(elem=>{
//     let cells = [...elem.children]
//     let initial = from
//     cells.forEach(cell=>{
//       cell.innerText = initial
//       initial++
//     })
//     from--
//   })
// })
