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
let ul = document.querySelector('ul')
// btn.addEventListener('click', function () {})
1
// btn.addEventListener('click', function () {
//     let num = parseInt(inp1.value)
//     num % 2 === 0 ? inp1.style.borderColor = 'teal' : inp1.style.borderColor = 'red'
// })
2
// let nn2 = [100, 200, 300, 400, 500]
// btn.addEventListener('click', function () {
//     let newNum = Math.floor(Math.random() * 6)
//     console.log([...nn2, newNum])
// })
3
// let nn3 = ['red', 'teal', 'gray', 'purple']
// ps.forEach(elem => {
//     elem.addEventListener('click', function () {
//         let colorIndex = Math.floor(Math.random() * 4)
//         elem.style.color = nn3[colorIndex]
//     })
// })
4
// let nn2 = [10, 1, 2, 3, 4, 5, 1, 11, 111, 12]
// btn.addEventListener('click', function () {
//     let evens = []
//     nn2.forEach(elem => {
//         if (elem % 2 === 0) evens.push(elem)
//     })
//     div.textContent = evens.join(', ')
// })
5
// btn.addEventListener('click', function () {
//     let now = new Date()
//     let newYear = new Date(now.getFullYear() + 1, 0, 1)
//     let diff = (newYear - now) / 86400000
//     p1.textContent = Math.round(diff)
// })
6
btn.addEventListener('click', function () {
    let now = new Date()
    let currentYear = now.getFullYear()
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        let child = document.createElement('li')
        child.textContent = i
        ul.appendChild(child)
    }
})