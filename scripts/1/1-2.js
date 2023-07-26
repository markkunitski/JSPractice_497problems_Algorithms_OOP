let num = 3112;
let secNum = 31131;
let lastnum = num % 10;
let firstnum = num;
while (firstnum >= 10) {
    firstnum = ~~(firstnum / 10)
}
console.log(firstnum + lastnum)
console.log(String(num)[0] === String(secNum)[0] ? 'совпадает' : 'не совпадает')