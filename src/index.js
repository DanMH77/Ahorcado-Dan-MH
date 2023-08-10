import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";

const App = new Keyboard();
const panel = new Panel();

panel.optionWord();
const panelVector = panel.drawLines();
let conta = 7;
const counter = document.getElementById("counter");
const lettersVector = App.makeKeyboard();
const options = document.getElementById("options");
console.log(options);
App.showInCorrect("B");


const panelH = document.getElementById("panel");
lettersVector.map((key) => {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = key;
  div.classList = "keys";
  div.appendChild(h3);
  options.appendChild(div);


  div.addEventListener("click",evento => {
    const letter = evento.target.textContent;

    panel.chooseWord(h3.textContent.toLowerCase());
    const change = panel.isTrue(letter.toLowerCase());
    console.log(change);
   if(!change){
    conta--;
    counter.textContent=conta;
   }
    panelH.textContent = "";
    panelVector.map((lines) => {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      h3.classList = "font";
      div.classList = "lines";
      h3.textContent = lines;
      div.appendChild(h3);
      panelH.appendChild(div);
    });
  });
});

import { BodyParts } from "./bodyParts.js";

const bodyParts = new BodyParts();
const partsVector = bodyParts.insertImage();
const photos = document.getElementById("photos");

panelVector.map((lines) => {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = lines;
  div.classList = "lines";
  div.appendChild(h3);
  panelH.appendChild(div);
});
