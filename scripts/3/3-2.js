let nn2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let nn3 = 5;
let nn4 = 'aaa bbb ccc eee fff'
let nn5 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
function n1(start, end) {
    while (start <= end) {
        let preLast = String(start)
        if (preLast[preLast.length - 2] % 2 !== 0) {
            console.log(start)
        }
        start++
    }
}
function n2(arr) {
    let result = []
    arr.forEach((elem, index) => {
        if ((index + 1) % 5 !== 0) {
            result.push(elem)
        }
    })
    return result
}
function n3(number) {
    let result = []
    for (let i = 1; i <= number; i++) {
        result.push('0')
    }
    return result.join('')
}
function n4(string) {
    let arr = string.split(' ')
    let result = []
    arr.forEach((elem, index) => {
        if ((index + 1) % 2 !== 0){
            result.push(elem)
        }
    })
    return result
}
function n5(arrays){
    let sum = 0
    arrays.forEach(arr=> {
        arr.forEach(elem=>{
            sum += elem
        })
    })
    return sum
}
console.log(n5(nn5))
