import { Counter } from "./../models/counter.js"

const Conteur = new Counter();

console.log(Conteur.value);

function inc(){
    Conteur.incrementValue();
    console.log(Conteur.value);
}

function dec(){
    Conteur.decrementValue();
    console.log(Conteur.value);
}

let button_inc = document.querySelector("#btn-increment");
let button_dec = document.querySelector("#btn-decrement");

button_inc.addEventListener("click", inc);
button_dec.addEventListener("click", dec)