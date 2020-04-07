import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import PropTypes from 'prop-types'

// chilly-family.surge.sh
const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/spotifour"
class CreatePlaylist extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {

        // newPlaylist: [],
        inputPlaylist: ""
  
      }
    }
    onchangePlaylist = (event) => {

        this.setState({inputPlaylist:event.target.value})
        
    }
  
    createPlaylists = () => {
        const body = {
            name: this.state.inputPlaylist
            
        };
        console.log(body)
        axios
            .post(`${baseUrl}/playlists`,
            body,
            {
                headers: {
                  auth: "Erika-Hamilton",
                  'Content-Type': 'application/json'
                }
              }
            )
            .then((response) => {
                window.alert("Playlist Cadastrada!!");
                console.log(response)
            })
            .catch(() => {
                console.log("Erro")
            })
    }
    
 
    render() {
        return (
          <Container>
            
                    <Label for = "nome">Dê um nome à sua playlist </Label>
                    <Input
                        type = "text"
                        name = "nome"
                        onChange = { this.onchangePlaylist}
                        value = { this.state.inputPlaylist }
                    />
             
            <BotaoSalvar onClick={this.createPlaylists}>Salvar</BotaoSalvar>
            
        
          </Container>
        )
    }   
}
const Container = styled.div `
  background-image: url(https://images.typeform.com/images/gHvxL2PxYx7F);
  background-color:#FE7E02;
  width: 40vw;
  height: 50vh;
  border: 1px solid white;
  border-radius: 5px;
  margin: 20vh auto;
  text-align: center;
`

// const Formulario = styled.div`
//     display: flex;
//     flex-direction: column;    
//     width: 33vw;
//     margin:100px;
//     border: 1px double black;
//     padding: 30px;
// `
const Input = styled.input ` 
    width:20vw;
    border-radius: 5px;
    border: 1px solid black;
    margin: 10px; 
    padding: 5px 2px;
`
const BotaoSalvar = styled.button`
width: 20%;
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

const Label = styled.h1`
  margin-bottom: 90px;
  color:white
`
  export default CreatePlaylist