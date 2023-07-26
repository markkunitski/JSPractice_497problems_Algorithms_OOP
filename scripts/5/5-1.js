
// let incr = document.querySelector('.incr')
// let dicr = document.querySelector('.dicr')
let btn = document.getElementById('btn')
let inp = document.querySelectorAll('input')
let in2 = document.getElementById('in2')
let par = document.querySelectorAll('p')
let p2 = document.getElementById('p2')
function sum(...prop) {
    let sum = 0
    prop.forEach(elem => {
        sum += parseInt(elem.textContent)
    })
    return sum
}
function dicriment() {
    result.innerHTML = Number(result.innerHTML) - 1
}
function incriment() {
    result.innerHTML = Number(result.innerHTML) + 1
}
function pow(elem) {
    if (elem.tagName === 'INPUT') {
        elem.value = Number(elem.value) ** 2
    } else {
        elem.innerHTML = Number(elem.innerHTML) ** 2
    }

}
function setValue(where, callback) {
    where.value = callback
}
par.forEach(elem => {
    elem.addEventListener('dblclick', function () {
        pow(this)
    })
})
inp.forEach(elem => {
    elem.addEventListener('blur', function () {
        pow(this)
    })
})
btn.addEventListener('click', () => {
    setValue(in1, sum(p1, p2))
})
