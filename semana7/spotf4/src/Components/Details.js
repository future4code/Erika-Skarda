import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import PropTypes from 'prop-types'

let baseUrl = "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/"
//detalhes -->  GET all playlistSong

class Details extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            songs:[]

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
            .get(`${baseUrl}/${this.props.idPlaylist}/song`, {
                
                headers:{ 
                    
                    auth: "Erika-Hamilton",
                    'Content-Type': 'application/json'

                 }
            }).then((response)=>{
                console.log(response)
                this.setState({  songs: response.data.result.musics })
            }).catch((error)=>{
                alert("Não encontrado")
            })
        }
    render() {
        return(
                <Container>
                    <h1>Músicas</h1>
        
                    {this.state.songs.map((song, index, array) => {
                        return (
                            <div key={index}>
                                <span> {song.artist} - {song.name}</span>
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
`;
        
      
export default Details