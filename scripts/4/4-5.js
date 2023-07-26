function n1(str) {
    let result = true
    for (let char of str) {
        if (isNaN(parseInt(char))) {
            result = false
            break
        }
    }
    return result
}
let nn2 = '1235/0'
function n2(str) {
    let result = false
    let [up, down] = str.split('/')
    console.log(up, down)
    if (Number(up) && Number(down) && Number(down) !== 0) {
        result = true
    }
    return result
}
let nn3 = [1, 5, 8, 19, 124, -2, 89, 342]
function n3(arr) {
    let biggestIndex = arr.indexOf(Math.max.apply(null, arr))
    let newArr = [...arr.slice(0, biggestIndex), ...arr.slice(biggestIndex + 1)]
    return Math.max.apply(null, newArr)
}
function n4(start, finish) {
    if (start < finish && Number(start) && Number(finish)) {
        for (start; start <= finish; start++) {
            console.log(start)
        }
    } else {
        throw new Error('wrong input')
    }
    return true
}
function n5(len) {
    let result = []
    for (let i = 1; i <= len; i++) {
        let char = String.fromCharCode(Math.round(Math.random() * (122 - 97)) + 97)

        result.push(char)
    }
    return result
}

function fib(num) {
    if (num === 1 || num === 2) {
        return 1
    }
    return fib(num - 1) + fib(num - 2)
}

console.log(fib(3))