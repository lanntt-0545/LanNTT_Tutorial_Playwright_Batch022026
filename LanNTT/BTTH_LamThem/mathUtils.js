"use strict";
/*
Bước 2: Tại file mathUtils.ts (Sử dụng Named Export)
Viết một hàm add(a: number, b: number) trả về tổng 2 số.

Viết một hàm subtract(a: number, b: number) trả về hiệu 2 số.

Xuất cả 2 hàm này ra theo kiểu Named Export.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    var sub = 0;
    if (a >= b) {
        sub = a - b;
    }
    else {
        sub = b - a;
    }
    return sub;
}
