function n1(letter) {
    if (typeof (letter) != 'string') return 'error'
    return letter.charCodeAt(0) > 1000 ? 'кирилица' : 'латиница'
}
let nn2 = [1, 2, 3, 4, 5, 6]

function n2(arr) {
    let result = arr
    let cnt = Math.floor((Math.random() * (arr.length - 3)) + 3)
    console.log(cnt + 'sg')
    for (let i = 0; i <= cnt; i++) {
        let index = Math.floor(Math.random() * arr.length)
        let tmpIndex;
        if (index === arr.length - 1) {
            tmpIndex = 0
        } else {
            tmpIndex = index + 1
        }
        console.log(index + ' in')
        console.log(tmpIndex + ' tmp')
        let tmp = result[tmpIndex]
        result[tmpIndex] = result[index]
        result[index] = tmp

    }
    return result
}
let nn3 = 'Jhg m,bvnb uojfghk ytwee p[iuo - l;kjh zcx vcxz asgf qwe nb ljk khj;l sdgf ip]o[ jjjj werq mb,n hjkl qwe'
function n3(text) {
    let filtered = text.split(' ').filter(elem => elem.toLowerCase() !== elem.toUpperCase())
    let cache = []
    let result = {
    }
    filtered.forEach(elem => {
        let first = elem[0].toLowerCase()
        if (!cache.includes(first)) {
            cache.push(first)
            result[first] = filtered.filter(elem => elem[0].toLowerCase() === first)
        } else {
            return
        }
    })

    return result
}
let nn4 = 121
function n4(num) {
    let nums = {
        1: 'one ',
        2: 'two ',
        3: 'three ',
        4: 'four ',
        5: 'five ',
        6: 'six ',
        7: 'seven ',
        8: 'eight ',
        9: 'nine ',
        0: 'zero ',
    }
    let data = String(num).split('')
    let result = ''
    data.forEach(elem => {
        result += nums[Number(elem)]
    })
    return result
}
function findDeviders(num) {
    if (num === 1) return [1]
    let result = []
    let root = num ** 0.5
    for (let i = 2; i < root; i++) {
        if (num % i === 0) {
            result.push(i, num / i)
        }
    }
    if (Number.isInteger(root)) result.push(root)
    result.push(1, num)
    return result
}
function n5(num) {
    let deviders = findDeviders(num)
    let result = []
    console.log(deviders)
    deviders.forEach(elem => {
        if (findDeviders(elem).length <= 2) {
            result.push(elem)
        }
    })
    return result
}
let nn6 = 'яблоко'
function n6(word) {
    let splited = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е']
    let current = ''
    let syllables = []
    for (let char of word) {
        if (splited.includes(char)) {
            syllables.push(current + char)
            current = ''
        } else {
            current += char
        }

    }
    if (current) {
        syllables[syllables.length - 1] = syllables[syllables.length - 1] + current
    }
    return syllables
}
console.log(n6(nn6))
