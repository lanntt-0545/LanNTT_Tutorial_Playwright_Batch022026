class Counter{
    count: number = 0;
    constructor(number1: number){
        this.count = number1;
    }
    increment(): void{
        this.count = this.count+1;
        console.log(`Count is now: ${this.count}`)
    }
    reset():void{
        this.count = 0;
        console.log(`Counter reset`);
        console.log(`NCount is now: ${this.count}`)
    }
}

const counter1 = new Counter(1);
counter1.increment();
counter1.increment();
counter1.reset();