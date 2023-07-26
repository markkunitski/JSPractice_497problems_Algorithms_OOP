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
// const createX = (arr) => {
//   if (arr.length >= 3) {
//     return [...arr, ...arr.slice(0, 2).reverse()];
//   }
//   let child = "-";
//   for (let i = 1; i <= arr.length + 1; i++) {
//     child += "x";
//   }
//   arr.push(child);
//   return createX(arr);
// };
// const nn2 = () => {
//   let value = 11;
//   let result = [];
//   for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//       result.push(value);
//       value++;
//     }
//     value += 7;
//   }
//   return result.join(' ')
// };
// btn.addEventListener("click", function () {
//   console.log(nn2());
// });
2;
let data = [
  {
    name: "mleko",
    price: "5",
  },
  {
    name: "chleb",
    price: "2",
  },
  {
    name: "mieso",
    price: "20",
  },
  {
    name: "woda",
    price: "3",
  },
  {
    name: "jablka",
    price: "10",
  },
];
// btn.addEventListener("click", function () {
//   let parent = document.querySelector("#nn3");
//   parent.innerHTML = "";
//   parent.style.display = "flex";
//   let paragraphText = [];
//   data.forEach((elem) => {
//     let button = document.createElement("button");
//     button.textContent = elem.name + " " + elem.price + "$";
//     button.setAttribute("data-price", elem.price);
//     parent.appendChild(button);
//   });
//   parent.addEventListener("click", (e) => {
//     if (e.target == parent) return;
//     e.target.classList.toggle("selected");
//     if (paragraphText.includes(e.target.dataset.price)) {
//       let removeInsex = paragraphText.indexOf(e.target.dataset.price);
//       paragraphText.splice(removeInsex, 1);
//     } else {
//       paragraphText.push(e.target.dataset.price);
//     }
//     p1.textContent = paragraphText
//       .map(Number)
//       .reduce((acc, curr) => acc + curr, 0);
//   });
// });
// const parent = document.querySelector("#nn3");

// btn.addEventListener("click", () => {
//   let parent = document.querySelector("#nn3");
//   parent.innerHTML = data
//     .map(
//       (elem) => `
//                 <button data-price="${elem.price}">
//                     ${elem.name} ${elem.price}$
//                 </button>`
//     )
//     .join("");
//   parent.style.display = "flex";
// });

// parent.addEventListener("click", (e) => {
//   if (!e.target.dataset.price) return;
//   e.target.classList.toggle("selected");
//   const selectedButtons = parent.querySelectorAll(".selected");
//   const paragraphText = Array.from(selectedButtons).map((button) =>
//     Number(button.dataset.price)
//   );
//   p1.textContent = paragraphText.reduce((acc, curr) => acc + curr, 0);
// });
3;
// btn.addEventListener('click', function () {
//     let elems = document.querySelectorAll('table td')
//     elems[Math.floor(elems.length/2)].style.background = 'teal'
// })
4;
btn.addEventListener('click', function () {
     
})
5;
// btn.addEventListener('click', function () {})
6;
// btn.addEventListener('click', function () {})
