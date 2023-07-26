
let nn1 = new Date('2023-1-1')
function n2(len) {
    let result = ''
    for (len; len > 0; len--) {
        let index = Math.round((Math.random() * 25) + 97)
        result += String.fromCharCode(index)
    }
    return result
}
let nn3 = 'qwe a a'
function n3(str) {
    let devided = str.split(' ')
    let result = ''
    devided.forEach(elem => {
        result += elem[0].toUpperCase()
    })
    return result
}
let nn4 = [2, 3, 20]
function n4(arr) {
    let result = []
    arr.forEach(elem => {
        let root = elem ** 0.5
        let elemArr = []
        elemArr.push(1, elem)
        for (let i = 2; i < root; i++) {
            if (elem % i === 0) {
                elemArr.push(i, elem / i)
            }
        }
        if (Number.isInteger(root)) elemArr.push(root)
        result.push(elemArr)
    })
    return result
}
function n5(seconds) {
    let day = seconds / 86400
    let hours = (day % Math.floor(day)) * 24
    let min = (hours % Math.floor(hours)) * 60
    let sec = (min % Math.floor(min)) * 60
    return [Math.floor(day)+ ' days', Math.floor(hours)+ ' hours', Math.floor(min)+ ' mins', Math.floor(sec)+ ' secs']
}
console.log(n5(1001000))
