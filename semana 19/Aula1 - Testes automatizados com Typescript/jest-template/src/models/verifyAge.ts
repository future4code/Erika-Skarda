import { Casino, User, Result, LOCATION, NACIONALITY } from "./User_2";

export function verifyAge (casino:Casino, users:Array<User>) : Result {
    const allowed: Array<User> = []
    const unallowed: Array<User> = []

    for(const user of users) {
     if(casino.location === LOCATION.BRAZIL) {
         if(user.age >= 18) {

             allowed.push(user)

         } else {

             unallowed.push(user)
         }
     } else if(casino.location === LOCATION.EUA) {
         
        if(user.age < 21) {
            
            unallowed.push(user)

         } else if(user.age >= 21) {

             allowed.push(user)

         }
         break;
        }
    }
    return {
        brazilians: {

          allowed: allowed
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((u) => u.name),
          unallowed: unallowed
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((u) => u.name),
        },
        americans: {
            
          allowed: allowed
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((u) => u.name),
          unallowed: unallowed
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((u) => u.name),
        },
      };
    }