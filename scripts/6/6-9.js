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
// let nn1 = ['red', 'yellow', 'purple']
// let currIndex = 0
// btn.addEventListener('click', function () {
//     let color = nn1[currIndex]
//     console.log(currIndex, nn1.length - 1)
//     if (currIndex == nn1.length - 1) {
//         currIndex = 0
//     } else {
//         currIndex++
//     }
//     div.style.background = color
// })
2
// btn.addEventListener('click', function () {
//     let [year1, month1, date1] = inp1.value.split('-')
//     let [year2, month2, date2] = inp2.value.split('-')
//     let firstDate = new Date(year1, month1, date1)
//     let secondDate = new Date(year2, month2, date2)
//     if (firstDate > secondDate) {
//         let diff = firstDate - secondDate
//         p1.textContent = (diff / 86400000) + ' days'
//     }
// })
3
// let count = 0
// lis.forEach(elem => {
//     elem.addEventListener('click', function () {
//         let child = document.createElement('span')
//         child.textContent = count
//         if (!elem.lastElementChild) {
//             elem.appendChild(child)
//             count++
//         } else {
//             pop(true)
//         }

//     })
// })
4
btn.addEventListener('click', function () {
    let lastNum = parseInt(ul.lastElementChild.textContent)
    let child = document.createElement('li')
    child.textContent = lastNum + 1
    ul.appendChild(child)
})
5
// btn.addEventListener('click', function () {})
6
// btn.addEventListener('click', function () {})