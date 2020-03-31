import React from 'react';
import axios from "axios";
// import CreateUser from './Components/CreateUser'
import styled from 'styled-components'

class ListUser extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            data : undefined,
            errorMessage: undefined,
            ListaDeUsuario: [],
        }
    }
    // Buscando dados 
    componentDidMount() {
        this.userList();
    }

    userList = () => {
        axios
          .get(
            "https://us-central1-future-apis.cloudfunctions.net/api/users/getUser/:id",
            {
              headers: {
                "api-token": "string"
              }
            }
          )
          .then((resposta) => {
            const usuariosCadastrados = resposta.data.result.list;
    
            this.setState({ ListaDeUsuario: usuariosCadastrados });
          })
          .catch((error) => {
            
            this.setState({ errorMessage: "Usuário inexistente" });
          });
      };

        Render(){
            
            <Lista> 
                <ul>
                    {this.state.ListaDeUsuario.map((user) => {
                    return <li>{user.name}</li>;
                    })}
                </ul>
          </Lista>

        }
 }

 const Lista = styled.div`
  display:flex;
`

 export default ListUser;