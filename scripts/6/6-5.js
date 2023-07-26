let inp1 = document.getElementById('in1');
let inp2 = document.getElementById('in2');
let inps = document.querySelectorAll('.test')
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
1
// btn.addEventListener('click', function () {
//     let [year, month, day] = inp1.value.split('-')
//     let now = new Date
//     let bday = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
//     let diff = now - bday
//     if (!diff || diff <= 0) {
//         alert('wrong data')
//     } else {
//         let result = 0
//         console.log(diff)
//         result = (diff / 86400000) / 365
//         p1.textContent = Math.floor(result) + ' full years'
//     }
// })
2
btn.addEventListener('click', function () {

})
// inp1.addEventListener('change', function () {
//     let data = inp1.value.split(', ')
//     console.log(data)

//     p1.textContent = data.reduce((acum, elem) => {
//         acum += Number(elem);
//         return acum
//     }, 0);


// })
// inp1.addEventListener('input', calculateSum);
//     function calculateSum() {
//       const inputValues = inp1.value.split(',');
//       const numbers = inputValues.map(value => Number(value.trim()));
//       const sum = numbers.reduce((total, num) => total + num, 0);
//       p1.textContent = `Sum: ${sum}`;
//     }
3
// btn.addEventListener('click', function () {
//     let child = document.createElement('input')
//     child.classList.add('test')
//     child.id = Date.now()
//     document.body.firstElementChild.appendChild(child)
//     inps = document.querySelectorAll('input')
//     inps.forEach(elem => {
//         elem.addEventListener('input', function calculateSum() {
//             const filteredInputs = [...inps].filter(elem => elem.value);
//             const sum = filteredInputs.reduce((total, curr) => total + Number(curr.value), 0);
//             p1.textContent = sum;
//         });
//     })
//     console.log(inps)
// })

4
// btn.addEventListener('click', function () {
//     let filteredInputs = [...inps].filter(elem => elem.value)
//     let sum = filteredInputs.reduce((total, curr) => total + Number(curr.value), 0)
//     btn.innerText = `SUM: ${sum}`
// })
5
// btn.addEventListener('click', function () {
//     let data1 = inp1.value.split(',')
//     let data2 = inp2.value.split(',')
//     data1.forEach(elem => {
//         elem.trim()
//     })
//     data2.forEach(elem => {
//         elem.trim()
//     })
//     let result = []
//     data1.forEach(elem => {
//         if (result.includes(elem)) return
//         if (data2.includes(elem)) result.push(elem)
//     })
//     div.textContent = result.join(', ')
// })
6
btn.addEventListener('click', function () {
    
})