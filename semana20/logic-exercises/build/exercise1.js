let array = [1, 2, 3];
let maior = 0;
let menor = 0;
array.sort(function (a, b) {
    return b - a;
});
maior = array[0];
menor = array[(array.length - 1)];
console.log(maior, menor);
//# sourceMappingURL=exercise1.js.map