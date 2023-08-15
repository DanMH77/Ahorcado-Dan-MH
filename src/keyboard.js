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
  }

showInCorrect(letter){
  const array2 = this.keys.map((thing =>{
    if(thing == letter){
      console.log('correcta');
    }
    else{
            
    }
  }))
}
}

export {Keyboard};
