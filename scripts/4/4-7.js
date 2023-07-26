let nn1 = 'asd pion zxcvb bsfhg'
function n1(str) {
    let arr = str.split(' ')
    let sorted = arr.sort((a, b) => a.localeCompare(b))

    return sorted.join(' ')
}
let nn2 = [-2, 1, 2, 3, 500]
let nnn2 = [1, 2, 3, 4, 7, 8, 9, 14, 25, -2]
function n2(arr1, arr2) {
    let result = []
    arr1.forEach(elem => {
        if (arr2.includes(elem)) {
            result.push(elem)
        }
    })
    return result
}
function n3() {
    let cache = []
    for (let i = 1; i <= 10; i++) {
        let num = Math.round(Math.random() * 10)
        if (!cache.includes(num))
            cache.push(num)
    }
    return cache
}
function n4(arr, elem) {
    if (!arr.includes(elem))
        throw new Error('elem doesnt exist in arr')
    let result = 0;
    let tmpArr = [...arr, arr[0]]

    result += tmpArr[tmpArr.indexOf(elem) + 1]
    return result;
}
console.log(n4([1, 2, 3, 4, 5], 4))