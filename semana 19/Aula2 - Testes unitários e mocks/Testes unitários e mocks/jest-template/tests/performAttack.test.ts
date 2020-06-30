import { Character } from "../src/model/Character";
import { performAttack2 } from "../src/validateCharacter";

//4.a
describe("Testing performAttack", () => {
  test("testing with mocks", () => {

    const validatorMock = jest.fn(() => {
        return true
    });

    const attacker:Character = {

        name:"Raiden",
        life:1500,
        strength:300,
        defense: 100
    }
    const defender:Character = {
        name:"Mileena",
        life:1500,
        strength:200,
        defense:100
    }
    
    performAttack2(attacker, defender, validatorMock as any) 

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2)
    expect(validatorMock).toHaveReturnedTimes(2);
    });
    //4 b.
    test("Creating Mocks", () => {

        const validatorMock = jest.fn(() => {
                return false
            });

        const defender:Character = {
            name:"Cassie Cage",
            life:1500,
            strength:1450,
            defense:900
        }
        const attacker:Character = {
            name:"Johnny Cage",
            life:null,
            strength:200,
            defense:100
        }
        try {

            performAttack2(attacker, defender, validatorMock);

            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)

        } catch(error) {

            expect(error.message).toBe("Invalid character");
        }
        

 //expect(validatorMock).toHaveBeenCalledWith(attacker,defender)

    });
})