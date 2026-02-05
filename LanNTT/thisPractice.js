var Counter = /** @class */ (function () {
    function Counter(number1) {
        this.count = 0;
        this.count = number1;
    }
    Counter.prototype.increment = function () {
        this.count = this.count + 1;
        console.log("Count is now: ".concat(this.count));
    };
    Counter.prototype.reset = function () {
        this.count = 0;
        console.log("Counter reset");
        console.log("NCount is now: ".concat(this.count));
    };
    return Counter;
}());
var counter1 = new Counter(1);
counter1.increment();
counter1.increment();
counter1.reset();
