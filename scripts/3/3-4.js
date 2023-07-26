let nn2 = [1, 2, 3, 4, 5, 6, 7]
let nn3 = {
    1: {
        1: 1,
        2: 1,
        3: 1,
    },
    2: {
        1: 1,
        2: 1,
        3: 1,
    },
    3: {
        1: 1,
        2: 1,
        3: 1,
    },
}
const n1 = () => {

    for (let i = 10; i <= 1000; i++) {
        let firstDigit = parseInt(String(i)[0])
        if (firstDigit % 2 === 0) {
            console.log(i)
        }
    }

}
function n2(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1]) {
            let tmp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = tmp
        }
    }
    return arr
}
// function n3(obj) {
//     let sum = 0
//     for (let key in obj) {
//         for (let childKey in obj[key]) {
//             sum += obj[key][childKey]
//         }
//     }
//     return sum
// }
function n3v2(obj) {
    let sum = 0
    for (let key in obj) {
        sum += Object.values(obj[key]).reduce((a, b) => a + b, 0)
    }


    return sum
}
let test = '123456'


function maskify(cc) {
    let result = ''

    for (let i = 0; i < cc.length; i++) {
        if (i >= cc.length - 4) {
            result += cc[i]
        } else {
            result += "#"
        }
    }
    return result
}
function order(input) {
    let result = [];
    if (Array.isArray(input)) {
        input.forEach((elem, index) => {
            if (input[index] !== input[index + 1]) {
                result.push(elem);
            }
        });
    } else {
        input = input.split("");
        console.log(input);
        input.forEach((el, index) => {
            if (input[index] !== input[index + 1]) {
                result.push(el);
            }
        });
    }
    return result;
}


function orderFilter(iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1])
}


let pangram = 'The quick brown fox jumps over the lazy dog'
function isPangram(string) {
    let unique = []
    let filtered = ''
    for (let i = 0; i < string.length; i++) {
        if (isNaN(string[i]) && string[i].toLowerCase() !== string[i].toUpperCase()) {
            filtered += string[i]
        }
    }
    for (let i = 0; i < filtered.length; i++) {
        if (!unique.includes(filtered[i].toLowerCase())
            && filtered[i] !== ' ') {
            unique.push(filtered[i].toLowerCase())
        }
    }
    
    return unique.length === 26 ? true : false
}