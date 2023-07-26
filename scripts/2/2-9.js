let nn1 = 123456
let nn2 = [1, 2, 3, 4, 5]
let nn3 = 'aaaa111'
let number = 2121312116569808908901
let nn4 = 'abcde abcde abcde'
let nn5 = [1, 2, 3, 3, 4, 5]

function n1(number) {
    let sum = 0
    let arr = String(number).split('')
    for (let i = 0; i < arr.length; i += 2) {
        sum += Number(arr[i] + arr[i + 1])
    }
    return sum
}
function n2(arr) {
    let middleIndex = Math.floor(arr.length / 2)
    let lastIndex = 1
    for (let i = 0; i < middleIndex; i++) {
        let tmp = arr[i]
        arr[i] = arr[arr.length - lastIndex]
        arr[arr.length - lastIndex] = tmp
        lastIndex++
        console.log(tmp)
    }
    return arr
}
function n3(string) {
    let count = 0
    for (char of string) {
        if (isNaN(Number(char))) count++
    }
    return count > 3 ? 'больше' : 'меньше'
}
function recursive(start) {
    num = start % 10
    if (num % 2 === 0) {
        return num
    }
    rest = ~~(start / 10)
    if (rest === 0) {
        return 'net'
    }
    return recursive(rest)
}
function n4(string) {
    let arr = string.split(' ')
    let str = ''
    arr.forEach(elem => {
        let tmp = elem.split('')
        tmp[0] = '!'
        tmp.push(' ')
        console.log(tmp)
        str += tmp.join('')
    })
    console.log(str.trimEnd().length)
}
function n5(arr) {
    let result = false
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] === arr[i + 1])
            result = true
    }
    return result
}
console.log(n5(nn5))

