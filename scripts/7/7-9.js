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
let a3 = document.querySelector("#a3");
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
// inp1.addEventListener("blur", function () {
//   let data = p1.textContent
//   if (data.includes(inp1.value)) {
//     return;
//   } else {
//     p1.textContent = data + `${" " + inp1.value}`;
//   }
// });

2;
// btn.addEventListener("click", function () {
//   let result = "";
//   let value = 1;
//   for (let i = 1; i <= 5; i++) {
//     result += `-${value}`;
//     value += 11;
//   }
//   result += '-'
//   console.log(result)
// });
3;
// btn.addEventListener("click", function () {
//   let start = 12;
//   let result = [];
//   for (let i = 1; i <= 5; i++) {
//     if (start % 10 == 0) {
//       start -= 10;
//     }
//     result.push(start);
//     start += 22;
//   }
//   console.log(result);
// });
4;
// btn.addEventListener('click', function () {
//   let result = []
//   let data = document.querySelectorAll('a')
//   data.forEach(elem=>{
//     let obj = {
//       text: `${elem.textContent}`,
//       href: `${elem.href}`,
//     }
//     result.push(obj)
//   })
//   console.log(result) 
// })
5;
btn.addEventListener('click', function () {
  
})
6;
// btn.addEventListener('click', function () {})
