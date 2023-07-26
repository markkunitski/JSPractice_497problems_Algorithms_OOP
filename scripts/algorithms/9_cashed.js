function newFactorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n--
    }
    return result
}
function cash(fn) {
    let cash = {}
    return function (n) {
        if (cash[n]) {
            console.log('взято из кеша', cash[n])
            return cash[n]
        }
        let result = fn(n)
        cash[n] = result
        console.log(cash)
        console.log('посчитала функция', cash[n])
        return result
    }

}
let cashFactorial = cash(newFactorial)
cashFactorial(5)
cashFactorial(5)
cashFactorial(4)
cashFactorial(2)
cashFactorial(6)
cashFactorial(1)