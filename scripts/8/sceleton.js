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
let table = document.querySelector('#table')
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
btn.addEventListener("click", function () {
    
});
2;
// btn.addEventListener('click', function () {})
3;
// btn.addEventListener('click', function () {})
4;
// btn.addEventListener('click', function () {})
5;
// btn.addEventListener('click', function () {})
6;
// btn.addEventListener('click', function () {})
