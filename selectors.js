export const inp2 = document.getElementById("in2");
export const inps = document.querySelectorAll("input");
export const p1 = document.getElementById("p1");
export const p2 = document.getElementById("p2");
export const p3 = document.getElementById("p3");
export const btn = document.getElementById("btn");
export const div = document.getElementById("div");
export const ps = document.querySelectorAll("p");
export const a1 = document.querySelector("#a1");
export const a2 = document.querySelector("#a2");
export const as = document.querySelectorAll("a");
export const lis = document.querySelectorAll("ul li");
export const area = document.querySelector("#area");
export const ul = document.querySelector(".ulclass");
export const divs = document.querySelectorAll("#div div");
export const table = document.querySelector('#table');
export const btns = document.querySelectorAll(".fordivs");
export const boxes = document.getElementsByClassName("check");


export default function pop(state) {
    let child = document.createElement("div");
    child.classList.add("pop", `${state}`);
    document.body.firstElementChild.appendChild(child);
    setTimeout(() => {
      let timed = document.querySelectorAll(".pop");
      timed.forEach((elem) => elem.remove());
      console.log(timed);
    }, 1000);
  }