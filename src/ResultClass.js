class Result{
    constructor(){
        this.message ="volver a Empezar";
    }

    showResult(valor){
        if(valor === true){
         return this.message = 'victoria'
        } else{
            return this.message = 'Perdiste'
        }
    }
}


const App = new Result();
console.log(App.showResult(true));