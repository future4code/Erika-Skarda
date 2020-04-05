
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists"

// Para adicionar músicas à playlist, o usuário deve informar: o nome, os artistas relacionados 
// (que pode ser só um cantor ou uma banda) 
// e um link com o arquivo de áudio correspondente a esta música

//Adcionar novas músicas
class Song extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputSong: '',
            inputArtist: '',
            inputURL: ''
        }
    }
// ONCHANGE dos inputs ->
onchangeSong = e => {
    this.setState({inputSong: e.target.value})
}   
onchangeArtist = e => {
    this.setState({inputArtist: e.target.value})
}  
onchangeURL = e => {
    this.setState({inputURL: e.target.value})
}   

//Assim como deletar, preciso do id das playlists
    addSong = (id) => {
        const body = { 

            name: this.state.inputSong,
            artisti: this.state.inputArtist,
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

    render() {
        return (
            <div>
                <h2>Adicionar música: </h2>
                <label for = "nome">Música: </label>
                <Input
                    type = "text"
                    name = "nome"
                    onChange = { this.onchangeSong}
                    value = { this.state.inputSong }
                />
                <label for = "artista">Artista: </label>
                <Input
                    type = "text"
                    name = "artista"
                    onChange = { this.onchangeArtist}
                    value = { this.state.inputArtist }
                />
                <label for = "url">URL: </label>
                <Input
                    type = "text"
                    name = "url"
                    onChange = { this.onchangeURL}
                    value = { this.state.inputURL}
                />
                <butron onClick = {() => this.addSong(id)}>Adicionar música</butron>
                
            </div>
        )
    }
}

export default Song;