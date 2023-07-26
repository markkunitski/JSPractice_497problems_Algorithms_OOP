let inp1 = document.getElementById('in1');
let inp2 = document.getElementById('in2');
let inp3 = document.getElementById('in3');
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
let table = document.querySelector('#table')
1
// lis.forEach(elem=>{
//     elem.addEventListener('click', function(){
//         elem.parentNode.removeChild(elem)
//     })
// })
2
// inp1.addEventListener('blur', function () {
//     let value = inp1.value
//     let child = document.createElement('li')
//     child.textContent = value
//     ul.appendChild(child)
// })
3
// btn.addEventListener('click', function () {
//     let node = document.querySelector('#table tbody')
//     let row = document.createElement('tr')
//     inps.forEach(elem=>{
//         let newElem = document.createElement('th')
//         newElem.textContent = elem.value
//         row.appendChild(newElem)
//     })
//     console.log(table)
//     node.appendChild(row)
// })
4
btn.addEventListener('click', function () {
    let year = inp1.value
    for (let i = 0; i <= 11; i++) {
        let date = new Date(year, i, 13)
        if (date.getDay() == 5) {
            let child = document.createElement('li')

            child.textContent = year + '-' + (i + 1) + '-' + '13'
            ul.appendChild(child)
        }
    }
})
5
// btn.addEventListener('click', function () {})
6
// btn.addEventListener('click', function () {})