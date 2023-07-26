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
//     let arr = inp1.value.split(' ')
//     let filteredArr = []
//     arr.forEach((elem, index) => {
//         if (filteredArr[filteredArr.length - 1] != elem) {
//             filteredArr.push(elem)
//         }

//     })
//     p1.textContent = filteredArr.join(' ')
// })
2
// function nlength(len, start, finish) {
//     let result = []
//     let times = (finish - start) + 1
//     console.log(times)
//     for (let i = 1; i <= len; i++) {
//         result.push(Math.floor(Math.random() * times) + start)
//     }
//     return result
// }
// btn.addEventListener('click', function () {
//     console.log(nlength(6, 10, 15))
// })
3
let data = [
    {
        text: '111',
        href: '1.html',
    },
    {
        text: '222',
        href: '2.html',
    },
    {
        text: '333',
        href: '3.html',
    },
]
// btn.addEventListener('click', function () {
//     data.forEach(elem => {
//         let link = document.createElement('a')
//         link.href = elem.href
//         link.textContent = elem.text
//         div.insertAdjacentElement('afterend', link)
//     })
// })
4
// btn.addEventListener('click', function () {})
5
// btn.addEventListener('click', function () {})
6
// btn.addEventListener('click', function () {})