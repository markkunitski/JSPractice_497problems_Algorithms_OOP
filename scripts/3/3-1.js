let nn1 = 212345
let nn2 = [1, '', 2, 3, '', 5]
let nn3 = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
]
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

function n1(number) {
    let str = String(number)
    let result = true
    for (let i = 0; i < str.length; i++) {
        if (str[i] > str[i + 1]) {
            result = false
        }

    }
    return result
}
function n2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            arr = [...arr.slice(0, i), ...arr.slice(i + 1)]
        }
    }
    return arr
}
let count = 0
function n3BubbleSort(arrays) {
    let result = arrays.map(elem => {
        for (let i = 0; i < elem.length; i++) {
            for (let j = 0; j < elem.length; j++) {
                count++
                if (elem[j] > elem[j + 1]) {
                    let tmp = elem[j]
                    elem[j] = elem[j + 1]
                    elem[j + 1] = tmp
                }
            }
        }
        return elem
    })
    return [result, count]
}
function n3SelectionSort(arrays) {
    let result = arrays.map(el => {

        for (let i = 0; i < el.length; i++) {
            let minIndex = i
            for (let j = i + 1; j < el.length; j++) {
                if (el[j] < el[minIndex]) {
                    minIndex = j
                }

            }
            let tmp = el[i]
            el[i] = el[minIndex]
            el[minIndex] = tmp
        }
        return el
    })
    return result
}

function n3QuickSearch(arrays) {
    let result = arrays.map(elem => fn(elem))
    return result
}
function fn(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...fn(less), pivot, ...fn(greater)]
}
function n4(array1, array2) {
    let biggest
    let lower
    if (array1.length > array2.length) {
        biggest = array1
        lower = array2
    } else {
        biggest = array2
        lower = array1
    }
    let diff = biggest.length - lower.length
    biggest = biggest.slice(0, -diff)
    return [lower, biggest]
}
console.log(n4(arr1, arr2))

