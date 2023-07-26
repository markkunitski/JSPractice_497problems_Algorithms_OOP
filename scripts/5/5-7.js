let inp1 = document.getElementById('in1');
let inp2 = document.getElementById('in2');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let btn = document.getElementById('btn');
let pars = document.querySelectorAll('p');
let div = document.getElementById('div');
let ps = document.querySelectorAll('p');
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let as = document.querySelectorAll('a');
let lis = document.querySelectorAll('ul li')
// btn.addEventListener('click', function () {})



1
// btn.addEventListener('click', function () {
//     let sum = 0
//     lis.forEach(elem => {
//         sum += parseInt(elem.innerHTML)
//     })
//     p1.innerHTML = sum
// })
// function km(start, margin) {
//     let diff = margin
//     for (let i = 1; i <= 14; i++) {
//         let result = start + margin
//         margin = margin + diff
//         console.log(result + ` day${i}`)
//     }
// }
function mins(start, margin) {
    let diff = margin
    for (let i = 1; i <= 28; i++) {
        let result = start + margin
        margin = margin + diff
        console.log(result + ` day${i}`)
    }
}
mins(30, 2)
// btn.addEventListener('click', function () {
//     lis.forEach(elem => {
//         elem.innerHTML = parseInt(elem.textContent) + 1
//     })
// })
3
// btn.addEventListener('click', function () {
//     let deviders = []
//     let num = parseInt(inp1.value)
//     let root = num ** 0.5
//     for (let i = 2; i < root; i++) {
//         if (num % i === 0) {
//             deviders.push(i, num / i)
//         }
//     }
//     if (Number.isInteger(root)) deviders.push(root)
//     deviders.sort((a, b) => a - b)
//     p1.innerHTML = deviders.join(', ')
// })
4
// ps.forEach(elem => {
//     elem.addEventListener('click', function () {
//         let reversedText = elem.innerHTML.split('').reverse().join('');
//         elem.innerHTML = reversedText;
//         console.log(reversedText)
//     });
// });
5
// btn.addEventListener('click', function () {
//     let start = parseInt(inp1.value)
//     let sum = 0
//     for (let i = 1; i <= 6; i++) {
//         let last = start % 10
//         if (i <= 3) {
//             sum += last
//         } else {
//             sum -= last
//         }
//         start = ~~(start / 10)
//     }
//     sum === 0 ? console.log('true') : console.log('false')
// })


