
class Result{
    constructor(){
        this.message ="volver a Empezar";
    }

    showResult(){
     
    }
    
      
      loser (){
        document.querySelector('.lose').textContent= '¡You Lose!😵';
        
        var button =document.createElement('button');
        button.type= 'button';
        button.innerHTML='Try Again';
         button.className='try';
         var container =document.getElementById('gameover');
        container.appendChild(button);
        button.addEventListener("click",function (){
          location.reload();
        })
        
          }
          winner (){
            const word= 'The word was:'+panel.lastletter;
            document.querySelector('.lose').textContent= '¡You Win!';
            var button =document.createElement('button');
            button.type= 'button';
            button.innerHTML='Try Again';
             button.className='try';
             var container =document.getElementById('gameover');
            container.appendChild(button);
            button.addEventListener("click",function (){
              location.reload();
            })
            
              }

              songLose() {
                var audioLoser= document.getElementById("song2");
                var audiolos= document.getElementById("song5");
                audiolos.play();
                audioLoser.play();
              }
      
              songFalse() {
                var audioFalse= document.getElementById("song3");
                audioFalse.play();
              }
     
              songWin() {
                var audioWin= document.getElementById("song4");
                var win= document.getElementById("song6");
                audioWin.play();
                win.play()
              }

   
         
}


const App = new Result();
console.log(App);
export {Result};