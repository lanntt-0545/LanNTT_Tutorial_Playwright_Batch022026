const soThuNhat: number = 1.9;
const soThuHai: number =2.5;

function sum(a: number, b: number): number{
    return a+b;
}

const multiply = (a:number, b: number): number => {
    return a*b;
}

function greet (name: string, role: string = "Guest"): void {
    console.log(`Hello ${name}, your role is ${role}`);
}

async function delayPrint(msg: string, time: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, time));
    console.log(msg);
}
greet("Lan", "Admin");
console.log(`Tong cua 2 so la: ${sum(soThuNhat,soThuHai)} `);
console.log(`Tich cua 2 so la: ${multiply(soThuNhat,soThuHai)} `);
delayPrint("Message in sau 2s",2000)

