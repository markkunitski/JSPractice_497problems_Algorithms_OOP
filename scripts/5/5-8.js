let inp1 = document.getElementById('in1');
let inp2 = document.getElementById('in2');
let inps = document.querySelectorAll('input')
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
let lis = document.querySelectorAll('ul li')
// btn.addEventListener('click', function () {})
1
// inps.forEach(elem => {
//     elem.addEventListener('blur', function(){
//         this.value = parseInt(this.value) ** 2
//     })
// })
2
// let nn2 = [1, 2, 3, 4]
// btn.addEventListener('click', function () {
//     p1.innerHTML = ''
//     let newIndex = Math.floor(Math.random() * nn2.length)
//     p1.textContent = nn2[newIndex]
// })
3
// inp1.addEventListener('blur', function () {
//     let arr = this.value.split(', ')
//     inp1.value = arr.reduce((returned, elem) => parseInt(returned) + parseInt(elem))
// })

4
// function deviders(num) {
//     let result = []
//     let root = num ** 0.5
//     for (let i = 2; i < root; i++) {
//         if (num % i === 0) {
//             result.push(i, num / i)
//         }
//     }
//     if (Number.isInteger(root)) result.push(root)
//     result.push(1, num)
//     return result
// }
// btn.addEventListener('click', function () {
//     let num1 = parseInt(inp1.value)
//     let num2 = parseInt(inp2.value)
//     let num1D = deviders(num1)
//     let num2D = deviders(num2)
//     let result = []
//     num1D.forEach(elem => {
//         if (num2D.includes(elem)) result.push(elem)
//     })
//     p1.innerHTML = result.sort((a, b) => a - b)
// })

5
// btn.addEventListener('click', function () {
//     let arr = inp1.value.split(', ')
//     console.log(arr.includes('13'))
//     arr.includes('13') ? p1.innerHTML = 'true' : p1.innerHTML = 'false' 
// })
6
btn.addEventListener('click', function () {
    let num = parseInt(inp1.value)
    let sum = 0
    for (let i = 1; i <= 6; i++) {
        console.log(i)
        let last = num % 10
        if (i <= 3) {
            sum += last
        } else {
            sum -= last
        }
        num = ~~(num / 10)
    }
    sum === 0 ? alert(true) : alert(false)
})