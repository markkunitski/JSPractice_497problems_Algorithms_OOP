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
// btn.addEventListener('click', function () {})
1
// btn.addEventListener('click', function () {
//     let [year, month, day] = inp1.value.split('-')
//     let target = new Date(year, 1, 29)
//     target.getDate() === 29 ? p1.innerHTML = 'true' : p1.innerHTML = 'false'
// })
2
// btn.addEventListener('click', function () {
//     p1.innerHTML = Math.floor(Math.random() * 9) + 1
// })
3
// btn.addEventListener('click', function () {
//     let [year, month, day] = inp1.value.split('-')
//     let result = new Date(year, month, day)
//     p1.innerHTML = result.getDay()
// })
4
// btn.addEventListener('click', function () {
//     let css = getComputedStyle(div)
//     let width = css.width
//     let height = css.height
//     div.style.width = String(parseInt(width) * 2) + 'px'
//     div.style.height = String(parseInt(height) * 2) + 'px'
// })
5
as.forEach(elem=>{
    elem.addEventListener('mouseenter', function(){
        this.setAttribute('title', `${this.href}`)
    })
})
