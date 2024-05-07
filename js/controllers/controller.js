export class Controller extends Notifier
{
    #counter;

    constructor()
    {
        super();
        this.#counter = Counter;
    }
    
    incrementCounter(){

    }

    decrementCounter(){

    }

    getCounterValue(){
        return this.#counter;
    }
}