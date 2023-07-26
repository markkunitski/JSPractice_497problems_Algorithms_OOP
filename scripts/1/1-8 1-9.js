// let arr = [];
// for (let i = 1; i <= 10; i++) arr.push(i)
// console.log(arr)
// let fractionArr = [1.456, 2.125, 3.32, 4.1, 5.34]
// let roundedArr = fractionArr.map(elem => Math.round(elem * 10) / 10)
// console.log(roundedArr)
// // 1.9
// let stringArr = ['http://sughsjkg', 'http://hsdfkjsfkjshfs', 'sfsf', 'sdfsfsafsa', '123']
// let filteredArr = stringArr.filter(elem => {
//     if (elem.startsWith('http://')) return true
// })
// console.log(filteredArr)
// let n3Arr = [10, 20, 30, 44, 545, 66, 72, 8]
// let n3Done = n3Arr.map(elem => Math.round(elem * 1.1))
// console.log(n3Done)
// // 1.10
// let n1Arr = []
// for (let i = 1; i <= 10; i++) {
//     n1Arr.push(Math.round(Math.random() * 100))
// }
// console.log(n1Arr)
// let n2 = '12345'
// let n2Edited = n2.split('').reverse()
// n2Edited.forEach(elem => console.log(elem))
// let n3 = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < n3.length; i += 2) {
//     console.log(n3.slice(i, i + 2))
// }
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2])