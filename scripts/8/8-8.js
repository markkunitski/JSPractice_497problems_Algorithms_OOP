import * as selectors from "../../selectors.js";
import pop from "../../selectors.js";
1;
// let coutries = {
//   Canada: ["Ottawa", "Edmonton", "Victoria", "Fredericton", "St. John"],
//   Brazil: ["São Paulo", "Rio de Janeiro", "Brasília", "Fortaleza", "Salvador"],
//   Bahrain: ["Manama", "Riffa", "Muharraq", "A'ali", "Isa Town"],
//   Australia: ["Sydney", "Albury", "Armidale"],
//   Argentina: ["San Nicolás de los Arroyos", "San Rafael", "Rafael Castillo"],
// };

// function appendOption(data, parent, type) {
//   if (type === "array") {
//     let child = document.createDocumentFragment();
//     coutries[data].forEach((elem) => {
//       let fragment = document.createElement("option");
//       fragment.value = elem;
//       fragment.textContent = elem;
//       child.appendChild(fragment);
//     });
//     parent.append(child);
//   } else if (type === "name") {
//     let child = document.createElement("option");
//     child.value = data;
//     child.textContent = data;
//     parent.append(child);
//   }
//   return parent;
// }
// function draw(type, selected) {
//   let root = selectors.div;
//   if (type === "country") {
//     let countrySelector = document.createElement("select");
//     countrySelector.name = "country";
//     countrySelector.id = "country";
//     for (let key in coutries) {
//       countrySelector = appendOption(key, countrySelector, "name");
//     }
//     countrySelector.addEventListener("change", function () {
//       let currentSelection = document.getElementById("country");
//       draw("town", currentSelection.value);
//     });
//     root.append(countrySelector);
//   } else if (type === "town") {
//     let previous = document.getElementById(type);
//     if (previous) {
//       root.removeChild(previous);
//     }
//     let townSelector = document.createElement("select");
//     townSelector.name = "town";
//     townSelector.id = "town";
//     townSelector = appendOption(selected, townSelector, "array");
//     root.append(townSelector);
//   }
// }

// btn.addEventListener("click", function () {
//   this.disabled = true;
//   draw("country", null);
//   let currentSelection = document.getElementById("country");
//   draw("town", currentSelection.value);
// });

2;
// function deviders(num) {
//   let deviders = [];
//   let flag = false;
//   let root = num ** 0.5;
//   for (let i = 2; i < root; i++) {
//     if (num % i === 0) {
//       deviders.push(i, num / i);
//     }
//   }
//   if (Number.isInteger(root)) deviders.push(root);
//   let sum = deviders.reduce((acc, curr) => acc + curr, 1);
//   return sum === num ? true : false;
// }
// selectors.btn.addEventListener("click", () => console.log(deviders(6)));
3;
let events = [
  {
    date: "2019-12",
    event: "name1",
  },
  {
    date: "2019-12",
    event: "name2",
  },
  {
    date: "2019-11",
    event: "name3",
  },
  {
    date: "2019-11",
    event: "name4",
  },
  {
    date: "2020-10",
    event: "name5",
  },
  {
    date: "2020-10",
    event: "name6",
  },
  {
    date: "2020-11",
    event: "name5",
  },
  {
    date: "2020-11",
    event: "name6",
  },
  {
    date: "2020-12",
    event: "name7",
  },
  {
    date: "2020-12",
    event: "name8",
  },
  {
    date: "2020-12",
    event: "name9",
  },
];
function findYear() {
  let result = {};
  events.forEach((event) => {
    let [year, month] = event.date.split("-");
    let data = event.event;
    if (result[year] === undefined) {
      result[year] = { [month]: [data] };
    } else {
      if (result[year][month]) {
        result[year][month].push(data);
      } else {
        result[year][month] = [data];
      }
    }
  });
  console.log(result);
}
selectors.btn.addEventListener("click", function () {
  findYear();
});
4;
// selectors.btn.addEventListener('click', function () {})
5;
// selectors.btn.addEventListener('click', function () {})
6;
// selectors.btn.addEventListener('click', function () {})
