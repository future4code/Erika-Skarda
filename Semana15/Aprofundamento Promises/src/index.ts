//Exercício 1 
// async function getSubscribers(): Promise<any[]> {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
//   };
//a) GET /subscribers/all
//b)  Promise<any[]>

import axios from 'axios';
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const main = async () => {
    const allSubscribers = await getAllSubscribers(); 
    console.log(allSubscribers)

}

async function getAllSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseURL}/subscribers/all`);
    return users.data;
  };
main()