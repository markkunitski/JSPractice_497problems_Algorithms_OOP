let inp1 = document.getElementById('in1')
let inp2 = document.getElementById('in2')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let btn = document.getElementById('btn')
let pars = document.querySelectorAll('p')
let div = document.getElementById('div')
function factorial(num) {
    if (num == 1) return 1
    return num * factorial(num - 1)
}
// btn.addEventListener('click', function(){
//     p1.innerHTML = factorial(parseInt(inp1.value))
// })
// btn.addEventListener('click', function () {
//     inp1.value > inp2.value ? p1.innerHTML = inp1.value : p1.innerHTML = inp2.value

// })
// btn.addEventListener('click', () => {
//     let sum = 0;
//         (function numSum(num) {
//             while (num) {
//                 sum += num % 10;
//                 num = ~~(num / 10);
//             }
//         })(parseInt(inp1.value));
//     inp1.value = sum;
// })
// btn.addEventListener('click', function () {
//     let word = inp1.value
//     let result = ''
//     for (let i = 1; i <= word.length; i++) {
//         console.log(i)
//         result += word[word.length - i]
//         console.log(result)
//     }
//     div.innerHTML = result
// })
// let ps = document.querySelectorAll('p')
// btn.addEventListener('click', function () {
//     start = Math.floor(Math.random() * 20)
//     ps.forEach(elem => {
//         elem.innerHTML = start
//         start++
//     })
// })
btn.addEventListener('click', function(){
    let result = (function factorial(num){
        if (num === 1) return 1
        return num * factorial(num-1)
    })(parseInt(inp1.value));
    p1.innerHTML = result
})