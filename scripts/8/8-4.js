import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// selectors.div.addEventListener("dblclick", function () {
//   if (this.hasAttribute('style')) {
//     this.removeAttribute('style')
//     return
//   }
//    let childs = this.children;
//   let targetHeight = 0;
//   console.log(childs);
//   [...childs].forEach((elem) => {
//     targetHeight += elem.clientHeight;
//   });
//   let marginOfsset = 10 * childs.length
//   this.style.height = `${targetHeight+ marginOfsset + 'px'}`
// });
2;
// function checkWord(elem, arr) {
//   let elemTimes = arr.filter((curr) => curr == elem).length;
//   let elemPercent = (elemTimes / arr.length) * 100;
//   return [elem, elemPercent];
// }
// function completFilter(arr) {
//   let filteredArr = arr.map((elem) => {
//     if (
//       elem[elem.length - 1].toUpperCase() == elem[elem.length - 1].toLowerCase()
//     ) {
//       return (elem = elem.slice(0, elem.length - 1));
//     } else {
//       return elem;
//     }
//   });
//   return filteredArr;
// }
// function countWords(parent) {
//   let result = [];
//   let cache = [];
//   let words = parent
//     .trim()
//     .split(" ")
//     .filter((elem) => elem != "");
//   let filteredWords = completFilter(words);

//   filteredWords.forEach((elem) => {
//     if (cache.includes(elem)) return;
//     let [times, percent] = checkWord(elem, filteredWords);

//     cache.push(elem);
//     let child = {
//       howMany: times,
//       percent: percent,
//     };
//     result.push(child);
//   });
//   return result;
// }
// selectors.btn.addEventListener("click", function () {
//   console.log(countWords(selectors.p1.innerText));
// });
3;

// let lis = selectors.ul.children;
// function findElems() {
//   let value = selectors.inp1.value
//     .trim()
//     .split("")
//     .map((elem) => elem.toLowerCase());
//   return value;
// }
// function timesIn(listElem) {
//   let arr = Array.from(listElem.innerText).map((elem) => elem.toLowerCase());
//   let value = findElems();
//   let result = 0;
//   for (let i = 1; i <= value.length; i++) {
//     let arg1 = value.slice(0, i).join("");
//     let arg2 = arr.slice(0, i).join("");
//     if (arg1 == arg2) {
//       result = i;
//     }
//   }
//   return result;
// }

// function notFound(flag) {
//   if (flag) {
//     selectors.inp1.classList.remove('danger')
//   } else {
//     selectors.inp1.classList.add('danger')
//   }

// }
// selectors.inp1.addEventListener("input", function (e) {
//   if (e.target.value == "") {
//     [...lis].forEach((elem) => elem.classList.remove("dnone"));
//     return;
//   }
//   let entriesFlag = false;
//   [...lis].forEach((li) => {
//     let count = timesIn(li);
//     if (count === e.target.value.length) {
//       li.classList.remove("dnone");
//       entriesFlag = true;
//     } else {
//       li.classList.add("dnone");
//     }
//   });
//   notFound(entriesFlag)
// });

// const lis = selectors.ul.children;
// function notFound(flag) {
//   if (flag) {
//     selectors.inp1.classList.remove('danger')
//   } else {
//     selectors.inp1.classList.add('danger')
//   }}
// function filterList() {
//   const inputValue = selectors.inp1.value.trim().toLowerCase();
//   if (!inputValue) {
//     [...lis].forEach((li) => (li.style.display = 'block'));
//     notFound(false);
//   } else {
//     let entriesFlag = false;
//     [...lis].forEach((li) => {
//       const listItemText = li.textContent.toLowerCase();
//       if (listItemText.startsWith(inputValue)) {
//         li.style.display = 'block';
//         entriesFlag = true;
//       } else {
//         li.style.display = 'none';
//       }
//     });
//     notFound(entriesFlag);
//   }
// }
// selectors.inp1.addEventListener('input', filterList);

// selectors.inp1.addEventListener("change", filterList);
// function filterList() {
//     let result = [...selectors.lis].filter((elem) =>
//     elem.innerText
//     .toLowerCase()
//     .includes(selectors.inp1.value.toLowerCase())
//   );
//   selectors.ul.innerHTML = ''
//   result.forEach(elem=> {
//     console.log(elem.textContent)
//     selectors.ul.appendChild(elem)
//   })
// }

4;
const f4 = (start, end) => {
  if (start > end) return;
  let child = "";

  let curr = String(start);
  child += curr.padStart(start, curr);

  console.log(child);
  
  return f4(start + 1, end);
};
selectors.btn.addEventListener("click", function () {
  f4(1, 9);
});
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
