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

    if(valor.value === "" ||tipo.value === "" || descricao.value === "" ) {

        alert("Certifique-se que preencheu todas as lacunas.")

    } else { 

        let inputDespesa = new despesa(valor.value, tipo.value, descricao.value)
        arrayLista.push(inputDespesa)

        console.log(arrayLista);

        valor.value= "";
        tipo.value = "";
        descricao.value = "";

        inserirDespesas();
        mostrarExtrato()
      
    }
}
function filtrarDespesas () {

    const filtrarTipo = document.querySelector("#inputTipoFiltro");
    const valorMaximo = document.getElementById("inputValorMaximo");
    const valorMinimo = document.getElementById("inputValorMinimo");

    console.log(filtrarTipo.value);
    console.log(valorMaximo.value);
    console.log(valorMinimo.value);

    if (filtrarTipo.value === "" || valorMaximo.value === "" || valorMinimo.value == "") {

        alert("Certifique-se que preencheu todas as lacunas.")

    } else {

        let listaFiltrada = arrayLista.filter((despesa, index, array) => {

            return despesa.tipo === filtrarTipo.value && despesa.valor >= Number(valorMinimo).value
             && despesa.valor <= Number(valorMaximo.value)
        });

        console.log(listaFiltrada);

        const lista = document.querySelector("#listaFiltrada")
        listaFiltrada.forEach((item, index, array) => {
        
            lista.innerHTML += item.valor;
            lista.innerHTML += item.tipo;
            lista.innerHTML += item.descricao
        })

        console.log(listaFiltrada);

        filtrarTipo.value= "";
        valorMaximo.value = "";
        valorMinimo.value = "";
    }
}

function inserirDespesas () {

    let somatorioDespesas = 0;
    const extrato = document.getElementById("totalDespesas");

    arrayLista.forEach((extrato, index, array) => {
        somatorioDespesas += Number(extrato.valor);

    })
    extrato.innerHTML = "Seu total de gasto é " + "R$" + somatorioDespesas
}

function mostrarExtrato() {

    const formExtrato = document.querySelector("#mostrarExtrato");

    //formExtrato.innerHTML = "";

    arrayLista.forEach((elemento, index, array) => {

        formExtrato.innerHTML += "<li>" + elemento.valor + "</li>";
        formExtrato.innerHTML += "<li>" + elemento.tipo + "</li>";
        formExtrato.innerHTML += "<li>" + elemento.descricao + "</li>";
    });
}


