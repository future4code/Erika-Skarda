const verifyString = (string1, string2) => {
    if (string1 === string2) {
        return true;
    }
    else {
        return false;
    }
};
const verifyString2 = (string1, string2) => {
    if (string1.toUpperCase() == string2.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
};
console.log(verifyString2("banana", "Banana"));
//# sourceMappingURL=exercicio3.js.map