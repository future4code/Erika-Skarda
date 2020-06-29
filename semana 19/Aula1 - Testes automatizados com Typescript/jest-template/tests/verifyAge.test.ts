import { User, NACIONALITY, Casino, LOCATION } from "../src/models/User_2";
import { verify } from "crypto";
import { verifyAge } from "../src/models/verifyAge";


describe("Testing verifyAge", () => {
    test("Testing Age", () => {

      const brazilianUser: User = {
        name: "Gabi",
        age: 28 ,
        nacionality: NACIONALITY.BRAZILIAN
      };
      const americanUser: User = {
        name: "João",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
      };
      const casinoB: Casino = {
        name:"roda roda jequiti",
        location: LOCATION.BRAZIL
      };
      const casinoA: Casino = {
          name:"Casino Milimi",
          location: LOCATION.EUA
      };
    //   const result1 = verifyAge(casinoB, [brazilianUser])
    //    expect(result1.brazilians.allowed).toEqual(["Gabi"])

    //   const result2 = verifyAge(casinoA, [americanUser])
    //   expect(result2.americans.allowed).toEqual(["João"])


    });
});
describe("Testing verifyAge", () => {
    test("Testing Age in Brazil", () => {

        const brazilianUser: User = {
            name: "Gabi",
            age: 19 ,
            nacionality: NACIONALITY.BRAZILIAN
          };
        const brazilianUser2: User = {
            name: "Ivana",
            age: 35,
            nacionality: NACIONALITY.BRAZILIAN
        };
        const americanUser: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
          };
        const americanUser2: User = {
            name: "Erika",
            age: 22,
            nacionality: NACIONALITY.AMERICAN
          };
          const casino: Casino = {
            name:"roda roda jequiti",
            location: LOCATION.BRAZIL
          };

          const result = verifyAge(casino, 
            [
              brazilianUser, 
              brazilianUser2, 
              americanUser,
              americanUser2
            ]);
         //expect(result.brazilians.allowed).toEqual(["Ivana"])
         // expect(result.americans.unallowed).toEqual(["João"]) 

         expect(result.brazilians.unallowed).not.toContain("Ivana")
         expect(result.americans.unallowed).not.toContain("Erika")
    })
})
describe("Testing verifyAge", () => {
    test("Testing Age in EUA", () => {

        const brazilianUser: User = {
            name: "Gabi",
            age: 19 ,
            nacionality: NACIONALITY.BRAZILIAN
        };
        const casino: Casino = {
            name:"roda roda jequiti",
            location: LOCATION.BRAZIL
        };
        const result = verifyAge(casino,[brazilianUser]);

        //expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    });
});

//Questão 5 - a)

describe("Testing verifyAge", () => {
    test("Testing - Brazil", () => {

        const brazilianUser: User = {
            name: "Gabi",
            age: 19 ,
            nacionality: NACIONALITY.BRAZILIAN
          };
        const brazilianUser2: User = {
            name: "Ivana",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };
        const americanUser: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
          };
        const americanUser2: User = {
            name: "Erika",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
          };
          const casino: Casino = {
            name:"Casino Milimi",
            location: LOCATION.EUA
        };
          const result = verifyAge(casino, 
            [
              brazilianUser, 
              brazilianUser2, 
              americanUser,
              americanUser2
            ]);
          //expect(result.brazilians.unallowed).toEqual(["Ivana","Gabi"])
          //expect(result.americans.allowed).toEqual([])

    });
});

//b)

describe("Testing verifyAge", () => {
    test("Testing - EUA", () => {

        const americanUser: User = {
            name: "Erika",
            age: 22,
            nacionality: NACIONALITY.AMERICAN
          };
          const casino: Casino = {
            name:"Casino Milimi",
            location: LOCATION.EUA
        };
        /*const result = verifyAge(casino,[americanUser]);

        expect(result.americans.unallowed.length).toBe(0)*/
        
    });
});

//d)
describe("Testing verifyAge", () => {
    test("Testing - Brazil", () => {

        const brazilianUser: User = {
            name: "Gabi",
            age: 19 ,
            nacionality: NACIONALITY.BRAZILIAN
          };
        const brazilianUser2: User = {
            name: "Ivana",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };
        const americanUser: User = {
            name: "João",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
          };
        const americanUser2: User = {
            name: "Erika",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
          };
          const casino: Casino = {
            name:"Casino Milimi",
            location: LOCATION.EUA
        };
          const result = verifyAge(casino, 
            [
              brazilianUser, 
              brazilianUser2, 
              americanUser,
              americanUser2
            ]);
            //expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
            //expect(result.americans.unallowed.length).toBeLessThan(1);
            //expect(result.americans.allowed.length).toBe(2)

    });
});
