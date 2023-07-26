const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let count = 0;
function binarySearch(array, item) {
    let start = 0;
    let end = array.length
    let flag = false;
    let defaultValue = -1
    let middle;
    while (flag === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2)
        if (item === array[middle]) {
            flag = true;
            defaultValue = array[middle]
            return defaultValue
        }
        if (item < array[middle]) {
            console.log('middle' + array[middle])
            end = middle - 1
            console.log('end' + end)
        } else {
            start = middle + 1
            console.log('start' + start)
        }
    } return defaultValue
}
function recursiveBinarySearc(array, item, start, end) {
    let middleIndex = Math.floor((start + end) / 2)
    count++
    if (array[middleIndex] === item) {
        return middleIndex
    }
    if (array[middleIndex] > item) {
       return recursiveBinarySearc(array, item, start, middleIndex - 1)
    } else {
       return recursiveBinarySearc(array, item, middleIndex + 1, end)
    }
}
console.log(recursiveBinarySearc(num, 1, 0, num.length))
console.log('first' + count)
