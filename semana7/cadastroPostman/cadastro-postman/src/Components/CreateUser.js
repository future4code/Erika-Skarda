import React from 'react';
import axios from "axios";
import styled from 'styled-components'

class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
  
        // ListaDeUsuario: [],
        errorMessage: undefined,
        inputNome: "",
        inputEmail: ""
  
      };
    }
    // Guardando valores do Input
    onChangeInputName = (event) => {
      this.setState({ inputNome: event.target.value });
    };
    onChangeInputEmail = (event) => {
      this.setState({ inputEmail: event.target.value });
  
    };
    //  Criando os novos usuários
    createUser = () => {
      const body = {
        name: this.state.inputNome,
        email: this.state.inputEmail
      };
  
      axios
        .post(
          "https://us-central1-future-apis.cloudfunctions.net/api/users",
          body,
          {
            headers: {
              "api-token": "string"
            }
          }
        )
        .then((resposta) => {
          window.alert("Cadastro Efetuado!!!!");
          
        })
        .catch((error) => {
          this.setState({ errorMessage: "Deu erro ou já existe um usuário com esse nome e/ou email" });
          // window.alert(errorMessage)

        });
    };
  render () {
    return (
      <Formulario>
        <button onClick={this.onclickPage}>Ir para página de lista</button>
        <label for = "nome">Nome: </label>
        <input
          type = "text"
          name = "nome"
          onChange = { this.onChangeInputName}
        />
          <label for = "email">E-mail: </label>
        <input
          type = "text"
          name = "email"
          onChange = { this.onChangeInputEmail}
        />
        <button onClick={this.createUser}>Salvar</button>
      </Formulario>
    )
  }
}
const Formulario = styled.form`
  display:flex;
`

  export default App;
  