class BodyParts {
    constructor(){
        this.images =['../assets/images/orca.png','../assets/images/cabeza.png','../assets/images/cuerpo.png','../assets/images/brazo derecho.png','../assets/images/brazo izquierdo.png','../assets/images/pierna derecha.png','../assets/images/pierna izquierda.png']
        this.next = 0;
    }

    insertImage(num){
      return this.images[num]
    }
}

const photos = document.getElementById('photos');
console.log(photos);

const newBodyParts = new BodyParts();

const img = document.createElement('img');
img.classList ='imgClass'
let conta = 0;




export {BodyParts};