//EXERCÌCIO 3

class post {

    constructor(titulo, autor, conteudo) {
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
    }
}

function onClickButton () {

    let tituloNovo = document.getElementById("inputTitulo").value;
    let autorNovo = document.getElementById("inputAutor").value;
    let conteudoNovo = document.getElementById("inputConteudo").value;

    let novoPost = new post(tituloNovo, autorNovo, conteudoNovo);
    console.log(novoPost);

    let arrayPost = [tituloNovo, autorNovo, conteudoNovo];
    console.log(arrayPost);
}
