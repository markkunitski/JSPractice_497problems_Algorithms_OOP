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
// let clickCount = 0
// btn.addEventListener('click', function () {
//     if (clickCount === 0) {
//         clickCount++
//         ul.innerHTML = ''
//         for (let i = 1; i <= 5; i++) {
//             let child = document.createElement('li')
//             let num = Math.floor(Math.random() * 100)
//             child.textContent = num
//             ul.appendChild(child)
//         }
//     } else {
//         let ulLis = document.querySelectorAll('ul li')
//         let biggest
//         ulLis.forEach(elem => {
//             if (!biggest?.textContent) {
//                 biggest = elem
//             } else if (elem.textContent >= biggest.textContent) {
//                 biggest = elem
//             }

//         })
//         if (ul.childElementCount) {
//             ul.removeChild(biggest)
//         } else {
//             pop(true)
//         }
//     }
// })

2
// btn.addEventListener('click', function () {
//     let words = inp1.value.split(' ')
//     let edited = words.map(elem => {
//         let child = document.createElement('span')
//         child.textContent = elem
//         return child
//     })
//     console.log(edited)
//     edited.forEach(elem=>{
//         p1.appendChild(elem)
//     })

// })
3
// btn.addEventListener('click', function () {
//     let text = inp1.value.split(' ')
//     let filtered = text.map(elem => {
//         if (elem.includes('/')) {
//             return `<span>${elem}</span>`
//         } else {
//             return elem
//         }
//     })
//     p1.innerHTML = ''
//     filtered.forEach(elem => {
//         p1.innerHTML += elem
//     })
// })

4
// btn.addEventListener('click', function () {
//     let row = document.createElement('tr')
//     for (let i = 1; i <= 2; i++) {
//         let body = document.createElement('th')
//         if (i === 1) {
//             body.textContent = inp1.value
//             row.appendChild(body)
//         } else {
//             let [year, month, day] = inp1.value.split('-')
//             let date = new Date(year, month - 1, day)
//             let dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
//             body.textContent = dayNames[date.getDay()]
//             row.appendChild(body)
//         }
//     }
//     let table = document.createElement('table')
//     table.appendChild(row)
//     document.body.firstElementChild.appendChild(table)
// })
5
btn.addEventListener('click', function () {
    let result = []
    for (let i = 1; i <= 3; i++) {
        let child = []
        for (let j = 1; j <= 3; j++) {
            child.push(j)
        }
        let parent = []
        for (let k = 1; k <= 3; k++) {
            parent.push(child)
        }
        result.push(parent)
    }
    console.log(result)
})
const child = Array.from({ length: 3 }, (_, index) => index + 1);
const parent = Array.from({ length: 3 }, () => child);
const result = Array.from({ length: 3 }, () => parent);
const test = Array.from([1, 2, 3, 4], (elem, index) => elem + ` index${index}`)

6
// btn.addEventListener('click', function () {})

