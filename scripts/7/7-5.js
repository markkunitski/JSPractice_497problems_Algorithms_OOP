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

// btn.addEventListener("click", function (e) {
//   // Calculate the height of the entire document (page) including any overflow
//   const scrollHeight = Math.max(
//     document.documentElement.scrollHeight,
//     document.body.scrollHeight
//   );
//   console.log(document.body.scrollHeight);
//   // Scroll to the bottom of the page
//   window.scrollTo({ top: 54000, left: 0, behavior: "smooth" });
// });
// document.body.addEventListener("scroll", (event) => {
//   p1.textContent = `scroll: ${document.body.scrollTop}`;
// });

// function logScrollPositions() {
//   console.log("Scroll X:", window.scrollX);
//   console.log("Scroll Y:", window.scrollY);
// }

// // Attach the event listener to the 'scroll' event
// window.addEventListener("scroll", logScrollPositions);

2;
// btn.addEventListener("click", function () {
//   divs.forEach((div, index) => {
//     div.classList.add("dnone");
//     btns[index].addEventListener('click', function(){
//         div.classList.toggle('dnone')
//     })
//   });
// });

3;

// const alfabet = {
//     а: 'a',
//     б: 'b',
//     в: 'v',
//     г: 'g',
//     д: 'd',
//     е: 'e',
//     ё: 'e',
//     ж: 'j',
//     з: 'z',
//     и: 'i',
//     й: 'i',
//     к: 'k',
//     л: 'l',
//     м: 'm',
//     н: 'n',
//     о: 'o',
//     п: 'p',
//     р: 'r',
//     с: 's',
//     т: 't',
//     у: 'u',
//     ф: 'f',
//     х: 'h',
//     ц: 'c',
//     ч: 'cz',
//     ш: 'sz',
//     щ: 'szb',
//     ъ: 'b',
//     ы: 'IB',
//     ь: 'b',
//     э: 'je',
//     ю: 'u',
//     я: 'ya'
//   };
// btn.addEventListener('click', function () {
//     const arr = inp1.value.split('')
//     let filteredArr = []
//     arr.forEach(elem=>{
//         if (alfabet[elem]) {
//             filteredArr.push(alfabet[elem])
//         } else {
//             filteredArr.push(elem)
//         }
//     })
//     p1.textContent = filteredArr.join('')
// })
4;
// const reversedX = (parent, content) => {
//   if (parent.length >= 5) return parent;
//   let child = [];
//   for (let i = 1; i <= parent.length + 1; i++) {
//         child.push(content)
//   }
//   parent = [child, ...parent]
//   return reversedX(parent, content)
// };
// btn.addEventListener("click", function () {
//     console.log(reversedX([], 'x'))
// });
5;
btn.addEventListener('click', function () {
    
})
6;
// btn.addEventListener('click', function () {})
