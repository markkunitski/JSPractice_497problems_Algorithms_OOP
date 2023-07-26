function n1(arr) {
    if (!arr.length) throw new Error('empty array')
    let index = Math.floor(Math.random() * arr.length)
    return arr[index];
}
function n2(arr) {
    if (!arr.length) throw new Error('empty array')
    let result = []
    let cache = []
    let len = Math.floor((Math.random() * 10) + 1)
    for (let i = 0; i < len; i++) {
        let index = Math.floor(Math.random() * arr.length)
        if (cache.includes(arr[index])) {
            for (let j = 0; j < arr.length; j++) {
                if (!cache.includes(arr[j])) {
                    cache.push(arr[j])
                    result[i] = arr[j]
                    break
                }
            }
            continue
        }
        cache.push(arr[index])
        result[i] = arr[index]
    }
    return result;
}
function notSolo(number) {
    let root = number ** 0.5
    let flag = false
    for (let i = 2; i <= root; i++) {
        if (number % i === 0) {
            flag = true
        }
    }
    return flag
}
function n4(min, max) {
    if (max <= min) throw new Error('wrong input')
    let result = []
    let times = max - min
    for (let i = 1; i <= times; i++) {
        let num = min
        console.log(num + ' num')
        if (!notSolo(num)) {
            console.log(notSolo(num))
            result.push(num)
        }
        min++
    }
    return result
}
function n5(...nums) {
    return nums.reduce((a, b) => a + b)
}
function n6(start, end) {
    if (start >= end) throw new Error('empty array')
    let result = []
    let cache = []
    let len = Math.floor((Math.random() * end) + 1)
    for (let i = 0; i < len; i++) {
        let newNum = Math.floor((Math.random() * (end - start)) + start)
        if (cache.includes(newNum)) {
            for (let j = 0; j < len; j++) {
                newNum = Math.floor((Math.random() * (end - start)) + start)
                if (!cache.includes(newNum)) {
                    cache.push(newNum)
                    result.push(newNum)
                    break
                }
            }
            continue
        }
        cache.push(newNum);
        result.push(newNum);
    }
    return result.sort();
}
console.log(n6(1, 10))
