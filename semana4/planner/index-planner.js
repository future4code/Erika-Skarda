function inserirTarefa() {

    const inputTarefa = document.getElementById("input-digitar");
    const tarefaDigitada = inputTarefa.value
     
    const seletor = document.getElementById("selecao")
    const dia = seletor.value
    console.log(dia)

    if(tarefaDigitada === "" || tarefaDigitada === null) {

        alert("Digite uma tarefa, por favor")
    } else {

        switch(dia) {

        case "Segunda-feira": 
        let addSegunda = document.getElementById("1")
        addSegunda.innerHTML += "<li onclick ='riscar(this)'>"+ tarefaDigitada + "</li>"
        break

        case "Terça-feira": 
        let addTerca = document.getElementById("2")
        addTerca.innerHTML += "<li onclick ='riscar(this)'>" + tarefaDigitada + "</li>"
        break

        case "Quarta-feira": 
        let addQuarta = document.getElementById("3")
        addQuarta.innerHTML += "<li onclick ='riscar(this)'>" + tarefaDigitada + "</li>"
        break

        case "Quinta-feira": 
        let addQuinta = document.getElementById("4")
        addQuinta.innerHTML += "<li onclick ='riscar(this)'>" + tarefaDigitada + "</li>"
        break

        case "Sexta-feira": 
        let addSexta = document.getElementById("5")
        addSexta.innerHTML += "<li onclick ='riscar(this)'>" + tarefaDigitada + "</li>"
        break

        case "Sábado": 
        let addSabado = document.getElementById("6")
        addSabado.innerHTML += "<li onclick ='riscar(this)'>" + tarefaDigitada + "</li>"
        break

        case "Domingo": 
        let addDomingo = document.getElementById("7")
        addDomingo.innerHTML += "<li onclick ='riscar(this)'>" + tarefaDigitada + "</li>"
        break
       }
    }
        inputTarefa.value = ""
}

    const riscar = tarefaRiscada => {
        tarefaRiscada.style.textDecoration = "line-through"
    }


    
/*
    class Pokemon {
        constructor(nome, tipo) {
            this.nome = nome
            this.tipo = tipo
        }
        atacar(){
            console.log(this.nome, "fez um ataque do tipo", this.tipo)
        }
    }
    const pokemons = [
        new Pokemon("Bulbasaur", "grama"),
        new Pokemon("Charmander", "fogo"),
        new Pokemon("Squirtle", "agua")
    ]
    for (const pkmn of pokemons) {
        pkmn.atacar()
    }
/*
    function riscar() {
        const riscarTarefa = document.getElementById("risca")
        const tarefaRiscada = riscarTarefa.value
        riscarTarefa.innerHTML = tarefaDigitada.style.textDecoration = "line-through"
}*/