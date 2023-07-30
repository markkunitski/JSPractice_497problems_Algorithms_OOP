import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// btn.addEventListener("click", function () {
//   let elems = selectors.lis;
//   let cache = [];
//   for (let elem of elems) {
//     let newIndex = Math.floor(Math.random() * elems.length);
//     while (cache.includes(newIndex)) {
//       newIndex = Math.floor(Math.random() * elems.length);
//     }
//     selectors.ul.append(elems[newIndex])
//   }
// });
2;
// selectors.btn.addEventListener("click", function () {
//   let num = (100 / 3) % 1;
//   if (Number.isInteger(num)) {
//     throw new Error('type of integer')
//   };
//   let [int, float] = String(num.toFixed(5)).split(".");
//   let last = float[float.length - 1];
//   console.log(float);
//   for (let i = 0; i <= float.length - 2; i++) {
//     if (float[i] != last) {
//       last = false;
//       break;
//     }
//   }
//   console.log(last);
// });
3;
// function isSimple(num) {
//   let root = num ** 0.5;
//   let result = true;
//   if (Number.isInteger(root)) return false;
//   for (let i = 2; i < root; i++) {
//     if (num % i === 0) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }
// function findFirstSimple(num) {
//   if (isSimple(num)) return num;
//   let root = num ** 0.5;
//   let result = num;
//   for (let i = 2; i <= root; i++) {
//     if (num % i === 0) {
//       if (isSimple(i)) {
//         result = i;
//         break;
//       }
//       if (isSimple(num / i)) {
//         result = num / i;
//         break;
//       }
//     }
//   }
//   return result;
// }
// function simple(num, result, sum) {
//   console.log(num + " num");
//   if (num == 1) return [result, sum];
//   let devider = findFirstSimple(num);
//   sum *= devider;
//   result.push(devider);
//   return simple(num / devider, result, sum);
// }
// selectors.btn.addEventListener("click", function () {
//   let result = simple(1084, [], 1);
//   console.log(result);
// });
4;
// function waveCheck(num) {
//   if (num === 1) return;
//   let result = true;
//   let root = num ** 0.5;
//   for (let i = 2; i <= root; i++) {
//     if (num % i === 0) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }
// selectors.btn.addEventListener("click", function () {
//   let start = parseInt(selectors.inp1.value);
//   let end = parseInt(selectors.inp2.value);
//   if (end <= start) throw new Error("wrong input");
//   selectors.ul.innerHTML = "";
//   for (start; start <= end; start++) {
//     if (waveCheck(start)) {
//       let child = document.createElement("li");
//       child.textContent = start;
//       selectors.ul.append(child);
//     }
//   }
// });
5;
selectors.btn.addEventListener('click', function () {
    
})
6;
// selectors.btn.addEventListener('click', function () {})
