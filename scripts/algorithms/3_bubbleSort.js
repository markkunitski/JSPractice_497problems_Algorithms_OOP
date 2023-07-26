let arr = [-1, 2, 3, 5, 7, 987, 678, -4, 5342, -2, -50, 6, 9, 2, 5, 8, 10]
let count = 0
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count++
        }
    }
    return array
}
console.log(arr.length)
console.log(bubbleSort(arr))
console.log('count' + count)