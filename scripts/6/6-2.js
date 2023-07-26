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
// btn.addEventListener('click', function () {
//     let rows = parseInt(inp1.value)
//     let columns = parseInt(inp2.value)
//     let table = document.createElement('table')
//     let count = 1
//     for (let j = 1; j <= rows; j++) {
//         let newRow = document.createElement('tr')
//         for (let i = 1; i <= columns; i++) {
//             let newElem = document.createElement('th')
//             newElem.textContent = count
//             count++
//             newRow.appendChild(newElem)
//         }
//         table.appendChild(newRow)
//         console.log(table)
//     }
//     console.log(count)
//     document.body.firstElementChild.appendChild(table)
// })
3
// btn.addEventListener('click', function () {
//     let rows = parseInt(inp1.value)
//     let cols = parseInt(inp2.value)
//     let table = document.createElement('table')
//     let colCount = 1;
//     let elemCount = 1;
//     for (let i = 1; i <= rows + 1; i++) {
//         let row = document.createElement('tr')
//         if (i === 1) {
//             for (let k = 0; k <= rows; k++) {
//                 let elem = document.createElement('th')
//                 if (k === 0) {
//                     elem.textContent = ''
//                     row.appendChild(elem)
//                 } else {
//                     elem.textContent = k + ' column'
//                     row.appendChild(elem)
//                 }
//             }
//             table.appendChild(row)
//         } else {
//             for (let j = 1; j <= cols + 1; j++) {
//                 let elem = document.createElement('th')
//                 if (j === 1) {
//                     elem.textContent = colCount + ' row'
//                     row.appendChild(elem)
//                     colCount++
//                 } else {
//                     elem.textContent = String(i - 1) + '.' + String(j - 1);
//                     row.appendChild(elem)
//                     elemCount++
//                 }
//             }
//         }
//         table.appendChild(row)
//     }
//     document.body.firstElementChild.appendChild(table)
// })
4
let nn4 = [
    [1, 2, 3],
    [4, 10, 6],
    [7, 8, 9],
]
btn.addEventListener('click', function () {
    let table = document.createElement('table')
    nn4.forEach(arr => {
        let row = document.createElement('tr')
        for (let elem of arr) {
            let child = document.createElement('th')
            child.textContent = elem
            row.appendChild(child)
        }
        table.appendChild(row)
    })
    document.body.firstElementChild.append(table)
})