import React from 'react';
import axios from "axios";
import styled from 'styled-components'
import CreateUser from './Components/CreateUser'
import ListUser from './Components/ListUser'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changePage : 1
    };
  }

  changeComponent = () => {
    switch (this.state.changePage) {
      case 1:
        return <CreateUser/>;
      case 2:
        return <ListUser/>;
      default:
        return alert("Not Found!")
    }
  };
  nextPage = () => {
    this.setState({
       changePage: this.state.changePage !=1 ? 2 : 1
    });
  };

  
  render () {

    const change = this.changeComponent();
    return (
      <div>
        <button
          onClick ={event => {
            event.target.focus()
            this.nextPage() 
          }}
          >{ this.state.changePage != 1 ? "Ir para página de Lista" : "Ir para página de registro" } </button>

      </div>
    )
  }
};



export default App;
