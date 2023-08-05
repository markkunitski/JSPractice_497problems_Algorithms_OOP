import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// document.addEventListener("keydown", async function (e) {
//   let selected;
//   if (e.ctrlKey && e.key === "Enter") {
//     selected = window.getSelection().toString().trim();
//     if (selected) {
//       try {
//         await navigator.clipboard.writeText(selected);
//         console.log("copied to clipboard");
//       } catch (err) {
//         console.error("error", err);
//       }
//     }
//   }
// });
2;
// selectors.area.addEventListener("keydown", function (e) {
//   if (e.key === "Tab") {
//     let position = selectors.area.selectionStart;
//     let current = selectors.area.value.trim();
//     console.log(current.slice(0, position))
//     console.log(current.slice(position))
//     selectors.area.value =
//       current.slice(0, position) + "\t" + current.slice(position);
//   }
// });
3;
function store(method) {
  let store = [];
  let functions = {
    add: (value) => {
      store.push(value);
      console.log(store);
    },
  };
  return functions[method];
}
let storeAdd = store("add");
let storeAdd2 = store('add')
selectors.btn.addEventListener("click", function () {
  storeAdd(1);
  storeAdd(2);
  storeAdd(3);
  storeAdd2(1);
  storeAdd2(1);
});
4;
// selectors.btn.addEventListener('click', function () {})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
