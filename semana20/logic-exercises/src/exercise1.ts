/*function exercise1_a(array:number[]):object {

    let soma: number = 0;
    let multi:number = 1;

    for(let i = 0; i < array.length; i++) {
        
        multi *= array[i] , 
        soma += array [i]
        
    }
   

  const resposta =  {

        soma: soma,
        quantidade: array.length,
        multiplicacao: multi
       
    }

    return resposta
}

console.log(exercise1_a([1, 2, 3]))*/

let array:Array<number> = [1, 2, 3 ]
let maior:number = 0
let menor:number = 0

array.sort(function(a:number, b:number) : any {
  
return b - a
   
})

maior = array[0]
menor = array[(array.length - 1)]
console.log(maior, menor)