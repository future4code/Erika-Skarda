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

const Wrapper = styled.div`
  max-width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 5px dotted #ee8972;
  margin: 0 auto;
    th {
      width: 100%;
      display: flex;
      flex-direction: column;
     td {
      list-style: none;
      width: 100px;
      margin-top: 15px;
    }
  } 
`;
class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      inputTask:'',
      day:''

    }
  }
componentDidMount() {
  this.props.getTask()
}
handleOnKeyPress = event => {
  if(event.key === "Enter") {
    event.preventDefault()
    this.props.createTask(this.state.inputTask, this.state.day)
    this.setState({ inputTask: "" });
  }
}
//recebo a create e com argumento do input e o day pra criar a nova tarefa
handleFormOnSubmit = e => {
  e.preventDefault()
  this.props.createTask(this.state.inputTask, this.state.day)
  this.setState({ inputTask: "" });
}
// Handle do select dos dias
handleOnChangeSelect = e => {
  this.setState({ day: e.target.value})
}

  render() {
    console.log(this.props.newTask)
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
                <option key={day} value={day}>
                  {day}
                </option>
                )
            })}
          </select>
          <Button type="submit">salvar</Button>
      </Form>
      <Fieldset>
        <Legend>Planner</Legend>
        <Wrapper>
          
          {days.map((day) => {
            return (
              <table>
               <thead>
                <tr>
                  <th>
                    <strong>
                     {day}
                   </strong>
                  </th>
                </tr>
               </thead>

                {this.props.newTask &&
                 this.props.newTask.map((task) => {
                   if (task.day === day) {
                     return (
                       <td key={task.id}>
                         {task.text}
                       </td>);
                    }
                  })}
              </table>
            );
          })}
        </Wrapper>
        
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
