let inp1 = document.getElementById('in1');
let inp2 = document.getElementById('in2');
let inps = document.querySelectorAll('input')
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let btn = document.getElementById('btn');
let div = document.getElementById('div');
let ps = document.querySelectorAll('p');
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let as = document.querySelectorAll('a');
let lis = document.querySelectorAll('ul li')
let area = document.querySelector('#area')
let ul = document.querySelector('.ulclass')
// btn.addEventListener('click', function () {})
1
// let count = 0
// btn.addEventListener('click', function () {
//     let colors = ['red', 'teal']
//     if (count === 0) {
//         p1.style.color = colors[0]
//         count++
//     } else {
//         p1.style.color = colors[1]
//         count--
//     }

// })
2
// lis.forEach((elem, index) => {
//     elem.addEventListener('click', function indexadd() {
//         this.textContent = this.textContent + ` ${index + 1 + ' index'}`
//         elem.removeEventListener('click', indexadd)
//     })
// })
3
// lis.forEach(elem => {
//     elem.addEventListener('click', (e) => {
//         if (e.ctrlKey) {
//             elem.parentNode.removeChild(elem);
//         }
//     });
// });
4

// btn.addEventListener('click', function () {
//     let interval = setInterval(function () {
//         p1.textContent = parseInt(p1.textContent) + 1
//     }, 1000)

// })
5
btn.addEventListener('click', function () {
    let [year, month, day] = inp1.value.split('-')
    let providedDate = new Date(year, month, day)
    let now = new Date()
    let currentYear = now.getFullYear()
    if (currentYear != year) {
        p1.textContent = 'not that year'
        return
    } else {
        now > providedDate ? p1.textContent = 'past' : p1.textContent = 'future'
    }
})
6
// btn.addEventListener('click', function () {})