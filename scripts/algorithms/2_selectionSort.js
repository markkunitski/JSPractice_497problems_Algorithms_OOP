let arr = [-1, 2, 3, 5, 7, 987, 678, -4 , 5342, -2, -50, 6, 9, 2, 5, 8, 10]
let count = 0
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tmp
    }
    return array
}
console.log(arr.length)
console.log(selectionSort(arr))
console.log(selectionSort('count ' + count))
