import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./bodyParts.js";
import { Result } from "./ResultClass.js";

const App = new Keyboard();
const panel = new Panel();
const bodyParts = new BodyParts();
const result = new Result();
panel.optionWord();
const panelVector = panel.drawLines();
let conta = 7;
let contaimg = 0;
const counter = document.getElementById("counter");
const lettersVector = App.makeKeyboard();
const options = document.getElementById("options");
const boton = document.getElementById('boton')
const dad = document.querySelector('.dad')
console.log(options);
App.showInCorrect("B");
const word= 'The word was:'+panel.lastletter;
console.log(word);
const photos = document.getElementById("photos");


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
    evento.target.disabled= true;

    panel.chooseWord(h3.textContent.toLowerCase());
    const change = panel.isTrue(letter.toLowerCase());
    console.log(change);

    const youWin = panel.isAWin();

    if(youWin){
      result.winner();
      result.songWin();
      dad.remove();
    }

   if(!change){
    
    console.log(evento.target);
    conta--;
    counter.textContent=conta;
    photos.src = bodyParts.insertImage(contaimg);
    contaimg++;
    result.songFalse();
    
    
  } 
    if(conta===0){
       result.loser();
       result.songLose();
       dad.remove();
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






panelVector.map((lines) => {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = lines;
  div.classList = "lines";
  div.appendChild(h3);
  panelH.appendChild(div);
});
