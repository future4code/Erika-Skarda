function negativeNumbers(array: Array<Array<number>>){

  let arrayNegative = 0

  let qtd = array.length;

    for(let i = 0; i < array.length; i++) {

      const arrayInterno = array[i]
      
      for(let j = 0; j < arrayInterno.length; j++) {

       if(arrayInterno[j] < 0){

         arrayNegative = arrayNegative + 1
       }   

      } 
        
    }  

    return arrayNegative
  }


console.log(negativeNumbers([[1,-1],[-9,-7]]));