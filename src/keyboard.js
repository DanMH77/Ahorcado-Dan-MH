class Keyboard {
  constructor() {
    this.keys = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "Ñ",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }
  makeKeyboard() {
    return this.keys;
  }
  showCorrect(letter) {
    const array = this.keys.filter((item) => item != letter);
    console.log(array);
    return array;
    // this.keys.map((key) => {
    //     if(key == letter){
    //         console.log('son iguales', key , letter);

    //     }
    // });
  }

showInCorrect(letter){
  const array2 = this.keys.map((letraunoporuno =>{
    if(letraunoporuno == letter){
      console.log('correcta');
    }
    else{
          
    }
  }))
}


}
// const App = new keyboard();
// console.log(App.makeKeyboard());
// App.showCorrect("A");

export {Keyboard};
