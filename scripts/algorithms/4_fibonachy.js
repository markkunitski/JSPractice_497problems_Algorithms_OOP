// 1 ,1 ,2 ,3 ,4 ,5 ,13 ,21
count = 0
const fibonachy = (n) => {
    count++
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonachy(n - 1) + fibonachy(n - 2)
}
console.log(fibonachy(8))

