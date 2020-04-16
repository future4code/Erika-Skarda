import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { toggleTask, deleteTask } from "../actions/todo";

// A função toggleTask vem das props graças ao método dispatch, o dispatch aciona o reducers
class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTodo();
  }
    render() {
        return (
          <ul>
            {this.props.taskList
              .filter(task => {
                const filter = this.props.filter;
                if (filter === "pendentes") {
                  return task.complete === false;
                }
                if (filter === "completas") {
                  return task.complete === true;
                }
                return true;
              })
              .map(task => (
                <li key={task.id} onClick={() => this.props.toggleTask(task.id)}>
                  {task.text} - Completa: {String(task.complete)}
                  <button onClick={() => this.props.deleteTask(task.id)}>
                    Deletar
                  </button>
                </li>
              ))}
          </ul>
        );
      }
    }
//Mapear o estado do Redux pra props do componente que a gnt ta fazendo,
//por isso ela recebe como argumento o state global
const mapStateToProps = (state) => {
    return {
        taskList: state.tarefas.tarefas,
        filter: state.tarefas.filter
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodo: () => dispatch(fetchTodo()),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        deleteAllComplete: () => dispatch(deleteDoneTodos())
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);