// Proxy
// Real Subject 실제 객체
var Cash = /** @class */ (function () {
    function Cash() {
    }
    Cash.prototype.request = function (amount) {
        console.log("\uACB0\uC81C\uC694\uCCAD \uC644\uB8CC.. \uAE08\uC561 : ".concat(amount));
    };
    return Cash;
}());
var targetObject = new Cash();
// Proxy
var paymentProxy = new Proxy(targetObject, { get: function (object, prop) {
        if (prop === 'request') {
            return object[prop];
        }
        throw new Error('operation not implements!!');
    } });
paymentProxy.request(100);
