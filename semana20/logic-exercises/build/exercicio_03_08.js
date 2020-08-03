"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMissingNumber = void 0;
exports.findMissingNumber = (arr) => {
    const aN = arr[0] + (arr.length - 1) * 1;
    const expectedSum = arr.length * (arr[1] + aN) / 2;
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return expectedSum - sum;
};
console.log(exports.findMissingNumber([1, 2, 3, 5]));
//# sourceMappingURL=exercicio_03_08.js.map