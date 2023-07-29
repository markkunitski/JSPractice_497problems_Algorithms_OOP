import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// btn.addEventListener("click", function () {
//     let navs = document.querySelectorAll('.nav')
//     navs.forEach(nav=>{
//         nav.addEventListener('click', function(e){
//             e.preventDefault()
//             let target = nav.nextElementSibling
//             if (target && target.classList.contains('drop')){
//                 target.classList.toggle('dnone')
//             }
//         })
//     })
// });
2;
// function randomColor() {
//   return Math.floor(Math.random() * 256);
// }
// selectors.btn.addEventListener("click", function () {
//   let elemsFromParent = document.querySelectorAll("#text p");
//   elemsFromParent.forEach(elem=>{
//     elem.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
//   })
// });
3;
// let cross = document.querySelector("#closure");
// cross.addEventListener("click", function () {
//   cross.closest("div").classList.add("dnone");
// });

// document.addEventListener("click", (e) => {
//   let closureDiv = document.querySelector("#div");
//   if (e.target != closureDiv && !closureDiv.classList.contains("dnone")) {
//     closureDiv.classList.add("dnone");
//   }
// });

4;
// selectors.area.addEventListener("keydown", function (e) {
//   if (e.shiftKey) {
//     if (e.key == "Enter") {
//       let data = this.value.split('\n');
//       data.forEach(elem=>{ 
//         if (elem == '') return
//         let child = document.createElement('li')
//         child.textContent = elem.trim()
//         selectors.ul.append(child)
//       })
//     }
//   }
// });
5;
// let affairs = {
// 	'2019-12-31': ['1', '2', '3'],
// 	'2018-11-29': ['182'],
// 	'2018-11-30': ['18'],
// 	'2018-12-27': ['18'],
// 	'2019-12-29': ['10', '11'],
// 	'2019-12-30': ['12', '13'],
// 	'2018-12-30': ['18'],
// 	'2018-12-31': ['18'],
// }
// selectors.btn.addEventListener('click', function () {
//     for (let key in affairs){
//         let date = key.split('-')
//         if (date[0] === '2018') console.log(affairs[key])
//     }
// })
6;
// selectors.btn.addEventListener('click', function () {})
