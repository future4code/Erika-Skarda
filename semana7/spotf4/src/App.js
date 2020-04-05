import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CreatePlaylist from './Components/CreatePlaylist';
import UserPlaylist from './Components/UserPlaylist';
import Details from './Components/Details'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
            changePage : "Home",
            idPlaylist: ''
    };
  }
  //Página principal
  onClickHome = () => {
    this.setState({ changePage: "Home" });
  };
  //Página de criar playlist
  onClickCreatePlaylist = () => {
    this.setState({ changePage: "Create Playlist" });
  };
  //Página de todas playlist do usuário
  onClickUserPlaylist = () => {
    this.setState({ changePage: "User Playlist" });
  };
  //Detalhes: O usuário deve ser capaz de 
  //visualizar os detalhes de uma playlist: o seu nome e as músicas que fazem parte dela
  onClickDetails = (id) => {
    this.setState({ changePage: "Details"});
    this.setState({ idPlaylist: id});
    
  };
  onClickSearchPlaylist = () => {
    this.setState({ teste: "Search Playlist" });
  };
  //VERIFICAR SE PRECISO DECLARAR VARIÁVEL PARA SWITCH OU SE VAI RENDERIZAR 
  render () {

    switch(this.state.changePage) {
      case "Create Playlist":
        return <CreatePlaylist/>;
      case "User Playlist":
        return <UserPlaylist />
      case "Details":
        return <Details idPlaylist = {this.state.idPlaylist}/>
      // case "Search Playlist":
      //   return <SearchPlaylist/>
      default: 
    };

    return (
      <ContainerMenu>
        <Menu>
        <LogoSpoti>SPOTi</LogoSpoti>
            <LogoF4>F4</LogoF4>
          <Ul>
           
            <Li><Botao onClick = {this.onClickHome}>Home</Botao></Li>
            <Li><Botao onClick = {this.onClickUserPlaylist}>Biblioteca</Botao></Li>
            <Li><Botao onClick = {this.onClickCreatePlaylist}>Criar Playlist</Botao></Li>
            {/* <Li><Botao onClick = {this.SearchPlaylist}>Buscar</Botao></Li>  */}
              {/* Criar função para procurar  */}
          </Ul>
        </Menu>
      </ContainerMenu>
    )
  };
}

const ContainerMenu = styled.div`
  
  width: 100vw;
  height: 100vh;
    
`
const Menu = styled.nav`

  background-color: #FE7E02;
  width: 100%;
  height: 50px;
  position: fixed;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Ul = styled.ul`
  list-style-type: none;
`
const Li = styled.li`
  display: inline; 
  padding: 2px 3vw 2px 3vw;
  border-right: 1px solid white;
  text-align: center;
`
const LogoSpoti = styled.p`
  color: white;
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 5px;
`
const LogoF4 = styled.p`
  color: #6611c3;
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 5px;
`

const Botao = styled.button`
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
export default App;

// // SÓ DUAS PÁGINAS COM MESMO BOTÃO, FAZER ACESSO À OUTRAS PÁGINAS COM BOTÕES DISTINTOS    
// //     this.state = {
// //       changePage : 0
// //     };
// //   }

// //   changeComponent = () => {
// //     switch (this.state.changePage) {
// //       case 0:
// //         return <CreatePlaylist/>;
// //       case 1:
// //         return <UserPlaylist/>
// //       default:
// //         return <CreatePlaylist/>;
// //     }
// //   };
// //   nextPage = () => {
// //     this.setState({
// //        changePage: this.state.changePage !=0 ? 0 : 1
// //     });
// //   };

  
// //   render () {

// //     const change = this.changeComponent();
// //     return (
// //       <div>
// //         <button
// //           onClick ={event => {
// //             event.target.focus()
// //             this.nextPage() 
// //           }}
// //           >{ this.state.changePage != 0 ? "Playlists" : "Criar Playlist" }
// //           </button>
// //           {change}
// //       </div>
// //     )
// //   }
// // };
