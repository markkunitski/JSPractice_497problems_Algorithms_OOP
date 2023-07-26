let nn1 = [1, 2, 3, 4, 5, 6]
function n1(arr) {
    let result = arr.flatMap(elem => {
        return [elem, elem]
    })
    return result
}
function n2(arr, devider) {
    let result = arr.filter(elem => {
        if (elem % devider === 0) return true
    })
    return result
}
function n3(num1, num2) {
    let result = []
    let arr1 = String(num1).split('')
    let arr2 = String(num2).split('')
    arr1.forEach((elem, index) => {
        if (arr2.includes(elem) && !result.includes(elem))
            return result.push(parseInt(elem))


    })

    return result
}
let nn4 = 3333
function n4(num) {
    let result = []
    let arr = String(num).split('')
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] === '3') result.push(i)
    }
    return result
}
let nn5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
function n5(arr) {
    let result = arr.filter((el, index) => {
        let flag = true
        for (let j = index + 1; j < arr.length; j++) {
            if (el === arr[j]) flag = false
        }
        return flag
    })
    return result
}
let nn6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
function n6(arr) {
    let result = []
    arr.forEach(elem => {
        
        if (Array.isArray(elem)) {
            result =  result.concat(n6(elem))
        } else {
            result.push(elem)
            console.log(result)
            
        }
    })
    return result
}
console.log(n6(nn6)) 