import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// let initial = [1, 2, 3];
// function areEqual(arr1, arr2) {
//   return JSON.stringify(arr1) === JSON.stringify(arr2);
// }
// let count = 0;
// function arrCombinations(arr, pointer) {
//   count++;
//   console.log(count);
//   console.log(arr);
//   let nextIndex = (pointer + 1) % arr.length;
//   let temp = arr[nextIndex];
//   arr[nextIndex] = arr[pointer];
//   arr[pointer] = temp;
//   if (areEqual(initial, arr)) {
//     return;
//   }
//   return arrCombinations(arr, nextIndex);
// }
// selectors.btn.addEventListener("click", () => arrCombinations([...initial], 0));

//GPT
// function printPermutations(arr) {
//   const permutations = generatePermutations(arr);
//   console.log(permutations.length);
//   for (const perm of permutations) {
//     console.log(perm);
//   }
// }
// function generatePermutations(arr) {
//   if (arr.length === 0) {
//     return [[]];
//   }
//   const firstElement = arr[0];
//   const restOfArray = arr.slice(1);
//   const restPermutations = generatePermutations(restOfArray);
//   const allPermutations = [];
//   for (const perm of restPermutations) {
//     for (let i = 0; i <= perm.length; i++) {
//       const newPermutation = [
//         ...perm.slice(0, i),
//         firstElement,
//         ...perm.slice(i),
//       ];
//       allPermutations.push(newPermutation);
//     }
//   }
//   return allPermutations;
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// printPermutations(array);
2;
// Skipping canvas
3;
// function devidersSum(num) {
//   let result = [1];
//   let root = num ** 0.5;
//   if (Number.isInteger(root)) result.push(root);
//   for (let i = 2; i < root; i++) {
//     if (num % i === 0) {
//       result.push(i, num / i);
//     }
//   }
//   return result.reduce((acc, curr) => acc + curr);
// }
// selectors.btn.addEventListener("click", function () {
//   let result = [];
//   let start = parseInt(selectors.inp1.value);
//   let end = parseInt(selectors.inp2.value);
//   for (let i = start; i <= end; i++) {
//     if (result.includes(i)) continue;
//     let summ1 = devidersSum(i);
//     if (summ1 == i) continue
//     if (devidersSum(summ1) == i) result.push(i, summ1);
//   }
//   console.log(result)
// });
4;
// function loadForm() {
//   let localValues = JSON.parse(localStorage.getItem("values"));
//   let localChecks = JSON.parse(localStorage.getItem("checks"));
//   localValues.forEach((value) => {
//     let curr = form.querySelector(`#${value}`);
//     let stored = JSON.parse(localStorage.getItem(value)) ;
//     curr.value = stored
//   });
//   localChecks.forEach((check) => {
//     let curr = form.querySelector(`#${check}`);
//     curr.checked = true;
//   });
// }
// function saveForm() {
//   let elems = [...form.elements];
//   let valuesId = [];
//   let checksId = [];
//   elems.forEach((elem) => {
//     let id = elem.id;
//     if (elem.type === "checkbox" || elem.type === "radio") {
//       if (elem.checked) {
//         localStorage.setItem(id, "checked");
//         checksId.push(id);
//       }
//     } else if (elem.value) {
//       localStorage.setItem(id, JSON.stringify(elem.value));
//       valuesId.push(id);
//     }
//   });
//   localStorage.setItem("values", JSON.stringify(valuesId));
//   localStorage.setItem("checks", JSON.stringify(checksId));
// }
// window.addEventListener("beforeunload", saveForm);
// window.addEventListener("load", loadForm);

5;
function moveTO(direction) {
  let nn5 = document.querySelector("#nn5");
  let rows = nn5.querySelectorAll("tr");
  let cells = nn5.querySelectorAll("td");
  let newTable = document.createDocumentFragment();
  switch (direction) {
    case "right":
      for (let i = 1; i <= rows.length; i++) {
        let row = document.createElement("tr");
        let newRow = nn5.querySelectorAll(`tr td:nth-child(${i})`);

        newRow.forEach((elem) => row.prepend(elem));
        newTable.appendChild(row);
      }
      break;
    case "left":
      for (let j = 0; j <= rows.length - 1; j++) {
        let row = document.createElement("tr");
        let newRow = nn5.querySelectorAll(`tr td:nth-child(${rows.length - j})`);

        newRow.forEach((elem) => row.append(elem));
        newTable.appendChild(row);
      }
      break;
  }
  rows.forEach((elem) => elem.remove());
  nn5.firstElementChild.append(newTable);
}
document
  .querySelector("#nn5left")
  .addEventListener("click", () => moveTO("left"));
document
  .querySelector("#nn5right")
  .addEventListener("click", () => moveTO("right"));


