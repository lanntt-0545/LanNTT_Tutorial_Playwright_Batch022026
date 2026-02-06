"use strict";
/*
Import PI từ constants.ts.

Import add và subtract từ mathUtils.ts.

Viết hàm calculateCircleArea(radius: number) sử dụng PI.

Gọi các hàm add, subtract và calculateCircleArea rồi in kết quả ra màn hình.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var mathUtils_1 = require("./mathUtils");
function calculateCircleArea(radius) {
    return constants_1.default * radius * radius;
}
console.log("Tong cua 1 va 2: ".concat((0, mathUtils_1.add)(1, 2)));
console.log("Hieu cua 2 va 4: ".concat((0, mathUtils_1.subtract)(2, 4)));
console.log("calculateCircleArea: ".concat(calculateCircleArea(2)));
