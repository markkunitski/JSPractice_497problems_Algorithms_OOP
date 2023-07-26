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
// (function() {
//     ps.forEach(elem => {
//         elem.addEventListener('click', function(){
//             this.innerHTML = '!'
//         })
//     })
// })();
// btn.addEventListener('click', function(){
//     let result = []
//     as.forEach(elem=>{
//        result.push(elem.href)
//     })
//     console.log(result)
// })
// btn.addEventListener('click', function () {
//     let start = 1;
//     let interval = setInterval(function(){
//         if (start >= 9) {
//             clearInterval(interval);

//         }
//         p1.innerHTML += start;
//         start++;
//     }, 500);
// });
// btn.addEventListener('click', function () {
//     let date = new Date()
//     let data = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
//     data.forEach((elem, index) => {
//         ps[index].innerHTML = elem
//     })
// })
btn.addEventListener('click', function(){
    p1.innerHTML = a1.href
})