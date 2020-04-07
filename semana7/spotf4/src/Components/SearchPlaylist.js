import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

let baseUrl = "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists"
// Componente para procurar Playlist e pegar as músicas
// SearchPlaylists e GetPlaylistSong
class SearchPlaylist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            musicas : ''

        }
    }
    // {
    //     "result": {
    //         "quantity": 2,
    //         "musics": [
    //             {
    //                 "id": "9cf876b2-039b-40a6-9321-1afd761e4b57",
    //                 "name": "Musica6",
    //                 "artist": "Cantor2",
    //                 "url": "https://www.youtube.com/watch?v=co6WMzDOh1o"
    //             },

    SearchPlaylist = (nome) => {
        axios.
            get(`${baseUrl}/search?name=${nome}`, {
                 
                headers: {

                    auth: "Erika-Hamilton",
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.getPlaylistSong(response.data.result.playlist[0].id)
            
            }).catch(() => {
                window.alert("Playlist não encontrada")
            })
    }

    getPlaylistSong = (id) => {
        axios.
            get(`${baseUrl}/${id}/songs`, {
                
                headers: {

                    auth: "Erika-Hamilton",
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                window.alert("Músicas da playlist")
                this.setState({musicas:response.data.result.musics })
            }).catch(() => {
                window.alert("Músicas não encontrada")
            })        
    } 
     // Preciso renderizar as músicas somente se a playlist for selecionada
    musicasRenderizadas = () => {
        const musicasMapeadas = this.state.musicas.map((musica) => {
            return <p>{musica.name}</p>
        })
    }     
render() {
    return (
        <div>
            {this.state.musicas && this.state.musicasRenderizadas}
        </div>
    )
}    
}

export default SearchPlaylist; 
