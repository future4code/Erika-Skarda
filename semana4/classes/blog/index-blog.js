//EXERCÌCIO 5

class post {

    constructor(titulo, autor, conteudo, imagem) {
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
        this.imagem = imagem;
    }
}

function onClickButton () {

    let tituloNovo = document.getElementById("inputTitulo").value;
    let autorNovo = document.getElementById("inputAutor").value;
    let conteudoNovo = document.getElementById("inputConteudo").value;
    let imagemNova = document.querySelector("#inputImagem").value

    if ((imagemNova.includes("http://") ||
        imagemNova.includes("https://")) && (imagemNova.includes(".jpg") ||
        imagemNova.includes(".png") || imagemNova.includes(".bmp"))) {
            
            let novoPost = new post(tituloNovo, autorNovo, conteudoNovo, imagemNova);
            console.log(novoPost);
        
            let arrayPost = [tituloNovo, autorNovo, conteudoNovo, imagemNova];
            console.log(arrayPost);
            
           // window.location.assign("index-post.html");
            
            const inserirTarefa = document.querySelector("#postSalvo")
        
                inserirTarefa.innerHTML += "<p>" + tituloNovo + "</p>" + "\n" +
                "<p>" + autorNovo + "</p>" + "\n" + "<p>" + conteudoNovo + "\n" +
                "<img src='" + imagemNova + "'>"

    } else {

                alert("Não é um link de imagem válido")
            }
           
}
