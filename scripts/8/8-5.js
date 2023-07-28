import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
let data = selectors.p1.innerText;
function createList(letter, wordsArr) {
  let parent = document.createElement("ul");
  wordsArr.forEach((word) => {
    let child = document.createElement("li");
    child.textContent = word;
    parent.appendChild(child);
  });
  let domElem = selectors.div;
  let name = document.createElement("h2");
  name.textContent = letter;
  domElem.appendChild(name);
  domElem.append(parent);
}
function dataFilter(elem) {
  let arr = elem.toLowerCase().trim().split(" ");
  let result = arr.map((elem) => {
    if (
      elem[elem.length - 1].toLowerCase() == elem[elem.length - 1].toUpperCase()
    ) {
      return elem.slice(0, elem.length - 1);
    } else {
      return elem;
    }
  });
  return result;
}
const createObject = (data) => {
  let result = [];
  data.forEach((elem) => {
    let firtsLetter = elem[0];
    let targetIndex;
    result.forEach((acc, index) => {
      if (acc[firtsLetter]) {
        targetIndex = index;
        return;
      }
    });
    if (targetIndex === undefined) {
      let newO = { [firtsLetter]: [elem] };
      result.push(newO);
    } else if (!result[targetIndex][firtsLetter].includes(elem)){
        result[targetIndex][firtsLetter].push(elem);
    }
    
  });
  result.forEach((elem) => {
    let letter = Object.keys(elem);
    let arr = elem[letter];
    createList(letter, arr);
  });
};
selectors.btn.addEventListener("click", function () {
  let filtered = dataFilter(data);
  createObject(filtered);
});
2;
// selectors.btn.addEventListener('click', function () {})
3;
// selectors.btn.addEventListener('click', function () {})
4;
// selectors.btn.addEventListener('click', function () {})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
