let inp1 = document.getElementById("in1");
let inp2 = document.getElementById("in2");
let inps = document.querySelectorAll("input");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let btn = document.getElementById("btn");
let div = document.getElementById("div");
let ps = document.querySelectorAll("p");
let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let as = document.querySelectorAll("a");
let lis = document.querySelectorAll("ul li");
let area = document.querySelector("#area");
let ul = document.querySelector(".ulclass");
let divs = document.querySelectorAll("#div div");
let btns = document.querySelectorAll(".fordivs");
let nn1 = document.querySelectorAll(".nn1");
function pop(state) {
  let child = document.createElement("div");
  child.classList.add("pop", `${state}`);
  document.body.firstElementChild.appendChild(child);
  setTimeout(() => {
    let timed = document.querySelectorAll(".pop");
    timed.forEach((elem) => elem.remove());
    console.log(timed);
  }, 1000);
}
1;
// const rect = divs[0].getBoundingClientRect();
//     // Log the position and size information
//     console.log('Top:', rect.top);
//     console.log('Left:', rect.left);
//     console.log('Right:', rect.right);
//     console.log('Bottom:', rect.bottom);
//     console.log('Width:', rect.width);
//     console.log('Height:', rect.height);
// btn.addEventListener("click", function () {
//     const rect = div.getBoundingClientRect();
//     // Log the position and size information
//     console.log('Top:', rect.top);
//     console.log('Left:', rect.left);
//     console.log('Right:', rect.right);
//     console.log('Bottom:', rect.bottom);
//     console.log('Width:', rect.width);
//     console.log('Height:', rect.height);
// });
2;
// btn.addEventListener("click", function () {
//   let [first, second] = nn1
//   let rect1 = first.getBoundingClientRect()
//   let rect2 = second.getBoundingClientRect()
//   console.log(rect1)
//   console.log(rect2)
//   const overlap = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
//   // Output the result
//   if (overlap) {
//     console.log('The divs overlap.');
//   } else {
//     console.log('The divs do not overlap.');
//   }
// });
3;
// function isLoading(parent) {
//   const loadingHeader = document.createElement("h1");
//   loadingHeader.textContent = "LOADING";
//   parent.insertBefore(loadingHeader, parent.firstChild);

//   const observer = new MutationObserver((mutationsList) => {
//     if (mutationsList.some((mutation) => mutation.addedNodes.length > 0)) {
//       parent.removeChild(loadingHeader);
//       observer.disconnect();
//     }
//   });
//   observer.observe(parent, { childList: true });
// }

// const isLucky = (value) => {
//   let firstSum = value.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
//   let secondSum = value.slice(3).reduce((acc, curr) => acc + curr, 0);
//   return firstSum === secondSum;
// };
// const numberSort = () => {
//   isLoading(ul);
//   const fragment = document.createDocumentFragment(); // Create a document fragment
//   for (let i = 1; i <= 1e6; i++) {
//     let splittedDigits = i.toString().padStart(6, "0").split("").map(Number);
//     if (isLucky(splittedDigits)) {
//       let child = document.createElement("li");
//       child.textContent = splittedDigits.join("");
//       fragment.appendChild(child); // Append to the fragment instead of directly to the ul
//     }
//   }
//   setTimeout(() => {
//     ul.appendChild(fragment);
//   }, 1000);
// };

// btn.addEventListener("click", numberSort);

4;
// const nestedArr = (parent, content) => {
//   if (parent.length >= 5) return parent;
//   let child = '';
//   for (let i = 1; i <= parent.length + 1; i++) {
//     child += content
//   }
//   parent.push(child)
//   return nestedArr(parent, content)
// };
// btn.addEventListener("click", function () {
//     console.log(nestedArr([], 'x'))
// });
5;
// let data = {
//   2018: {
//     11: {
//       29: [1, 2, 3],
//       23: {
//         12: {
//           29: [10, 11],
//           30: [12, 13],
//           31: [14, 15],
//         },
//       },
//       30: {
//         99: {
//           97: {
//             96: {
//               100: ["!", "!"],
//             },
//           },
//         },
//       },
//     },
//     12: {
//       30: [6, 7],
//       31: [8, 9],
//     },
//   },
//   2019: {
//     12: {
//       29: [10, 11],
//       30: [12, 13],
//       31: [14, 15],
//     },
//   },
// };

// const dataFilter = (obj) => {
//   let result = [];
//   for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//       result.push(...obj[key]);
//     } else {
//       result.push(...dataFilter(obj[key]));
//     }
//   }
//   return result;
// };
// btn.addEventListener("click", function () {
//   console.log(dataFilter(data));
// });
6;
// btn.addEventListener('click', function () {})

let arr = [1,2,3,4]
for (let key in arr) console.log(key)
