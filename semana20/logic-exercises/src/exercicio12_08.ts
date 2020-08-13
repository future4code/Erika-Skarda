function somaTarget(array:number[], target:number):any {

    let numero1= 0;
    let numero2=0;
    let soma = 0;
    
    
    for(let i = 0; i <= array.length; i++) {
        numero1 = array[i]
     for(let j = 1; j <= array.length; j++) {
         numero2 = array[j]

         soma = numero1 + numero2

         if(soma === target) {

            return array[i]
         } else  {

            return false
         }


        
     }


        }
        
    
    return soma
 
}
 console.log(somaTarget([0, 1, 2 ,4, 3], 3))

