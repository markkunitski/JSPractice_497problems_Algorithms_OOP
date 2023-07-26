let inp1 = document.getElementById('in1')
let inp2 = document.getElementById('in2')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let btn = document.getElementById('btn')
let pars = document.querySelectorAll('p')
let div = document.getElementById('div')
// btn.addEventListener('click', function () {
//     let result = 0
//     for (let i = 1; i <= 100; i++) {
//         result += i
//     }
//     p1.innerHTML = result
// })
function writeSum(in1, in2, output) {
    let sum = parseInt(in1.value) + parseInt(in2.value)
    output.innerHTML = sum
}
// btn.addEventListener('click', () => {
//     writeSum(inp1, inp2, p1)
// })
// btn.addEventListener('click', function(){
//     div.innerHTML = pars.length
// })
btn.addEventListener('click', function(){
    let sum = 0
    for (let char of inp1.value){
        if (char != ' ') sum++
    }
    p1.innerHTML = sum
})