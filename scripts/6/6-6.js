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
let area = document.querySelector('.area')
let ul = document.querySelector('.ulclass')
function pop(state) {
    let child = document.createElement('div')
    child.classList.add('pop', `${state}`)
    document.body.firstElementChild.appendChild(child)
    setTimeout(() => {
        let timed = document.querySelectorAll('.pop')
        timed.forEach(elem => elem.remove())
        console.log(timed)

    }, 1000);
}
1
// let nn1 = [1, 2, 3, 4, 5, 6]
// btn.addEventListener('click', function () {
//     let index = parseInt(inp1.value)
//     if (nn1[index]) p1.textContent = nn1[index]
// })
2

// btn.addEventListener('click', function () {
//     let color = inp1.value.trim().toLowerCase()
//     if (color){
//         pop(false)
//         inp1.style.borderColor = `${color}`
//     } else {
//         pop(true)
//     }

// })
3
// btn.addEventListener('click', function () {
//     let bodies = document.querySelectorAll('table th')
//     bodies.forEach(elem => {
//         elem.addEventListener('click', changeColor)
//     })
// })
// function changeColor() {
//     pop(false)
//     let colors = ['red', 'teal', 'purple']
//     console.log(this)
//     this.style.background = colors[Math.floor(Math.random() * colors.length)]
// }
4
area.addEventListener('keydown', (event) => {
    let firstKey = event.shiftKey
    if (event.altKey && firstKey) div.textContent = area.value
    console.log(firstKey + ' key')
    console.log(event.keyCode)
})
5
// btn.addEventListener('click', function () {})
6
// btn.addEventListener('click', function () {})