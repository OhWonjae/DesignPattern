class Singleton{
    constructor(){
        if (Singleton.instance){
            return console.warn('Singleton already instantiated!!')
        }
        Singleton.instance = this;
        this.version = Date.now();
        this.config = "test";
    }
    static getInstance(){
        if (!this.instance){
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

const singleton = new Singleton()

const singleton2 = new Singleton()