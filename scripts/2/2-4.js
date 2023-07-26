// let str = '1test1'
// let arr = str.split('')
// for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i]) === false) {
//         console.log(i)
//         break
//     }
// }
// let obj = {
//     row1:'1',
//     row2: '2',
//     row3: '3',
//     row4: '4'
// }
// let keyArr = []
// let valuesArr = []
// let entries = Object.entries(obj)
// let keys = entries.map(entry => entry[0])
// let values = entries.map(entry => entry[1])
// console.log(keys)
// console.log(values)
// let num = 'abcde'
// let arr = num.split('')
// let count = 0;
// let newarr = arr.map((elem, index) => {
//     if ((index + 1) % 2 !== 0){
//         return String(elem).toUpperCase()
//     } else return elem
// })
// console.log(newarr)
let str = 'aaa bbb ccc'
let newstr = ''
let arr = str.split(' ')
let newarr = arr.map(elem => {
    let item = elem.split('')
    item[0] = String(item[0]).toLocaleUpperCase()
    newstr += String(item.join('')) + ' '
    return item
})
console.log(newarr)
console.log(newstr)