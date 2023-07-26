const qq1: number[] = [1, 2, 3, 4, 5, 6, 7, 1001, 1241, 5345345, 90, 65]
const qq2: number = 12345

function q1(data: number[]): number[] {
    let result: number[] = []
    data.forEach(elem => {
        if (String(elem).length < 3) {
            result.push(elem)
        }
    })
    return result
}
function q2(data: number): boolean {

    if (!data) {
        return true
    } else if (data % 10 > 0) {
        return q2(~~(data / 10))
    } else {
        return false
    }
}
const qq3: number[] = [123, 456, 789]
function q3(data: number[]): number[] {
    let result: number[] = []
    data.forEach(elem => {
        while (elem) {
            result.push(elem % 10)
            elem = ~~(elem / 10)
            console.log(elem)
        }
    })
    return result
}
interface typeQ4 {
    [key: string]: number;
    1: number;
    2: number;
    3: number;
}
const qq4: typeQ4[] = [
    {
        1: 1,
        2: 1,
        3: 1,
    },
    {
        1: 1,
        2: 1,
        3: 1,
    },
    {
        1: 1,
        2: 1,
        3: 1,
    },
];
function q4(data: typeQ4[]): number {
    let sum: number = 0
    data.forEach(elem => {
        for (let key in elem) {
            sum += elem[key]
        }
    })
    return sum
}
console.log(q4(qq4))