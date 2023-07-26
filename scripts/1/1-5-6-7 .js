// 1.5
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i
//     console.log(i)
// }
// console.log(sum)
// let str = 'qwerty'
// for (let k = str.length; k != -1; k--) {
//     console.log(str[k])
// }
// 1.6

// let arr = [1,2,3]
// let sum = 0;
// for (let i of arr) {
//     if (i) sum += i**2
// }
// console.log(sum)

// 1.7
let str = 'abcde'
let arr = []
for (let i = 0; i <= str.length - 1; i++) {
    arr.push(str[i])
}
console.log(arr)
let num = 12345;
// let numArr = num.toString().split('').map(Number);
// console.log(numArr);
// let num = 1234567;
// let numArr = [];
// while (num >= 10) {
//     numArr.push(num % 10)
//     num = ~~(num / 10)
//     console.log(num)
// }
// numArr.push(num)
// numArr = numArr.reverse()
// console.log(numArr)
let newArr = Number(String(num).split('').reverse().join(''))
console.log(newArr)
