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
// btn.addEventListener('click', function () {
//     let text = inp1.value
//     let lastLiText = ul.lastElementChild.textContent
//     if (text.length > lastLiText.length) {
//         let child = document.createElement('li')
//         child.textContent = text
//         ul.appendChild(child)
//     } else{
//         pop(true)
//     }
// })
2
// btn.addEventListener('click', function () {
//     if (document.querySelector('.nn2')) {
//         let targets = document.querySelectorAll('.even')
//         targets.forEach((elem, index) => {
//             elem.style.background = 'lightGray'
//         })
//     } else {
//         let table = document.createElement('table')
//         table.classList.add('nn2')
//         for (let i = 1; i <= 8; i++) {
//             let row = document.createElement('tr')
//             for (let j = 1; j <= 8; j++) {
//                 let child = document.createElement('th')
//                 child.textContent = j
//                 if (j % 2 === 0) {
//                     child.classList.add('even')
//                 }
//                 row.appendChild(child)
//             }
//             table.appendChild(row)
//         }
//         document.body.firstElementChild.appendChild(table)
//     }

// })
3
// btn.addEventListener('click', function () {
//     let table = document.createElement('table')

//     for (let num = 1; num <= 9; num++) {
//         let row = document.createElement('tr')
//         let th = document.createElement('th')

//         for (let multiplier = 2; multiplier <= 9; multiplier++) {
//             let child = document.createElement('span')
//             child.textContent = `${num + ' * ' + multiplier + ' = ' + (num * multiplier)}`
//             child.style.display = 'flex'
//             th.appendChild(child)
//         }
//         row.appendChild(th)
//         table.appendChild(row)
//     }
//     document.body.firstElementChild.appendChild(table)
// })
4
// btn.addEventListener('click', function () {
//     let words = area.value.split(' ')
//     let searched = inp1.value
//     let filtered = words.filter(elem => {
//         elem.trim()
//         let toSearchedLen = ''
//         for (let i = 0; i < searched.length; i++) {
//             toSearchedLen += elem[i]
//         }
//         return toSearchedLen == searched
//     })
//     console.log(filtered)
// })
5
// btn.addEventListener('click', function () {

// })
6
// btn.addEventListener('click', function () {})
