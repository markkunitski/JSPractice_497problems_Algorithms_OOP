let str = 'AbCdE'
let num = '1234567';
let nn5 = ['1', '2', '3', '4', '5', '6']
let nn6 = 'aaa bbb ccc eee fff'
function n1(string) {
    let result = []
    if (typeof (string) === 'string') {
        let tmp = string.split('')
        tmp.forEach((elem, index) => {
            if (isNaN(parseInt(elem)) === false) {
                result.push(index)
            }
        })
    } else {
        return 'не строка'
    }
    return result
}
let arr = [123, 456, 789]
function n2(array) {
    let result = array.map(elem => {
        let devided = String(elem).split('')
        let sorted = devided.sort((a, b) => b - a)
        let resultElem = ''
        sorted.forEach(elem => resultElem += elem)
        return parseInt(resultElem)
    })

    return result
}
// let formattedNum = num.toLocaleString()
// console.log(formattedNum);
function n3(string) {
    let result = ''
    for (let i = string.lenght - 1; i <= 0; i -= 2) {
        result = string.slice(string.lenght - 1, i) + ' ' + string.slice(i)
    }
    return result
}
function n4(string) {
    let result = ''
    let char
    for (let i = 0; i < string.length; i++) {
        char = string[i]
        if (char === char.toUpperCase()) {
            result += char.toLowerCase()
        } else {
            result += char.toUpperCase()
        }
    }
    return result
}
function n5(array) {
    for (let i = 0; i < array.length; i++) {
        let first = array[i]
        let second = array[i + 1]
        array = [...array.slice(0, i + 1), ...array.slice(i + 2)]
        array[i] = first + second
    }
    return array
}
function n6(string) {
    let arr = string.split(' ')
    let result = arr.map((elem, index) => {
        if (index % 2 !== 0) {
            let tmp = elem.split('')
            tmp = [tmp[0].toUpperCase(), ...tmp.slice(1)]
            return tmp.join('')
        }
        return elem
    })
    return result
}
console.log(n6(nn6))
