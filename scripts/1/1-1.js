const root = document.getElementById('root')
const addParagraph = () => {
    const paragraph = document.createElement('p')
    paragraph.innerHTML = 'приветики'
    root.appendChild(paragraph)
}
addParagraph()

const number = 0
const string = 'dlina stroь'
const sl1 = 'privet'
const sl2 = 'psadadadaoka'


console.log(number >= 0 ? 'положительное' : 'отричательное')
console.log(string[string.length - 1])
console.log(number % 2 === 0 ? 'четное' : 'нечетное')
console.log(sl1[0] == sl2[0] ? 'takoeje' : 'netakoe')
console.log(string[string.length - 1] === 'ь' ? string[string.length - 2] : string[string.length - 1])


