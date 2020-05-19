const posts = [
    { autor: "Erika", texto: "Bananinha" },
    { autor: "Gabi", texto: "Bananinha" },
    { autor: "Vivi", texto: "Bananinha e goiabinha" },
    { autor: "Ivana", texto: "Bananinha" },
    { autor: "Ana", texto: "Bananinha" }
];
function postDoAutorEscolhido(posts, autorEscolhido) {
    return posts.filter((eachPost) => eachPost.autor === autorEscolhido);
}
console.log(postDoAutorEscolhido(posts, "Vivi"));
//# sourceMappingURL=index3.js.map