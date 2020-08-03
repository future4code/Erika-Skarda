export const findMissingNumber = (arr: number[]): number => {
     const aN  = arr[0] + (arr.length -1 ) * 1
     const expectedSum  = arr.length * (arr[1] + aN)/2 
   
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    return expectedSum - sum;
  };

  console.log(findMissingNumber([1, 2, 3, 5]))