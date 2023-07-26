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
let lists = document.querySelectorAll("ul li");
let area = document.querySelector("#area");
let ul = document.querySelector(".ulclass");
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
// Select the parent element to observe for changes
const parentElement = ul;

// Create a new MutationObserver instance
const observer = new MutationObserver((events) => {
  lists = document.querySelectorAll("ul li");
  console.log(events);
});
// Start observing the parent element with the specified configuration
observer.observe(parentElement, { childList: true });
btn.addEventListener("click", function () {
  let num = inp1.value;
  lists.forEach((elem) => {
    if (elem.textContent == num) {
      try {
        ul.removeChild(elem);
      } catch (err) {
        console.log(err);
      }
    }
  });
});

2;
// btn.addEventListener('click', function () {
//     for (let i = 0; i <= 11; i++) {
//         let date = new Date(inp1.value, i, 13)
//         if (date.getDay() == 5) {
//             let child = document.createElement('li')
//             child.textContent = inp1.value + '-' + (i + 1) + '-' + '13'
//             ul.appendChild(child)
//         }
//     }
// })
3;
// let languages = ['js', 'c', 'cpp', 'py']
// function addChecks() {
//     let arr = []
//     for (let elem of languages) {
//         let check = document.createElement('input')
//         let name = document.createElement('span')
//         check.value = elem
//         check.type = 'checkbox'
//         name.textContent = elem
//         check.addEventListener('change', function (event) {
//             let span = document.createElement('span')
//             span.textContent = check.value
//             span.id = check.value
//             if (event.target.checked) {
//                 arr.push(check.value)
//                 console.log(arr)
//             } else {
//                 let removable = arr.indexOf(check.value)
//                 arr = [...arr.slice(0, removable), ...arr.slice(removable + 1)]
//                 console.log(arr)

//             }
//             div.innerHTML = arr.join(', ')
//         })
//         document.body.firstElementChild.appendChild(name)
//         document.body.firstElementChild.appendChild(check)
//     }
//     div.append(arr)
// }
// btn.addEventListener('click', function () {
//     addChecks()
// })

4;
// function nestedArrs(symbol, count, arr) {

//     if (arr.length >= 5) return arr
//     let child = []
//     for (let i = 1; i <= count; i++) {
//         child.push(symbol)

//     }
//     arr.push(child)
//     return nestedArrs(symbol, count + 1, arr)
// }

5;
let nestedp = document.querySelectorAll("#div p");
btn.addEventListener("click", function () {
  let result = [];
  nestedp.forEach((elem) => {
    result.push(String(elem.textContent));
  });
  console.log(result);
});
6;
// btn.addEventListener('click', function () {})

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// function search(start, end, elem, arr) {
//     let middleindex = Math.floor((start + end) / 2)
//     if (arr[middleindex] === elem) {
//         return middleindex
//     }
//     console.log(middleindex + ' ELEM')

//     if (arr[middleindex] > elem) {
//         return search(start, middleindex - 1, elem, arr)
//     } else {
//         return search(middleindex + 1, end, elem, arr)
//     }
// }
// console.log(search(0, arr.length, 1, arr))
