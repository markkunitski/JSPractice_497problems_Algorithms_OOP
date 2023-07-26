const ww1: string = 'ajg bkhgsaf cglb Jb qwe'
function w1(data: string): string[] {
    let result: string[] = data.split(' ').sort()
    return result
}
// function getDivisors(num: number): number[] {
//     const divisors: number[] = [];
//     let i: number = 1;
//     while (i <= Math.sqrt(num)) {
//         if (num % i === 0) {
//             divisors.push(i);
//             if (num / i !== i) {
//                 divisors.push(num / i)
//             }
//         }
//         i++;
//     }
//     return divisors.sort((a, b) => a - b);
// }
const num: number = 9990;
const devisor = (num: number): number[] => {
    let result: number[] = []
    let root: number = num ** 0.5
    for (let i = 2; i < root; i++) {
        if (num % i === 0) {
            result.push(i, num / i)
        }
    }
    result.sort((a, b) => a - b)
    if (Number.isInteger(root)) {
        result.push(root)
    }
    return result
}
const ww2: number = 2, ww3: number = 4
function w3(num1: number, num2: number): number[] {
    let result: number[] = []
    let first: number[] = getDivisors(num1)
    let second: number[] = getDivisors(num2)
    console.log([first, second])
    first.forEach(elem => {
        if (second.includes(elem)) {
            result.push(elem)
        }
    })
    result.sort((a, b) => a - b)
    return result
}
function getDivisors(num: number) {
    let result: number[] = []
    let start: number = 1
    while (start <= Math.sqrt(num)) {
        if (num % start === 0) {
            result.push(start)
            if (num / start !== start) {
                result.push(num / start)
            }
        }
        start++
    }
    return result
}
const ww4: number = 20
function w4(data: number): boolean {
    return getDivisors(data).length > 3 ? false : true
}

const ww5 = [1, -3, 10, 45, 0]
function w5(data: number[]): number {
    let result: number = data[0]
    for (let i = 1; i < data.length; i++) {
        if (data[i] > result) result = data[i]
    }
    return result
}
function w6(data: number[]): number[] {
    let result: number[] = []
    data.forEach(elem => {
        if (~~(elem / 10) === 0) {
            result.push(elem, elem)
        } else {
            result.push(elem)
        }
    })

    return result
}
const ww7: string = 'fааkhsdg;ljаа'
function w7(data: string): string {
    let result: string = ''
    let vowels: Set<string> = new Set(['а', 'о', 'и', 'ы', 'у', 'э'])
    for (let char of data) {
        if (!vowels.has(char)) {
            result += char
        }
    }
    return result

}
const ww8: string = 'xv asd klog'
function w8(data: string): string[][] {
    let result: string[][] = []
    data.split(' ').forEach(elem => {
        result.push([...elem.slice(0, -1), elem[elem.length - 1].toUpperCase()])
    })

    return result
}
interface MyInterface {
    [index: number]: {
        [key: number]: number
    }
}

const ww9: MyInterface[] = [
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
];

function w9(data: MyInterface[]): number {
    let sum: number = 0
    data.forEach(elem => {
        for (let key in elem) {
            let arr = elem[key]
            if (Array.isArray(arr)) {
                arr.forEach(elem => {
                    sum += elem
                })
            }

        }
    })
    return sum
}

console.log(w9(ww9))


