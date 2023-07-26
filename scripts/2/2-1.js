// let str = '02313890798982950'
// console.log(str.indexOf('0'))
// for (let i = 1; i <= 1000; i++) {
//     let arr = String(i).split('')
//     if (parseInt(arr[0]) + parseInt(arr[1]) === 5) console.log(i)
// }
// let item = 1;
// let n2Done = n2Arr.filter(elem => elem != item)
// console.log(n2Done)
// let n3Arr = [1, 2, 3, 4, 5, 1, 1, 1, 1, 1]
// for (let i = 1; i <= Math.floor(n3Arr.length / 2); i++) {
//     console.log(i)
// }
// console.log(str.slice(-2, -1))
var arr = [1, 1, 0, 2, 0, 3, 4, 5, 6, 7, 8, 0];
var element = 0;
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === element) {
    count++;
    if (count === 3) {
      console.log(i);
      break;
    }
  }
}
let num = '12,34,56'
let numArr = num.split(',')
let sum = 0;
for (elem of numArr) {
    
    sum += parseInt(elem) 
}
console.log(sum)
let date = '2025-12-31'
let [year , month, day] = date.split('-')
let obj = {
    year: year,
    month: month,
    day: day
}
console.log(obj)
