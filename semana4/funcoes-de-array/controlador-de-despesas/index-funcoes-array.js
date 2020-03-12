class despesa {
    constructor(valor, tipo, descricao){

        this.valor = valor,
        this.tipo = tipo,
        this.descricao = descricao
    }
}

let arrayLista = []
function onClickButton() {

    let valor = document.getElementById("inputValor");
    let tipo = document.getElementById("inputTipo");
    let descricao = document.getElementById("inputDescricao")

    if(valor === "" ||tipo === "" || descricao === "" ) {

        alert("Certifique-se que preencheu todas as lacunas.")

    } else { 

        let inputDespesa = new despesa(valor.value, tipo.value, descricao.value)
        arrayLista.push(inputDespesa)

        console.log(arrayLista);

        valor.value= "";
        tipo.value = "";
        descricao.value = ""
        
    }
}
function filtrarDespesas () {

    const filtrarTipo = document.querySelector("#inputTipo");
    const valorMaximo = document.querySelector("#inputValorMaximo");
    const valorMinimo = document.querySelector("#inputValorMInimo");

}
