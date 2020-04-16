import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Song from './Song';

let baseUrl = "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/"
//detalhes -->  GET all playlistSong

class Details extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            songs:[],
            buttonInputSong: false,
            inputSong: '',
            inputArtist: '',
            inputURL: ''
           
        }
    }
    
    //AS chamadas de API devem ser feitas sempre com componentDidMount ---> Acessar o getAllPlaylistSongs
    componentDidMount () {
        this.getAllPlaylistSongs()
      }
     //Pegar detalhes do App quando usuário clicar nas playlists pra ver nome e musicas 
     //https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/:playlistId/songs ---> Pegar ID
    getAllPlaylistSongs = () => {
        axios
            .get(`${baseUrl}/${this.props.idPlaylist}/songs`, {
                
                headers:{ 
                    
                    auth: "Erika-Hamilton",
                    'Content-Type': 'application/json'

                 }
            }).then((response)=>{
                console.log(response)
                this.setState({ songs: response.data.result.musics })
            }).catch(()=>{
                window.alert("Não econtrada!!");
                alert("Não encontrado")
            })
        }
        addSong = (id) => {
            const body = { 
    
                name: this.state.inputSong,
                artist: this.state.inputArtist,
                url: this.state.inputURL
    
            }
    
            axios.post(`${baseUrl}/${id}/songs`, body, {
            
                headers: {
                    auth: "Erika-Hamilton",
                    'Content-Type': 'application/json'
                  }
                }
              ).then((resposta) => {
                const lista = resposta.data.result.list;
                console.log(lista)
            //   }
    
            //   }).catch((error) => {
            //       console.log(error)
              })
              this.setState({inputSong: ""})
              this.setState({inputArtist: ""})
              this.setState({inputURL: ""})
          };
    
        deleteSongToPlaylist = (idSong) => {
            axios.
                delete(`${baseUrl}/${this.props.idPlaylist}/songs/${idSong}` ,
                {
                    headers: {
      
                        auth: "Erika-Hamilton",
                       'Content-Type': 'application/json'
           
                     }

                }).then(() => {
                    this.getAllPlaylistSongs ()
                }).catch(() => {
                    window.alert("Não deletou a música")
                })
        }

        onchangeSong = e => {
            this.setState({inputSong: e.target.value})
        }   
        onchangeArtist = e => {
            this.setState({inputArtist: e.target.value})
        }  
        onchangeURL = e => {
            this.setState({inputURL: e.target.value})
        } 

        onClickAdicionarMusicas = () => {
            this.setState({buttonInputSong: !this.state.buttonInputSong})
        }
   
    render() {
        return(
                <Container>
                    <div>
                        <h1>Detalhes da playlist</h1>
                        <button onClick = { this.onClickAdicionarMusicas }>Adicionar músicas</button>
                    </div>
                    {this.state.buttonInputSong && (
                    <div>
                    <Label for = "nome">Música: </Label>
                        <Input
                            type = "text"
                            name = "nome"
                            onChange = { this.onchangeSong}
                            value = { this.state.inputSong }
                        />
                        <Label for = "artista">Artista: </Label>
                        <Input
                            type = "text"
                            name = "artista"
                            onChange = { this.onchangeArtist}
                            value = { this.state.inputArtist }
                        />
                        <Label for = "url">URL: </Label>    
                        <Input
                            type = "text"
                            name = "url"
                            onChange = { this.onchangeURL}
                            value = { this.state.inputURL}
                        />
                        <button onClick= {() => this.addSong(this.props.idPlaylist)}>Salvar</button>
                    </div>
                    )}
                    {this.state.songs.map((song, index, array) => {
                        return (
                            <div key={index}>
                                <p>{song.artist}</p>
                                <p>{song.name}</p>
                                <audio src={song.url} controls></audio>
                                <img onClick={()=> this.deleteSongToPlaylist(song.id)}src={require("./toxico.png")} alt="Liexeirinha"></img>
                            </div>
                    
                        )
                        
                    })}
                    
                </Container>
            )
        
        }
    }
        
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    color:white;
`;
const Input = styled.input ` 
    width:20vw;
    border-radius: 5px;
    border: 1px solid black;
    margin: 10px; 
    padding: 5px 2px;
`
const Label = styled.h1`
  margin-bottom: 90px;
  color:white
`
        
      
export default Details