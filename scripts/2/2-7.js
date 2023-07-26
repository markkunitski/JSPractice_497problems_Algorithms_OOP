let nn1 = 'a bc def ghij'
let nn2 = 'a'
let nn3 = 123789

function n1(string) {
    let arr = string.split(' ')
    let result = arr.map(elem => {
        if (elem.length <= 3) {
            return elem.toUpperCase()
        } else return elem
    })
    return result
}
function n2(string) {
    { string.toUpperCase() === string ? console.log('верхний') : console.log('нижний') }
}

function n3(number) {
    let arr = String(number).split('')
    let result = []
    arr.forEach(elem => {
        if (Number(elem) % 2 === 0) {
            result.push(elem)
        }
    })
    return result
}

