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
let table = document.querySelector("#table");
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
// btn.addEventListener("click", function () {
//     lis.forEach(elem=>{
//         let child = document.createElement('a')
//         child.href = '#'
//         child.textContent = 'ADD'
//         elem.append(child)
//     })
//     ul.addEventListener('click', (e)=>{
//         e.target.closest('li').style.color = 'red'
//     })
// });
2;
// btn.addEventListener("click", function () {
//   let arr = inp1.value.split(" ");
//   let fragment = document.createDocumentFragment();
//   arr.forEach((elem) => {
//     let span = document.createElement("span");
//     span.textContent = elem + " ";
//     fragment.appendChild(span);
//   });
//   p1.innerHTML = "";
//   p1.addEventListener("click", (e) => {
//     let curr = e.target.textContent;
//     e.target.innerHTML = curr.split("").reverse().join("");
//   });
//   p1.appendChild(fragment);
// });
3;
// let users = [
//   { id: 1, name: "user1", surn: "surn1", age: 30 },
//   { id: 2, name: "user2", surn: "surn2", age: 31 },
//   { id: 3, name: "user3", surn: "surn3", age: 32 },
// ];
// btn.addEventListener("click", function () {
//   let colNames = new Set();
//   let nameRow = document.createElement("tr");
//   users.forEach((elem) => {
//     let row = document.createElement("tr");
//     for (let key in elem) {
//       colNames.add(key);
//       let value = elem[key];
//       let rowElem = document.createElement("td");
//       rowElem.textContent = value;
//       row.appendChild(rowElem);
//     }
//     table.appendChild(row);
//   });
//   colNames.forEach((elem) => {
//     let rowNameElem = document.createElement("td");
//     rowNameElem.textContent = elem;
//     nameRow.appendChild(rowNameElem);
//   });
//   table.prepend(nameRow);
// });
4;
// const nestedArr = (parent) => {
//   if (parent.length == 5) {
//     return [...parent, ...parent.slice(0, 4).reverse()];
//   }
//   let child = "";
//   for (let i = 1; i <= parent.length + 1; i++) {
//     child += String(i);
//   }
//   parent.push(child);
//   return nestedArr(parent);
// };
// btn.addEventListener("click", function () {
//   console.log(nestedArr([]));
// });
5;
// btn.addEventListener('click', function () {})
6;
// btn.addEventListener('click', function () {})
