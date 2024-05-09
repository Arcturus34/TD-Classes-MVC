import { Observer } from "./../pattern/observer.js";

export class View extends Observer 
{
    #controller;

    constructor(controlleur){
        super();
        this.#controller = controlleur;
        let button_inc = document.querySelector("#btn-increment");
        let button_dec = document.querySelector("#btn-decrement");

        button_inc.addEventListener("click", ()=>{
            this.#controller.incrementCounter();
            this.notify();
        });

        button_dec.addEventListener("click", ()=>{
            this.#controller.decrementCounter();
            this.notify();
        });

    }

    notify(){
        let text = document.querySelector("#txt-counter");
        text.innerHTML = this.#controller.getCounterValue();
    }
}
