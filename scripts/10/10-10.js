import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
let data = "12/16";
function deviders(num) {
  let result = [num];
  let root = num ** 0.5;
  for (let i = 2; i < root; i++) {
    if (num % i === 0) {
      result.push(i, num / i);
    }
  }
  if (Number.isInteger(root)) result.push(root);
  return result.sort((a, b) => a - b);
}
function nn1() {
  let [num1, num2] = data.split("/").map(Number);
  let devNum1;
  let devNum2;
  let result = [[`${num1}/${num2}`]];
  let count = 0;
  let flag = false;

  do {
    count++;
    devNum1 = deviders(num1);
    devNum2 = deviders(num2);
    devNum1.forEach((elem, index) => {
      if (devNum2.includes(elem)) {
        result.push([`${num1 / elem}/${num2 / elem}`]);
      } else if (index == devNum1.length - 1) {
        flag = true;
      }
    });
  } while (count < 500 && flag == false);
  console.log(result.join(" = "));
}

selectors.btn.addEventListener("click", nn1);
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
