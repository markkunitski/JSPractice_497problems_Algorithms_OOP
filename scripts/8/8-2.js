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
// function timesANDpercent(elem, arr) {
//   let times = arr.filter((word) => word == elem).length;
//   let percent = (times / arr.length) * 100;
//   return [times, Math.round(percent)];
// }
// function trimANDclear(arr) {
//   let filtered = arr.filter((elem) => elem.length);
//   let result = filtered.map((elem) => {
//     let lastLetter = elem[elem.length - 1];
//     if (lastLetter.toUpperCase() == lastLetter.toLowerCase()) {
//       elem = elem.slice(0, elem.length - 1);
//     }
//     return elem;
//   });
//   return result;
// }
// area.addEventListener("blur", function () {
//   let data = area.value.split(" ");
//   table.innerHTML = "";
//   let cashed = [];
//   let filteredData = trimANDclear(data);
//   filteredData.forEach((elem) => {
//     if (cashed.includes(elem)) return;
//     let row = document.createElement("tr");
//     let nameElem = document.createElement("td");
//     let timesElem = document.createElement("td");
//     let percentageElem = document.createElement("td");
//     let [times, percent] = timesANDpercent(elem, filteredData);
//     nameElem.textContent = elem;
//     timesElem.textContent = times;
//     percentageElem.textContent = percent + "%";
//     row.append(nameElem, timesElem, percentageElem);
//     table.appendChild(row);
//     cashed.push(elem);
//   });
// });
2;
// function addList() {
//   ul.innerHTML = "";
//   let temp = [];
//   for (let i = 1; i <= 10; i++) {
//     let value = Math.floor(Math.random() * 101);
//     let child = document.createElement("li");
//     child.textContent = value;
//     temp.push(child);
//   }
//   addSorted(temp)
// }
// function addSorted(data) {
//   data.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));
//   data.forEach((elem) => ul.appendChild(elem));
// }
// btn.addEventListener("click", addList);
3;
// let data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function sumArr(arr) {
//   let result = [];
//   arr.map(String);
//   arr.forEach((elem) => {
//     result.push(elem.reduce((acc, curr) => acc + curr, ""));
//   });
//   console.log(result) ;
// }
// btn.addEventListener("click", () => sumArr(data));
4;
function f4(parent) {
  if (parent.length >= 5) return parent;
  let child = "";
  for (let i = 1; i <= parent.length + 1; i++) {
    child += "xx";
  }
  parent.push(child);
  return f4(parent);
}
btn.addEventListener("click", () => console.log(f4([])));
5;
// btn.addEventListener('click', function () {})
6;
// btn.addEventListener('click', function () {})
