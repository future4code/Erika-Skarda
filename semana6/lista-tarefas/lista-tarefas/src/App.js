import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      tarefas: [] ,
      inputValue:'',
      filter:''
    
    }
  }

  componentDidUpdate() {
    
    const stringConvertida = JSON.stringify(this.state.tarefas);
    localStorage.setItem("tarefas-armazenadas",stringConvertida)
   
    };

  componentDidMount() {

    const tarefasInput = localStorage.getItem("tarefas-armazenadas");
    if(tarefasInput !== null ) {
      const objetoTarefa = JSON.parse(tarefasInput);

      this.setState ({tarefas })
    }

  };
  //ARMAZENANDO VALORES DO INPUT
  onChangeInput = (event) => {

    const valor = event.target.value
    this.setState({inputValue:valor})
  }

  criaTarefa = () => {
    const tarefaNova = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa:this.state.completa

    }
    console.log(tarefaNova)
    //Criar array com acréscimo da tarefa do input
    const copiaComTarefaNova =[...this.state.tarefas, tarefaNova]
    this.setState({tarefas:copiaComTarefaNova})
  }

  selectTarefa = (id) => {
    const tarefaRiscada = this.state.tarefas.map(x => {
      if(tarefa.id === id) {
        x.completa = !x.completa;
      }
      return x
    })
  
    this.setstate({tarefas:tarefaRiscada})
  }
  onChangeFilter = (event) => {
    this.setState({
      filter: event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
