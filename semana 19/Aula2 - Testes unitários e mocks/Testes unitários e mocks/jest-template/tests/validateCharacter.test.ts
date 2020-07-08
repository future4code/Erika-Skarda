import { validateCharacter } from "../src/validateCharacter"
import { Character } from "../src/model/Character"

//2 a.
describe("Testing validateCharacte", () => {
    
    test("Should return false for empty name", () => {

     const input:Character = {
         name: '',
         life: 1500,
         strength: 300,
         defense: 200
     }

     const output = validateCharacter(input)
     expect(output).toBeFalsy()

    });
    // 2 b.
    test("Should return true for null life", () => {

        const input = validateCharacter ({
            name: "Jade",
            life: 0,
            strength: 800,
            defense:1000
        })

        expect(input).toBeTruthy()
        
    });
    // 2 c.
    test("Should return true for null strength  ", () => {

        const input = validateCharacter({
            name: "Shiva",
            life: 1500,
            strength: null,
            defense:800
        })
        expect(input).toBeTruthy()
    })
    // 2 d.
    test("Should return true for null defense", () => {

        const input:Character = {
         name:"Sonia",
         life:1500,
         strength:900,
         defense: null
        }
        const output = validateCharacter(input)
        expect(output).toBeTruthy()
    });
    // 2 e.
    test("Should return true for negative life", () => {

        const input:Character = {
         name: "Scorpion",
         life: - 400,
         strength:900,
         defense: null
        }
        const output = validateCharacter(input)
        expect(output).toBeFalsy()
    });
    // 2 f.
    test("Should return true for defense ou life ou strength = 0", () => {

        const input: Character = {
            name:"SubZero",
            life:0,
            strength: 1200,
            defense:300
        }
        const output = validateCharacter(input)
        expect(output).toBeTruthy()
    });
    //2 g.
    test("Should return true for defense ou life ou strength = 0", () => {

        const input: Character = {
            name:"Kitana",
            life:1500,
            strength: 1200,
            defense:300
        }
        const output = validateCharacter(input)
        expect(output).toBeTruthy()
    });

})


