import { performPurchase } from "../src/performPurchase"
import { User } from "../src/models/User"

describe("Testing the function performPurchase", () => {
  
  test("Testing balance greater than value", () => {
    const userTest: User = { 
     name: "Erika",
     balance: 200

    }
    const response = performPurchase(userTest, 1000)

    expect(response).toEqual(undefined)

  });

});