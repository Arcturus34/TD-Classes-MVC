import { View } from "./../views/view.js";
import { Controller } from "./../controllers/controller.js";
import { Counter } from "./../models/counter.js"

const Conteur = new Counter();

console.log(Conteur.value);

function CV(){
        let controller = new Controller();
        let view = new View(controller);
}

window.addEventListener("load",CV);