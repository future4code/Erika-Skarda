import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createTask } from "../actions/todo";

class TaskForm extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      inputText:''
    }
  }
  //Não é reaproveitável por iss n fazemos no redux

  onChangeInput = (e) => {
    this.setState({ inputText: e.target.value})
  }
  onClickAdicionar = () => {
    this.props.createTask(this.state.inputText)


  }
  render() {
    return (
    <form>
          <Input
            value={this.state.inputText} 
            onChange={this.onChangeInput}
            placeholder="O que tem que ser feito?"
          />
          <button type= "button" onClick={this.onClickAdicionar}>Adicionar</button>
        
        </form>
    )
  }
}

//Usando para pegar um state do redux, mapear alterações no estado global para props
const mapStateToProps = state => {
  return {}
}
//dispatch é a forma de disparar algo, pra fazer um pedido de mudança
//Serve para fazermos alterações no estado do redux

const mapDispatchToProps = (dispatch) => {
   return{
    createTask: text => dispatch(createTask(text))
}
      
  }

const Input = styled.input `
  margin-top:20px;
  width: 100%;
  padding-left: 70px;
  font-size: 25px;
  height: 65px;
  border: none;
  border-bottom: 1px solid #00000021;
  box-sizing: border-box;

::placeholder{
    font-style: italic;
}
`
//Connect pq eu vou interagir com Redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
