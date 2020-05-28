//Exercício 2
// const getSubscribers = async (): Promise<any[]> => {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
//   };
//a) função nomeada leva "function" e não possui a setinha (=>), 
//outro ponto é que o argumento fica no async
//b)  
import axios from 'axios';
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const main = async () => {
    const allSubscribers = await getAllSubscribers(); 
    console.log(allSubscribers)

}

const getAllSubscribers = async(): Promise<any[]> => {
    const users = await axios.get(`${baseURL}/subscribers/all`);
    return users.data;
  };
main()