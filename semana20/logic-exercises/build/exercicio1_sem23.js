const checkAnagrams = (firstString, secondString) => {
    if (firstString.length !== secondString.length) {
        return false;
    }
    const firstStringHash = {};
    const secondStringHash = {};
    for (let i = 0; i < firstString.length; i++) {
        const firstStringChar = firstString[i];
        const secondStringChar = secondString[i];
        if (firstStringHash[firstStringChar]) {
            firstStringHash[firstStringChar]++;
        }
        else {
            firstStringHash[firstStringChar] = 1;
        }
        if (secondStringHash[secondStringChar]) {
            secondStringHash[secondStringChar]++;
        }
        else {
            secondStringHash[secondStringChar] = 1;
        }
    }
    for (const key in firstStringHash) {
        if (firstStringHash[key] !== secondStringHash[key]) {
            return false;
        }
    }
    return true;
};
let homer = {
    name: "Homer Simpson",
    cartoon: "Simpsons",
};
homer.phrase = "Moe, me vê mais uma Duff Beer";
homer["asiodjhisaohdiosahjdoih"];
const key = "phrase";
homer[key];
for (const key in homer) {
    console.log();
    console.log("key: ", key);
    console.log("value: ", homer[key]);
}
console.log(Object.keys(homer));
for (const key of Object.keys(homer)) {
    console.log();
    console.log("key: ", key);
    console.log("value: ", homer[key]);
}
const checkPalindrome = (input) => {
    const precomputedInput = removeAllSpaces(input).toLowerCase();
    return precomputedInput === reverseString(precomputedInput);
};
const reverseString = (input) => {
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        if (input[i] !== " ") {
            result += input[i];
        }
    }
    return result;
};
const removeAllSpaces = (input) => {
    let result = input;
    while (result.indexOf(" ") !== -1) {
        result = result.replace(" ", "");
    }
    return result;
};
;
const checkOneEdit = (firstString, secondString) => {
    if (firstString === secondString) {
        return false;
    }
    if (firstString.length > (secondString.length + 1)) {
        return false;
    }
    else if (firstString.length < (secondString.length - 1)) {
        return false;
    }
    let char = 0;
    for (const x of secondString) {
        if (firstString.indexOf(x) !== -1) {
            char++;
        }
    }
    ;
    return (char <= firstString.length - 1 &&
        char >= firstString.length + 1);
};
;
const compressionString = (input) => {
    const substrings = [];
    let firstChar = input[0];
    let charCount = 0;
    for (const char of input) {
        if (char !== firstChar) {
            substrings.push(firstChar + charCount);
            firstChar = char;
            charCount = 0;
        }
        charCount++;
    }
    substrings.push(firstChar + charCount);
    let result = "";
    for (const key of substrings) {
        result += key;
    }
    return result.length > input.length ? "Não atende a regra " : result;
};
console.log(compressionString("banana"));
//# sourceMappingURL=exercicio1_sem23.js.map