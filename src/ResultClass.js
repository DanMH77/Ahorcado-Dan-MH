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
                audioLoser.play();
              }
      
              songFalse() {
                var audioFalse= document.getElementById("song3");
                audioFalse.play();
              }
     
              songWin() {
                var audioWin= document.getElementById("song4");
                audioWin.play();
              }

   
         
}


const App = new Result();
console.log(App);
export {Result};