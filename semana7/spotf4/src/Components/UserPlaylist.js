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
       this.getPlaylist()
     }

 
    // getPlaylist = () => {
    //     axios
    //       .get(
    //         `${baseUrl}/playlists`,
    //         {
    //           headers: {
    //             auth: "Erika-Hamilton",
    //             'Content-Type': 'application/json'
    //           }
    //         }
    //       )
    //       .then((resposta) => {
    //         const lista = resposta.data.result.list;
    //         // window.alert("Playlist encontarda");
    //         this.setState({ listaPlaylist: lista });
           
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         this.setState({ errorMessage: "Erro em acrescentar" });
    //       });
    //   } 
     getPlaylist = async () => {
        
       const response = await axios.get(`${baseUrl}/playlists`, {
           headers: {

               auth: "Erika-Hamilton",
              'Content-Type': 'application/json'
            }
          });
         
             this.setState({ listaPlaylist: response.data.result.list })
    
    }
    deletePlaylist = (id) => {
            if (window.confirm('Tem certeza de que deseja deletar essa playlist?')) {
            axios.delete (
              `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`,
              
              {
                headers: {
      
                   auth: "Erika-Hamilton",
                  'Content-Type': 'application/json'
      
                }
              }
              ).then(()=> {
                this.getPlaylist()
                window.alert("deletado!")
            })
            .catch(() => {
              window.alert("Erro")
            });

          } else {
            window.alert("Playlist não foi deletada")
            this.setState({ errorMessage: "Deu erro pra deletar" });
          }
        }  

        render() {
         return (
            <Lista> 
              <h2>Suas Playlist: </h2>
                <ul>
                    {this.state.listaPlaylist.map((playlist, index) => {
                     return <LiPlaylist>
                          
                          <Playlists key = {index}>
                            {playlist.name}<IconeDelete key = {index} onClick = {() => this.deletePlaylist(playlist.id)} src={require("./toxico.png")} 
                            alt="Lixeirinha"/>

                            {/* Adicionar onClick para abrir os detalhes, vem do APP  */}
                            <Details onClick = {() => this.props.onClickDetails(playlist.id)}>Detalhes</Details>
                          </Playlists>
                
                        </LiPlaylist>
                        
                      })}
                </ul>
            </Lista>
            )
        }
  }

  const Playlists = styled.p `
  display: flex;
  justify-content:space-between;
  margin-left:20px;
  margin-right:20px;
  `
  const Lista = styled.div`
  display:flex;
  flex-direction: column;
  margin: 100px;
  padding: 30px;
 
`;
 const IconeDelete = styled.img `
  height: 20px;
 
  padding: 2px;
  cursor:pointer;
  border-radius:2px;
 `

 const LiPlaylist = styled.li ` 
  width: 30%;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  color:white;
`
const Details = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;

  ::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  :hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
  `;
export default UserPlaylist;