import React from 'react';
import axios from "axios";
import styled from 'styled-components'

// baseUrl = "https://us-central1-future-apis.cloudfunctions.net/api"

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
              "api-token": "Erika-Hamilton"
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
        {/* <button onClick={this.onclickPage}>Ir para página de lista</button> */}
        <label for = "nome">Nome: </label>
        <Input
          type = "text"
          name = "nome"
          onChange = { this.onChangeInputName}
          value = { this.state.inputNome }
        />
          <label for = "email">E-mail: </label>
        <Input
          type = "email"
          name = "email"
          placeholder = "exemplo@mail.com"
          onChange = { this.onChangeInputEmail}
          value = { this.state.inputEmail}
        />
        <BotaoSalvar onClick={this.createUser}>Salvar</BotaoSalvar>
        
      </Formulario>
    )
  }
}


 const Formulario = styled.div`
    display: flex;
    flex-direction: column;    
    width: 33vw;
    margin:100px;
    border: 1px double black;
    padding: 30px;
 `

 const Input = styled.input ` 
    border-radius: 5px;
   border: 1px solid black;
    margin: 10px;
    padding: 5px 2px;
 `

 const BotaoSalvar = styled.button ` 
   color: white;
    background-color: darkblue;
   width: 30%;
   padding: 5px;
    align-self: center;
`
// button {
//   z-index: 1;
//   position: relative;
//   font-size: inherit;
//   font-family: inherit;
//   color: white;
//   padding: 0.5em 1em;
//   outline: none;
//   border: none;
//   background-color: hsl(236, 32%, 26%);
//   overflow: hidden;
//   cursor: pointer;
// }

// button::after {
//   content: '';
//   z-index: -1;
//   background-color: hsla(0, 0%, 100%, 0.2);
//   position: absolute;
//   top: -50%;
//   bottom: -50%;
//   width: 1.25em;
//   transform: translate3d(-525%, 0, 0) rotate(35deg);
// }

// button:hover::after {
//   transition: transform 0.45s ease-in-out;
//   transform: translate3d(200%, 0, 0) rotate(35deg);
// }
  export default App;
  