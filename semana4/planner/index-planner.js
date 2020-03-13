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
        addSegunda.innerHTML += "<li>"+ tarefaDigitada + "</li>"
        break

        case "Terça-feira": 
        let addTerca = document.getElementById("2")
        addTerca.innerHTML += "<li>" + tarefaDigitada + "</li>"
        break

        case "Quarta-feira": 
        let addQuarta = document.getElementById("3")
        addQuarta.innerHTML += "<li>" + tarefaDigitada + "</li>"
        break

        case "Quinta-feira": 
        let addQuinta = document.getElementById("4")
        addQuinta.innerHTML += "<li>" + tarefaDigitada + "</li>"
        break

        case "Sexta-feira": 
        let addSexta = document.getElementById("5")
        addSexta.innerHTML += "<li>" + tarefaDigitada + "</li>"
        break

        case "Sábado": 
        let addSabado = document.getElementById("6")
        addSabado.innerHTML += "<li>" + tarefaDigitada + "</li>"
        break

        case "Domingo": 
        let addDomingo = document.getElementById("7")
        addDomingo.innerHTML += "<li>" + tarefaDigitada + "</li>"
        break
       }
    }
        inputTarefa.value = ""
}
/*
function tarefaFeita() {
    const riscarTarefa = document.getElementById("risca")
    const tarefaRiscada = riscarTarefa.value
    riscarTarefa.innerHTML = <style "text-decoration:blur">
}*/