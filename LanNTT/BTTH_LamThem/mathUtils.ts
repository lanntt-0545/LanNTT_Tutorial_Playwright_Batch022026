/*
Bước 2: Tại file mathUtils.ts (Sử dụng Named Export)
Viết một hàm add(a: number, b: number) trả về tổng 2 số.

Viết một hàm subtract(a: number, b: number) trả về hiệu 2 số.

Xuất cả 2 hàm này ra theo kiểu Named Export.
*/

export function add(a: number, b: number): number{
    return a+b;
}
export function subtract(a: number, b: number): number{
    let sub : number = 0;
    if (a>=b){
        sub = a-b;
    }else{
    sub = b-a;
    }
    return sub;
}