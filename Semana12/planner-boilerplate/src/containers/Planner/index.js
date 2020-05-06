import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/tasks'
//Material ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components"

const Form = styled.form `
`
const Fieldset = styled.fieldset `
`
const Legend = styled.legend `
`
class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      inputTask:'',
      day:''

    }
  }
  handleOnKeyPress = event => {
  if(event.key === "Enter") {
    event.preventDefault()
    this.setState({inputTask:event.target.value})
  }
}
handleFormOnSubmit = e => {
  e.preventDefault()
  this.props.createTask(this.state.text, this.state.day)
}
handleOnChangeSelect = e => {
  this.setState({ day: e.target.value})
}

  render() {
    const days = [

      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
      "Domingo"
      
    ]
    
    return (
     <>
      <Form onSubmit = {this.handleFormOnSubmit}>
        <label>Tarefa:</label>
          <TextField
            name="tarefa"
            required
            type="text"
            pattrern="[A-Za-z ãé]{3,}"
            title="Tarefa com no mínimo 3 letras"
            onChange={(e) => this.setState({inputTask:e.target.value})}
            onKeyPress={this.handleOnKeyPress}
            value={this.state.inputTask}
          
          />
          <select 
            required 
            onChange={this.handleOnChangeSelect}
            value={this.state.day}
            >
            <option>Dia</option>
            {days.map(day => {
                return(
                <option key={day} value={day}>{day}</option>
                )
            })}
          </select>
          <Button type="submit">salvar</Button>
      </Form>
      <Fieldset>
        <Legend>Planner</Legend>
        <section>

        <table> 
          <thead>
            <td>
              <th>Dias</th>
            </td>
            
            <tr>
              <td>Segunda-feira
                 {/* <ul id="1"></ul> */}
              </td>
              <td>Terça-feira
                {/* <ul id="2" ></ul> */}
              </td>
              <td>Quarta-feira
                {/* <ul id="3"></ul> */}
              </td>
              <td>Quinta-feira
                {/* <ul id="4"></ul> */}
              </td>
              <td>Sexta-feira
                {/* <ul id="5"></ul> */}
              </td>
              <td>Sábado
                {/* <ul id="6"></ul> */}
              </td>
              <td>Domingo
                {/* <ul id="7"></ul> */}
              </td>
              
            </tr>
          </thead>
        </table>
      </section> 

      </Fieldset>

      </>
    )
  }
}
const mapStateToProps = state => ({
  newTask:state.tasks
})

const mapDispatchToProps = dispatch => 
  bindActionCreators(taskActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
