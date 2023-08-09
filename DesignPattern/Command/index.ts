abstract class ICommand{
    abstract execute(args):void;
}
class State{
    private _state:number;
    constructor(state) {
        this._state = state;
    }
    getState(){
        return this._state
    }
    setState(value){
        this._state = value;
    }
}
class BankManager {
    private _state;
    private _commands = {};
    constructor(state) {
        this._state = state
    }
    registerCommand(...args){
        for (const cmd of args){
            this._commands[cmd.constructor.name] = cmd;
        }
    }
    executeCwd(cmdName,param){
        this._commands[cmdName].execute(this._state,param);
    }
}