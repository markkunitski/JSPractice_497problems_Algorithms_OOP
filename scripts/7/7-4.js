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
let root = document.querySelector("#root");
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
// btn.addEventListener('click', function () {
//     let now = new Date()
//     let first = new Date(now.getFullYear(), now.getMonth(), 1)
//     let last = new Date(now.getFullYear(), now.getMonth() + 1, 0)
//     let day = first.getDate()
//     for (day; day <= last.getDate(); day++) {
//         let child = document.createElement('li')
//         first.setDate(day)
//         child.textContent = first.getDate()
//         if (day == now.getDate()) {
//             child.style.color = 'red'
//         }
//         if (first.getDay() == 6 || first.getDay() == 0) {
//             child.style.color = 'teal'
//         }
//         ul.appendChild(child)
//     }
// })

2;
// function separate(parent) {
//     parent.innerHTML = parent.textContent
//         .split(' ')
//         .map((word) => `<span>${word}</span>`)
//         .join(' ');
// }
// separate(p1)
// p1.addEventListener('click', function (e) {
//     e.target.style.color = 'red'
// })
// 3
// btn.addEventListener('click', function () {
//     let num = inp1.value
//     if (num.length % 2 != 0) {
//         console.log('error')
//         return
//     }
//     let sum1 = 0
//     let sum2 = 0
//     for (let i = 0; i < num.length - (1 + i); i++) {
//         let cur = num[i]
//         let last = num[num.length - (1 + i)]
//         sum1 += parseInt(cur)
//         sum2 += parseInt(last)
//     }
//     console.log([sum1, sum2])
//     console.log(sum1 == sum2)
// })
4;
// inp1.addEventListener('input', (e) => {
//     if (e.target.value.length == 4) {
//         inp1.style.background = ''
//     }
//     if (e.target.value.length > 5) {
//         inp1.style.background = 'lightCoral'
//         let str = e.target.value.split('')
//         console.log(str.length)
//         str.pop()
//         inp1.value = str.join('')
//     }

// })
5;
// function countDown() {
//   let value = parseInt(inp1.value);
//   let interval = setInterval(() => {
//     if (value) {
//       p1.textContent = value;
//       value--;
//     } else {
//       clearInterval(interval);
//       p1.textContent = 0;
//     }
//   }, 1000);
// }
// btn.addEventListener("click", function () {
//   countDown();
// });
6;
function nestedArr(parent) {
  if (parent.length > 5) return parent;
  let child = [];
  for (let i = 1; i <= parent.length + 1; i++) {
    child.push(i);
  }
  parent.push(child);
  return nestedArr(parent);
}
btn.addEventListener("click", function () {
  console.log(nestedArr([]));
});
