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
                auth: "Erika-Hamilton",
                'Content-Type': 'application/json'
              }
            }
          )
          .then((resposta) => {
            const lista = resposta.data.result.list;
            // window.alert("Playlist encontarda");
            this.setState({ listaPlaylist: lista });
            // console.log(listaPlaylist)
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
              `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`,
              
              {
                headers: {
      
                  "api-token": "Erika-Hamilton",
                  'Content-Type': 'application/json'
      
                }
              }
              ).then(()=> {
                this.searchPlaylist()
                window.alert("Usuário deletado!")
            })
            .catch(() => {
                
              this.setState({ errorMessage: "Erro" });
            });

          } else {
            window.alert("Playlist n foi deletada")
          }
        } 

      //   onClickPlaylist = (id) => {
      //     this.setState({idPlaylist: id})
      // }
  
        render() {
         return (
            <Lista> 
              <h2>Suas Playlist: </h2>
                <ul>
                    {this.state.listaPlaylist.map((playlist) => {
                     return <LiPlaylist>
                          <strong><p onClick = {() => this.state.onClickPlaylist(playlist.id)}>{playlist.name}</p></strong>

                            <BotaoDelete onClick = {() => this.deletePlaylist(playlist.id)}> X </BotaoDelete>
                        </LiPlaylist>
                        
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