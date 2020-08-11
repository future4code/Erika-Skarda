let checkAnagram=(s:String, t:String)=>{
    s = s.split('').sort().join('');
    t = t.split('').sort().join('')
    return s===t
    }
    console.log(checkAnagram("banana", "banana"))



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

