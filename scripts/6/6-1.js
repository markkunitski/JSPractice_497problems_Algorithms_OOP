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
// let nn1 = [1,2,3,4,5]
// btn.addEventListener('click', function () {
//     nn1.forEach(elem=>{
//         let child = document.createElement('li')
//         child.innerHTML = elem
//         ul.appendChild(child)
//     })
// })
2
// btn.addEventListener('click', function () {
//     for (let i = 1; i<=10; i++){
//         let child = document.createElement('li')
//         child.innerHTML = i
//         ul.appendChild(child)
//     }
// })
4
// let count = 1
// btn.addEventListener('click', function () {
//     let child = document.createElement('li')
//     child.innerHTML = String(count) + ' !'
//     count++
//     ul.appendChild(child)
// })
5
// btn.addEventListener('click', function () {
//     if (ul.lastElementChild) {
//         ul.lastElementChild.remove();
//     }
// });

6
btn.addEventListener('click', function () {
    let elems = ul.getElementsByTagName('li')
    let index = Math.floor(Math.random() * elems.length)
    ul.removeChild(elems[index])
})
// btn.addEventListener('click', function () {})
// btn.addEventListener('click', function () {})