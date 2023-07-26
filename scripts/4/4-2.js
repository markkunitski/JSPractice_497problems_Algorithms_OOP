function n1(num) {
    let sum = 0
    while (num) {
        sum += num % 10
        num = ~~(num / 10)
    }
    return sum
}

function n2(num) {
    let result = []
    while (num) {
        let last = num % 10
        if (last !== 0) {
            result.unshift(String(last))
        }
        num = ~~(num / 10)

    }
    return result.join('')
}
let nn3 = new Date(2020, 5, 11)
function n3(date) {
    let now = new Date()
    let diff = (now - date) / (1000 * 60 * 60 * 24)
    return Math.floor(diff)
}
let nn4 = new Date(2024, 1, 28)
function n4(year) {
    let date = new Date(year, 1, 29)
    console.log(date.getDate())
    if (date.getDate() === 29) {
        return true
    } else {
        return false
    }
}

function n5() {
    let start = 1923
    let result = []
    while (start <= 2023) {
        if (n4(start)) {
            result.push(start)
        }
        start++
    }
    return result
}
let nn6 = new Date()
function n6(date) {
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    return lastDay.getDate()
}
function n7(date) {
    let result = {
        next: '',
        curr: '',
        prev: '',
    }
    let names = ['vos', 'pon', 'vto', 'sre', 'cze', 'pia', 'sub', 'vos']
    for (let key in result) {
        switch (key) {
            case 'next':
                result[key] = names[date.getDay() + 1]
                break;
            case 'curr':

                result[key] = names[date.getDay()]
                break;
            case 'prev':
                if (date.getDay() - 1 === -1) {
                    result[key] = 'sub'
                } else {
                    result[key] = names[date.getDay() - 1]
                }
        }
    }
    return result
}
let nn7 = new Date(2023, 5, 11)
let arr = []
for (let i = 0; i < 1000; i++)
    arr.push((Math.round(Math.random() * (122 - 97))) + 97)
console.log(Math.min.apply(null, arr))