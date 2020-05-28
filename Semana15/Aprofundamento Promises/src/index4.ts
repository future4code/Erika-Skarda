//Exercício 4
// async function createNews(
//     title: string,
//     content: string,
//     date: number
//   ): Promise<void> {
//     await axios.put(`${baseUrl}/news`, {
//       title: "Novidade a caminho",
//       content: "Labenu: uma nova escola de programação",
//       date: 1590522289000,
//     });
//   }
//a) void
//b) 


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

    const news = await createNews("Coronavírus","Vacina",1589818936000); 
    console.log(news)

};
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

main()
