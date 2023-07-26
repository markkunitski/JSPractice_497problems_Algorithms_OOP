function nn1() {
    let date = new Date()
    let days = ['Mon', 'Tue', 'Wen', 'Thi', 'Fri', 'Sat', 'Sun']
    return days[date.getDay() - 1]
}

let nn2 = new Date(2023, 7, 16)
function n2(date) {
    let days = ['Mon', 'Tue', 'Wen', 'Thi', 'Fri', 'Sat', 'Sun']
    return days[date.getDay() - 1]
}
function n3(num) {
    return Math.floor(num / 60 / 60 / 24)
}
function n4(num, str) {
    return str.slice(0, num)
}

let nn5 = new Date(2001, 11, 17)
let signs = {
    'ove': ['3-19', '4-13'],
    'tel': ['4-14', '5-19'],
    'bli': ['5-20', '6-20'],
    'rak': ['6-21', '7-9'],
    'lev': ['7-10', '8-15'],
    'dev': ['8-16', '9-30'],
    'ves': ['9-31', '10-22'],
    'sko': ['10-23', '11-29'],
    'str': ['11-18', '0-18'],
    'koz': ['0-19', '1-15'],
    'vod': ['1-16', '2-11'],
    'ryb': ['2-12', '3-18'],
}
function n5(mmdd) {
    let [inputMonth, inputDay] = mmdd.split('-')
    if (inputMonth > 11 || inputMonth < 0) return 'wrong month'
    if (inputDay > 31 || inputDay < 1) return 'wrong day'
    let keys = Object.keys(signs)
    let previousKey = keys[keys.length - 1]
    for (let key in signs) {
        let [startMonth, startDay] = signs[key][0].split('-')
        if (startMonth === inputMonth && startDay <= inputDay) {
            return key
        } else if (startMonth === inputMonth && startDay > inputDay) {
            return previousKey
        } else {
            previousKey = key
        }
    }
}
function n6(num) {
    let result = num + 1
    let arr = [1, num]
    console.log(result)
    let rootNum = num ** 0.5
    if (Number.isInteger(rootNum)){
        result += rootNum
        arr.push(rootNum)
    } 
    for (let i = 2; i < rootNum; i++) {
        console.log(result)
        if (num % i === 0) {
            result += i + num / i
            arr.push(i, num/i)
        }
    }
    return [result, arr]
}
console.log(n6(8))

