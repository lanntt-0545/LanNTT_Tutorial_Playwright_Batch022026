/*
Import PI từ constants.ts.

Import add và subtract từ mathUtils.ts.

Viết hàm calculateCircleArea(radius: number) sử dụng PI.

Gọi các hàm add, subtract và calculateCircleArea rồi in kết quả ra màn hình.
*/

import PI from "./constants";
import {add, subtract} from "./mathUtils";

function calculateCircleArea(radius: number): number{
    return PI*radius*radius;
}

console.log(`Tong cua 1 va 2: ${add(1,2)}`);
console.log(`Hieu cua 2 va 4: ${subtract(2,4)}`);
console.log(`calculateCircleArea: ${calculateCircleArea(2)}`);
