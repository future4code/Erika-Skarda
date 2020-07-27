interface HashTableForAnagrams {
    [index: string]: number;
  }
  
  const checkAnagrams = (firstString: string, secondString: string): boolean => {
    if (firstString.length !== secondString.length) {
      return false;
    }
  
    const firstStringHash: HashTableForAnagrams = {};
    const secondStringHash: HashTableForAnagrams = {};
  
    for (let i = 0; i < firstString.length; i++) {
      const firstStringChar = firstString[i];
      const secondStringChar = secondString[i];
  
      if (firstStringHash[firstStringChar]) {
        firstStringHash[firstStringChar]++;
      } else {
        firstStringHash[firstStringChar] = 1;
      }
  
      if (secondStringHash[secondStringChar]) {
        secondStringHash[secondStringChar]++;
      } else {
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
//************************************************************************************************** */

  interface CaratoonCharacter {
    [index: string]: string | number;
    name: string;
    cartoon: string;
  }
  
  let homer: CaratoonCharacter = {
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
  //********************************************************************* //
  const checkPalindrome = (input: string): boolean => {
    const precomputedInput = removeAllSpaces(input).toLowerCase();
    return precomputedInput === reverseString(precomputedInput);
  };
  
  const reverseString = (input: string): string => {
    let result = "";
  
    for (let i = input.length - 1; i >= 0; i--) {
      if (input[i] !== " ") {
        result += input[i];
      }
    }
    return result;
  };
  
  const removeAllSpaces = (input: string): string => {
    let result = input;
    while (result.indexOf(" ") !== -1) {
      result = result.replace(" ", "");
    }
    return result;
  };
  //***************************************************************************************//

  interface HashTableForOneEdit {

    [index: string]: number;

  };

  const checkOneEdit = (firstString: string, secondString: string): boolean => {

        if(firstString === secondString) {

            return false
        }

        if(firstString.length > (secondString.length + 1)) { //erik < erika // erika > erik

            return false;

        } else if (firstString.length < (secondString.length - 1)) {

            return false
        }

    let char = 0;
        for (const x of secondString) {

            if(firstString.indexOf(x) !== -1) {
                char ++
            }
        };

    return (
    char <= firstString.length - 1 &&
    char >= firstString.length + 1
    )
  }
    // const firstStringOneEdit: HashTableForOneEdit = {};
    // const secondStringOneEdit: HashTableForOneEdit = {};

    // for(let i = 0; i < firstString.length; i++) {

    //     const firstStringChar = firstString[i];
    //     const secondStringChar = secondString[i];

    //     if(firstStringOneEdit[firstStringChar]) {

    //         firstStringOneEdit[firstStringChar] ++

    //     } else {

    //         firstStringOneEdit[firstStringChar] = 1;
    //     }

    //     if(secondStringOneEdit[secondStringChar]) {

    //         secondStringOneEdit[secondStringChar] ++;

    //     } else {

    //         secondStringOneEdit[secondStringChar] = 1;
    //     }
    // }

    // for(const x in firstStringOneEdit) {

    //     if(firstStringOneEdit[x] !== secondStringOneEdit[x])
    // }
    interface HashTableForCompression {

        [index: string]: number;
    
      };
const compressionString = (input: string): any => {

    //const compressionInput : HashTableForCompression = ""
    const substrings: string[] = [];
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

  return result.length > input.length ? "Não atende a regra ": result;
};

console.log(compressionString("banana"))