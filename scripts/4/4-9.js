let nn1 = new Date()
function findnCount(year) {
    let result = new Date(year, 1, 29)
    if (result.getDate() === 29) {
        return Math.floor((result - nn1) / 1000 / 60 / 60 / 24)
    } else {
        return findnCount(year + 1)
    }
}
function n1(date) {
    let thisYear = date.getFullYear()
    return findnCount(thisYear)

}
let nn2 = new Date()
function findPan(date) {
    let panFullMonth = new Date(date.getFullYear(), 2, 0)
    while (panFullMonth.getDay() !== 0) {
        panFullMonth.setDate(panFullMonth.getDate() - 1)
    }
    if (panFullMonth > nn2) {
        console.log(panFullMonth)
        return Math.round((panFullMonth - nn2) / 1000 / 60 / 60 / 24) + ' days'
    } else {
        panFullMonth.setFullYear(panFullMonth.getFullYear() + 1)
        return findPan(panFullMonth)
    }
}
let nn3 = {
    hex: '#',
    rgb: '',
}
function n3(obj) {
    let square = document.getElementById('elem')
    let [first, second] = Object.keys(obj);
    let result = []
    if (first === 'rgb') {
        for (let i = 1; i <= 3; i++) {
            obj[first] += String(Math.round(Math.random() * 255))
        }
    } else {
        for (let i = 1; i <= 6; i++) {
            let decimal = Math.round(Math.random() * 15)
            obj[first] += decimal.toString(16).toUpperCase()
        }
    }
    console.log(square)
    square.style.backgroundColor = obj[first]
    return nn3
}
function check(devider, self, arr) {
    return arr.every(item => item === self || item % devider === 0)
}
let nn4 = [2, 8, 32]
function n4(arr) {
    let result = []
    arr.forEach((elem, index) => {
        let root = elem ** 0.5
        if (Number.isInteger(root)) {
            if (!result.includes(root)) {
                result.push(root)
            }
        }
        for (let i = 2; i < root; i++) {
            console.log(i)
            if (elem % i === 0) {
                if (check(i, elem, arr)) {
                    if (!result.includes(i)) {
                        result.push(i)
                    }
                }
                if (check(elem / i, elem, arr)) {
                    if (!result.includes(elem / i)) {
                        result.push(elem / i)
                    }
                }
            }
        }
    })
    result.push(1)
    return result.sort()
}
let nn5 = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]
function n5(arrs){
    let result = []
    arrs.forEach(elem=> {
        result.push(Math.max.apply(null, elem))
    })
    return result
}

console.log(n5(nn5)) 