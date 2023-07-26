let arr = [-1, 2, 3, 5, 7, 987, 678, -4, 5342, -2, -50, 6, 9, 2, 5, 8, 10, 71, 91, 23, 5, 6, 33, 8, 9, 0]
let count = 0
function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else { 
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}
console.log(quickSort(arr))
console.log('count' + count)
