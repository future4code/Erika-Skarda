// type person = { 
//     name: string, 
//     age: number
//     }
    
//     const astrodev: person = {
//     name: "Astrodev",
//     age: 30
//     }


// const arr: number[] = [];
// 				  //ou
// const arr: Array<number> = [];

type post = {
    autor: string
    texto: any
}

const posts: post[] = [

    {autor: "Erika" , texto:"Bananinha"},
    {autor: "Gabi" , texto:"Bananinha"},
    {autor: "Vivi" , texto:"Bananinha e goiabinha"},
    {autor: "Ivana" , texto:"Bananinha"},
    {autor: "Ana" , texto:"Bananinha"}

]
    
function postDoAutorEscolhido (posts:post[],autorEscolhido:string):post[] {
    return posts.filter((eachPost) => eachPost.autor === autorEscolhido 
    
    )
    
}

console.log(postDoAutorEscolhido(posts, "Vivi"))
