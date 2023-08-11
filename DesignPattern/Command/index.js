var ICommand = /** @class */ (function () {
    function ICommand() {
    }
    return ICommand;
}());
//Receiver
var State = /** @class */ (function () {
    function State(state) {
        this._state = state;
    }
    State.prototype.getState = function () {
        return this._state;
    };
    State.prototype.setState = function (value) {
        this._state = value;
    };
    return State;
}());
//Invoker
var BankManager = /** @class */ (function () {
    function BankManager(state) {
        this._commands = {};
        this._state = state;
    }
    BankManager.prototype.registerCommand = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var cmd = args_1[_a];
            this._commands[cmd.constructor.name] = cmd;
        }
    };
    BankManager.prototype.executeCmd = function (cmdName, param) {
        this._commands[cmdName].execute(this._state, param);
    };
    return BankManager;
}());
//Command
var Deposit = /** @class */ (function () {
    function Deposit() {
    }
    Deposit.prototype.execute = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var state = params[0], amount = params[1];
        var prevState = state.getState();
        state.setState(prevState + amount);
    };
    return Deposit;
}());
var Withdrawal = /** @class */ (function () {
    function Withdrawal() {
    }
    Withdrawal.prototype.execute = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var state = params[0], amount = params[1];
        var prevState = state.getState();
        state.setState(prevState - amount);
    };
    return Withdrawal;
}());
// command 생성
var deposit = new Deposit();
var withdrawal = new Withdrawal();
// receiver 생성
var state = new State(0);
// invoker 생성
var bankManager = new BankManager(state);
// command 등록
bankManager.registerCommand(deposit, withdrawal);
// command 지시
bankManager.executeCmd("Deposit", 100);
bankManager.executeCmd("Deposit", 1000);
console.log(state.getState());
bankManager.executeCmd('Withdrawal', 1000);
console.log(state.getState());


// 간단히 정의하면 명령하는 객체가 명령받는 객체들의 모든 의존성을 필요없게 만들수 있음.
// 각 커맨드 객체에 동일한 함수 들어가고 컨트롤하는 쪽에선 그 객체들 등록하고 해당 메소드만 부르면 됨.