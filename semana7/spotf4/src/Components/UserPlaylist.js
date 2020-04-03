import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/spotifour"
class UserPlaylist extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        listaPlaylist: [],
        errorMessage: undefined
    
      }
    }
    //Executado depois que o componente foi montado na DOM,
    //Acessado uma vez em um ciclo de vida. AS chamadas de API
    // devem ser feitas sempre com componentDidMount
    componentDidMount () {
      this.searchPlaylist()
    }

    // searchPlaylist = async () => {
        
    //     const response = await axios.get(`${baseUrl}/playlists`, {
    //         headers: {

    //           "api-token": "Erika-Hamilton"
    //         }
    //       })
         
    //         this.setState({ listaPlaylist: response.data.result.list })
    
    // }
    searchPlaylist = () => {
        axios
          .get(
            "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",
            {
              headers: {
                auth: "Erika-Hamilton"
              }
            }
          )
          .then((resposta) => {
            const list = resposta.data.result.list;
    
            this.setState({ listaPlaylists: list });
          })
          .catch((error) => {
            console.log(error);
            this.setState({ errorMessage: "Erro em acrescentar" });
          });
      };
    deletePlaylist = (id) => {
            if (window.confirm('Tem certeza de que deseja deletar essa playlist?')) {
            axios
            
            .delete (
              `${baseUrl}/playlists/${id}`,
              
              {
                headers: {
      
                  "api-token": "Erika-Hamilton"
      
                }
              }
              ).then(response => {
                
                window.alert("Usuário deletado!")
            })
            .catch((error) => {
                
              this.setState({ errorMessage: "Erro" });
            });

          } else {
            window.alert("Playlist Deletada")
          }
        } 
        render() {
         return (
            <Lista> 
              <h2>Suas Playlist: </h2>
                <ul>
                    {this.state.listaPlaylist.map((playlist) => {
                     return (
                        <LiPlaylist>
                         {/* <p onClick = {() => this.state.onClickPlaylist(playlist.id)}>{playlist.name}</p>  */}
                             <span>{playlist.name}</span> 
                            <BotaoDelete onClick = {() => this.deletePlaylist(playlist.id) }> X </BotaoDelete>
                        </LiPlaylist>
                        )
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

 const LiPlaylist = styled.li ` 
   width: 30%;
   margin-bottom: 10px;
   padding-bottom: 5px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  color:black;
`
export default UserPlaylist;