class Panel {
    constructor(){
        this.choiseWord =['perro','pala','comer','trabajar','otorrinonarringologo'];
        this.lastletter = '';
        this.vectAnswer = [];
        this.vectResult = [];
        this.option = 0;
    }
      optionWord(){
        this.option = Math.floor(Math.random() *(this.choiseWord.length -0) + 0)
        this.lastletter = this.choiseWord[this.option];
        this.vectResult = Array.from(this.lastletter);
        console.log(this.vectResult);
      } 


    drawLines(){

        for(let index = 0; index < this.vectResult.length; index++){
            console.log('_');
            this.vectAnswer.push('_')
        }
       return this.vectAnswer
    }

    chooseWord(word){
    const selection = this.vectResult.map((insert, index) => {
        if(insert == word){
            this.vectAnswer[index] = word;
        }

        console.log(this.vectAnswer);
    } ) 
    }


    checkWork(letter){
        this.choiseWord.filter((word, index) =>{
            if(word === letter){
                console.log(index);
                this.vectAnswer[index] = letter
            }
        })
        return this.vectAnswer
    }



      isTrue(letter){
            for(let index = 0; index < this.vectAnswer.length;index++){
            if(this.vectAnswer[index] == letter || this.vectAnswer[index] == letter.toLowerCase()){
            return true
        }
    }
 }


}


const App = new Panel();


console.log(App.vectAnswer);

export {Panel};