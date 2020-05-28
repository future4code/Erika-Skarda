//Exercício 3

// const getSubscribers = async (): Promise<User[]> => {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data.map((res: any) => {
//       return {
//         id: res.id,
//         name: res.name,
//         email: res.email,
//       };
//     });
//   };

//a) Temos que mapear para garatir que teremos um retorno dos dados esperados
//b) Retorna any porque não temos como prever com exatidaõ o tipo das informações


import axios from 'axios';
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type User = {  
    email: string,
    name: string,
    id: string
};
const main = async () => {
    const allSubscribers = await getAllSubscribers(); 
    console.log(allSubscribers)

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

main()