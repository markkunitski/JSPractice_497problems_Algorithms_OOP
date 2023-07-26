let nn1 = ['safsf', 'sdf', 'qwe', 'ashfljhas']
let nn2 = 1357
let nn3 = 'abcba'
let nn4 = [
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
    [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
]
function n1(arr) {
    let result = []
    arr.forEach(elem => {
        if (elem.length <= 3) {
            result.push(elem)
        }
    })
    return result
}
function n2(number) {
    if ((number % 10) % 2 === 0) {
        return false
    } else {
        rest = ~~(number / 10)
    }
    if (String(number).length <= 1) {
        return true
    }

    return n2(rest)
}
function n3(string) {
    let arr = string.split('')
    let revArr = arr.reverse()
    if (arr === revArr) {

        return true
    }
    return false
}
function n4(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += n4(arr[i])
        } else {
            sum += arr[i]
        }
    }
    return sum
}
console.log(n4(nn4))
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumArray(arr[i]);
        } else {
            console.log(i)
            sum += arr[i];
        }
    }
    return sum;
}

