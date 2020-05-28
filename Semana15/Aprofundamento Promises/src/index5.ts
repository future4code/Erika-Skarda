//Exercício 5
// const sendNotifications = async (
//     users: User[],
//     message: string
//   ): Promise<void> => {
//     const promiseArray: Promise<any>[] = [];
//     for (const user of users) {
//       await axios.post(`${baseUrl}/notifications/send`, {
//         subscriberId: user.id,
//         message: message,
//       });
//     }
  
//     console.log("All notifications sent");
//   };
//a) O ideal é usar os métodos como for, for of porque o o forEach, filter,reduce, map...
//b) 


import axios from 'axios';
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type User = {  
    email: string,
    name: string,
    id: string
};
const promiseArray = []

const main = async () => {
    try{
     const allSubscribers = await getAllSubscribers(); 
     console.log(allSubscribers)

     const news = await createNews("Coronavírus","Vacina",1589818936000); 
     
     for(const subscriber of allSubscribers) {
        promiseArray.push(
            axios.post(`${baseURL}/notifications/send`, {
                subscriberId: subscriber.id,
                message: "Bananinha"

            })
        
        )

    console.log(subscriber.name);
    };
    } catch (err) {
    console.log(err)
    }
}
const getAllSubscribers = async(): Promise<User[]> => {
    const subscribers = await axios.get(`${baseURL}/subscribers/all`);
    return subscribers.data.map((subscriber: any) => {
        return {
            email: subscriber.email,
            name: subscriber.name,
            id: subscriber.id
        }
    })
  };
async function createNews(title: string, content: string, date: number): Promise<void> {
    await axios.put(`${baseURL}/news`, {
        title,
        content,
        date

    })

};

//Preciso pegar tds subscribers antes
// async function sendNotifications(message:string): Promise<void> {
//     const allSubscribers = await getAllSubscribers()
//     const promiseArray: Promise<any> [] = [] 

//     for(const subscriber of allSubscribers) {
//         promiseArray.push(
//             await axios.post(`${baseURL}/notification/send`, {

//              subscriberId: subscriber.id, 
//              message:message
//         }) 
//         .then ((res) => {
//             console.log("Ok!")

//         }) 
//         .catch((err) => {
//             console.log("Erro")
//         })
//         )
//     }


// }


main()

