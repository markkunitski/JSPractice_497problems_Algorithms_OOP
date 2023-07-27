import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
function toggleBoxes() {
  [...selectors.boxes].forEach((elem) => {
    if (elem.checked) {
      elem.checked = false
    } else {
        elem.checked = true
    }
  });
}
btn.addEventListener("click", toggleBoxes);
2;
// btn.addEventListener('click', function () {})
3;
// btn.addEventListener('click', function () {})
4;
// btn.addEventListener('click', function () {})
5;
// btn.addEventListener('click', function () {})
6;
// btn.addEventListener('click', function () {})
