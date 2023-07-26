let nn1 = 'Aafghfghfa'
let nn2 = '1 22 333 4444 22 5555 1'
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

function n1(string) {
    let count = 0
    for (char of string) {
        if (char.toUpperCase() === char) {
            count++
        }
    }
    return count > 2 ? 'больше ' : 'не больше'
}
function n2(string) {
    let arr = string.split(' ')
    let result = []
    arr.forEach(elem => {
        if (elem.length <= 3) {
            result.push(elem)
        }
    })

    return result.join(' ')
}
function n3(array1, array2) {
    let last = array1.pop()
    array2.forEach(elem => array1.push(elem))
    array1.push(last)
    return array1
}
function n3v2(array1, array2) {
    let result = [...array1.slice(0, array1.length - 1), ...array2, ...array1.slice(2)]
    return result
}
console.log(n3v2(arr1, arr2))

