let zz1: string = 'asfaf kljh mcvxc agggg'
let zz2: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20]
let zz3: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 1001]
let zz4: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20]
let zz5: number = 35142
interface zObj {
    [key: number]: {
        [key: number]: {
            [key: number]: number
        }
    }
}
type RecursiveObject = {
    [key: number]: number | RecursiveObject;
  };
let zz7: RecursiveObject = {
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
}


function z1(data: string): string[] {
    let result: string[] = []
    let tmp: string[] = data.split(' ')
    tmp.forEach(elem => {
        if (elem[0].toLowerCase() === 'a') {
            result.push(elem)
        }
    })
    return result
}
function z2(data: number[]): number[] {
    let result: number[] = []
    data.forEach(elem => {
        if (elem % 5 === 0 && elem !== 0) {
            result.push(elem)
        }
    })
    return result
}
function z3(data: number[]): number[] {
    let result: number[] = []
    data.forEach(elem => {
        let tmp: string = String(elem)
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i] === '0') {
                result.push(elem)
                break
            }
        }
    })
    return result
}
function z4(data: number[]): number[] {
    let result: number[] = []
    data.forEach(elem => {
        let tmp: string = String(elem)
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i] === '3') {
                result.push(elem)
                break
            }
        }
    })
    return result
}
function z5(data: number): number[] {
    let tmp: string[] = String(data).split('')
    let toSort: number[] = tmp.map(elem => Number(elem))
    function MySort(array: number[]): number[] {
        if (array.length <= 1) {
            return array
        }
        let pivotIndex: number = Math.floor(array.length / 2)
        let pivot: number = array[pivotIndex]
        let greater: number[] = []
        let less: number[] = []
        array.forEach(elem => {
            if (elem !== pivot) {
                if (elem < pivot) {
                    less.push(elem)
                } else {
                    greater.push(elem)
                }
            }

        })
        return [...MySort(less), pivot, ...MySort(greater)]
    }

    let result: number[] = MySort(toSort)

    return result
}
function z6(): string {
    let result: string = '-'
    for (let i = 1; i <= 5; i++) {
        result += `${i}-`
    }
    return result
}
function z7(data: RecursiveObject): number {
    let sum: number = 0;
    for (let key in data) {
        if (typeof data[key] === "object") {
            sum += z7(data[key] as RecursiveObject);
        } else {
            sum += data[key] as number;
        }
    }
    return sum;
}

console.log(z7(zz7));
