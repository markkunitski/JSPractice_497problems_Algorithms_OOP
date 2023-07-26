let nn1 = [13, 233, 333]
function n1(array) {
    let result = true
    array.forEach(elem => {
        let current = false
        while (elem) {
            console.log(elem)
            if (elem % 10 === 3) {
                current = true
                break
            } else {
                elem = ~~(elem / 10)
            }
        }
        if (current === false) result = false
    })
    return result
}
let nn2 = 'kebab-case'
function n2(string) {
    let result = []
    let tmp = string.split('-')
    return tmp.join('_')
}
let nn3 = ''
function n3(callback) {
    let second
    let tmp = callback.split('_')
    second = tmp[1][0].toUpperCase() + tmp[1].slice(1)
    first = tmp[0]

    return first + second
}

let nn4 = 'camelCase'
function n4(string) {
    let result = ''
    for (let char of string) {
        if (char.toUpperCase() === char) {
            result += `_${char.toLowerCase()}`
        } else {
            result += char
        }
    }
    return result
}

function n5(length) {
    let result = []
    for (let i = 1; i <= length; i++) {
        let tmp = []
        for (let j = 1; j <= 3; j++) {
            tmp.push(j)
        }
        result.push(tmp)
    }

    return result
}


console.log(n5(5))