let nn1 = '12321a'

function n1(string) {
    let result = true
    for (let char of string) {
        count++
        if (isNaN(parseInt(char))) {
            result = false
            break
        }
    }
    return [result, count]
}
let nn2 = '22244466'
function n2(string) {
    let result = true
    for (let char of string) {
        if (isNaN(parseInt(char))) {
            result = false
            break
        } else if (parseInt(char) % 2 !== 0) {

            result = false
            break
        }
    }
    return result
}
let nn3 = [1, 23, 5, 0, 1001, 10, 100]
function n3(array) {
    let result = []
    array.forEach(elem => {
        let set = 0
        let tmp = elem
        while (elem) {
            console.log(elem)
            if (elem % 10 === 0) {
                set++
            }
            elem = ~~(elem / 10)
        }
        if (set < 2) {
            result.push(tmp)
        }
    })
    return result
}

function n4() {
    let result = []
    for (let i = 1; i <= 1000; i++) {
        count++
        let sum = 0
        let tmp = i
        let j = i
        while (j && j !== 0) {
            sum += j % 10
            j = ~~(j / 10)
        }
        if (sum === 13) result.push(tmp)
    }
    return [result, count + 'count']
}
let count = 0
function sum13(number) {
    let sum = 0;
    let j = number;
    while (j && j !== 0) {
        sum += j % 10;
        j = ~~(j / 10);
    }
    if (sum === 13) {
        return number;
    } else return false;
}
function findNext(start, max) {
    count++
    let result = [];
    let next = Number(start) + 9;
    if (next > max) {
        return result;
    }
    if (sum13(next)) {
        result.push(next);
        result = [...result, ...findNext(next, max)]
    } else {
        result = [...result, ...findNext(next, max)]
    }
    return result;
}
function n4v2(max) {
    let result = [];
    for (let i = 1; i <= max; i++) {
        count++
        if (sum13(i)) {
            result.push(i);
            result = [...result, ...findNext(i, max)]
            break;
        }
    }
    return [result, 'count ' + count];
}
function n5() {
    let result = []
    let koef = 0
    for (let i = 1; i <= 3; i++) {
        let child = []
        for (let j = 1; j <= 3; j++) {
            child.push(j + koef)
            if (j == 3) {
                koef += 3
                result.push(child)
            }
        }
    }
    return result
}




