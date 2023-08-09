// 구독해서 이벤트 알려주는 패턴

class Subject{
    constructor() {
        this.observers = []
    }
    getObserversList(){
        return this.observers
    }
    subscribe(observer){
        this.observers.push(observer);
    }
    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs!==observer);
    }
    notyAll(){
        this.observers.forEach((subscriber) => {
            try{
                subscriber.update(this.constructor.name);
            }catch (err){
                console.error('error',err);
            }
        })
    }
}

class Observer{
    constructor(name) {
        this.name = name
    }
    update(subj){
        console.log(`${this.name}:notified from ${subj} class`)
    }
}

const sbj = new Subject()

const obj1 = new Observer('1')
const obj2 = new Observer('2')
sbj.subscribe(obj1)
sbj.subscribe(obj2)
sbj.notyAll()