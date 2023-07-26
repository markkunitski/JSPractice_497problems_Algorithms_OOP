let inp1 = document.getElementById('in1');
let inp2 = document.getElementById('in2');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let btn = document.getElementById('btn');
let pars = document.querySelectorAll('p');
let div = document.getElementById('div');
let ps = document.querySelectorAll('p');
let a1 = document.querySelector('#a1')
let a2 = document.querySelector('#a2')
let as = document.querySelectorAll('a')
1
// btn.addEventListener('click', function(){
//     let data = inp1.value.split('-')
//     console.log(data)
//     ps.forEach((elem, index)=>{
//         elem.innerHTML = data[index]
//     })
// })
2
// btn.addEventListener('click', function () {
//     (function (start, finish) {
//         let result = []
//         for (start; start <= finish; start++) {
//             result.push(start)
//         }

//         console.log(result)
//     })(parseInt(inp1.value), parseInt(inp2.value))
// })
3
// btn.addEventListener('click', function () {
//     let sent = inp1.value
//     console.log(sent[sent.length - 1])
// })
4
// btn.addEventListener('click', function () {
//     div.innerHTML = parseInt(div.innerHTML) + 1
// })
5
inp1.addEventListener('blur', function () {
    div.innerHTML = inp1.value.split(' ').length
})