import React from 'react';
import axios from "axios";
// import User from './Components/User'
import styled from 'styled-components'

class ListUser extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            data : undefined,
            errorMessage: undefined,
            ListaDeUsuario: [],
            pageDetails:[]
        }
    }
  // Buscando dados - vai rodar automa
  componentDidMount() {
      this.userList();
    }
 
  userList = () => {
      axios
        .get(
          "https://us-central1-future-apis.cloudfunctions.net/api/users",
          {
            headers: {

              "api-token": "Erika-Hamilton"
            }
          }
        )
        .then((resposta) => {
          const usuariosCadastrados = resposta.data.result;
  
          this.setState({ ListaDeUsuario: usuariosCadastrados });
        })
        .catch((error) => {
          
          this.setState({ errorMessage: "Usuário inexistente" });
        });
    };

    //DEL deleteUser, id como argumento para deletar
    deleteUser = (id) => {
      if (window.confirm('Tem certeza de que deseja deletar?')) {
      axios
      
      .delete (
        `https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`,
        
        {
          headers: {

            "api-token": "Erika-Hamilton"

          }
        }
        ).then(response => {
          // {this.props.getUser()}
          window.alert("Usuário deletado!")
      })
      .catch((error) => {
          
        this.setState({ errorMessage: "Erro" });
      });
    } else {
      window.alert("")
    }
  } 

      render() {
          return (
          <Lista> 
            <h2>Usuários Cadastrados: </h2>
              <ul>
                  {this.state.ListaDeUsuario.map((user) => {
                   return <LiUser>
                       <p onClick = {() => this.state.onClickUser(user.id)}>{user.name}</p> 
                       <p>{user.name}</p>
                       <BotaoDelete onClick = {() => this.deleteUser(user.id) }> X </BotaoDelete>
                      </LiUser>;
                    })}
              </ul>
          </Lista>
          )

      }
}

const Lista = styled.div`
  display:flex
  flex-direction: column;
  margin:100px;
  padding: 30px;
`
 const BotaoDelete = styled.button ` 
  color: red;
  cursor:pointer
  font-size: 20px;
 `

 const LiUser = styled.li ` 
   width: 30%;
   margin-bottom: 10px;
   padding-bottom: 5px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
 `
export default ListUser;