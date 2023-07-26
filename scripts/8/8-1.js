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
let table = document.querySelector("#table");
let btns = document.querySelectorAll(".fordivs");
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
let nn1 = [[1, 2, 3], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2, 3, 4]];

// function arrSort(data) {
//   let test = data;
//   for (let i = 0; i < test.length; i++) {
//     let lowestIndex = i;
//     for (let j = i + 1; j < test.length; j++) {
//       if (test[j].length < test[lowestIndex].length) lowestIndex = j;
//     }
//     let tempValue = data[i]
//     data[i] = data[lowestIndex]
//     data[lowestIndex] = tempValue
//   }
//   return data;
// }
// btn.addEventListener("click", function () {
//   console.log(arrSort(nn1));
// });
2;
// let data = [
//   [2, 4, 5],
//   [1, 2, 3],
//   [0, 1, 1],
//   [5, 7, 1],
// ];
// btn.addEventListener("click", function () {
//   data.sort((a, b) => a.reduce((acc, curr) => acc + curr, 0) - b.reduce((acc, curr) => acc + curr, 0));
//   console.log(data);
// });

3;
// function drawX() {
//   p1.innerHTML = "";
//   for (let i = 1; i <= 5; i++) {
//     console.log("x".padStart(i, "x"));
//   }
// }
// btn.addEventListener("click", function () {
//   drawX();
// });
4;
5;
// btn.addEventListener('click', function () {})
6;
// btn.addEventListener('click', function () {})
