let inp1 = document.getElementById("in1");
let inp2 = document.getElementById("in2");
let inps = document.querySelectorAll("input");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let btn = document.getElementById("btn");
let div = document.getElementById("div");
let ps = document.querySelectorAll("p");
let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let as = document.querySelectorAll("a");
let lis = document.querySelectorAll("ul li");
let area = document.querySelector("#area");
let ul = document.querySelector(".ulclass");
let divs = document.querySelectorAll("#div div");
let btns = document.querySelectorAll(".fordivs");
function pop(state) {
  let child = document.createElement("div");
  child.classList.add("pop", `${state}`);
  document.body.firstElementChild.appendChild(child);
  setTimeout(() => {
    let timed = document.querySelectorAll(".pop");
    timed.forEach((elem) => elem.remove());
    console.log(timed);
  }, 1000);
}
1;
// let data = [
//   333, 3213, 53, 645, 978, 231, 56, 678, 12, 4, 6, 62331, 546, 87, 1234, 54,
//   465, 765, 897, 90, 2341123, 34, 543,
// ];
// const findThree = (num) => {
//   let arr = String(num)
//     .split("")
//     .filter((elem) => elem == "3");
//   return arr.length;
// };
// btn.addEventListener("click", function () {
//   let sum = 0;
//   data.forEach((elem) => {
//     sum += findThree(elem);
//   });
//   console.log(sum)
// });
2;
// const nestedDig = (parent) =>{
//     if (parent.length >=5) return parent
//     let child = ''
//     for (let i = 1; i<=parent.length + 1; i++){
//         child += String(i)
//     }
//     parent.push(child)
//     return nestedDig(parent)
// }
// btn.addEventListener('click', function () {
//     console.log(nestedDig([]))
// })
3;
// let affairs = [
// 	{
// 		date:  '2019-12-29',
// 		event: 'name1',
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name2',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name3',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name4',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name5',
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name6',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name7',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name8',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name9',
// 	},
// ]
// btn.addEventListener('click', function () {
//     let result = new Set()
//     affairs.forEach(elem=>{
//         result.add(elem.date) 
//     })
//     console.log(result)
// })
4;
btn.addEventListener('click', function () {
    
})
5;
// btn.addEventListener('click', function () {})
6;
// btn.addEventListener('click', function () {})
