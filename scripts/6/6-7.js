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
// btn.addEventListener('click', function () {
//     let now = new Date
//     let finish = new Date(now.getFullYear() + 1, 0, 0)
//     for (let i = new Date(now.getFullYear(), 0, 1); i <= finish; i.setDate(i.getDate() + 1)) {
//         console.log(i.getDay())
//         if (i.getDay() == 0 || i.getDay() == 6) {
//             pop(false)
//             let child = document.createElement('li')
//             child.textContent = i.getFullYear() + '-' + (i.getMonth() + 1) + '-' + i.getDate()
//             ul.appendChild(child)
//         } else {

//         }
//     }
// })
2
// let dates = ['sun', 'mon', 'tue', 'wen', 'thu', 'fri', 'sat']
// btn.addEventListener('click', function () {
//     let now = new Date()
//     now.setMonth(now.getMonth() + 2)
//     now.setDate(0)
//     p1.textContent = dates[now.getDay()]
// })
3
// btn.addEventListener('click', function () {
//     let select = document.createElement('select')
//     select.id = 'sel'
//     let now = new Date()
//     let start = new Date(now.getFullYear(), now.getMonth(), 1)
//     let finish = new Date(now.getFullYear(), (now.getMonth() + 1), 0)
//     document.body.firstElementChild.appendChild(select)
//     for (start; start <= finish; start.setDate(start.getDate() + 1)) {
//         let option = document.createElement('option')
//         option.value = start.getDate()
//         option.textContent = start.getDate()
//         select.appendChild(option)
//     }

// })
4
// btn.addEventListener('click', function () {
//     let count = parseInt(inp1.value)
//     let result = ''
//     for (let i = 1; i <= count; i++) {
//         result += '0'
//     }
//     p1.textContent = result
// })
5
// btn.addEventListener('click', function () {})
6
// btn.addEventListener('click', function () {})