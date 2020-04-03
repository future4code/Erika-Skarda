import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CreatePlaylist from './Components/CreatePlaylist';
import UserPlaylist from './Components/UserPlaylist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changePage : 0
    };
  }

  changeComponent = () => {
    switch (this.state.changePage) {
      case 0:
        return <CreatePlaylist/>;
      case 1:
        return <UserPlaylist/>
      default:
        return <CreatePlaylist/>;
    }
  };
  nextPage = () => {
    this.setState({
       changePage: this.state.changePage !=0 ? 0 : 1
    });
  };

  
  render () {

    const change = this.changeComponent();
    return (
      <div>
        <button
          onClick ={event => {
            event.target.focus()
            this.nextPage() 
          }}
          >{ this.state.changePage != 0 ? "Playlists" : "Criar Playlist" }
          </button>
          {change}
      </div>
    )
  }
};

//     this.state = {
//       selectPage: "CreatePlaylist"
//     }
//   }
//     onclickSelect = () => {
//       let page;

//       switch(this.state.selectPage) {
//         case "CreatePlaylist":
//           page = "UserPlaylist";
//           break;
//         case "UserPlaylist":
//           page ="CreatePlaylist"
//           break;
//         default:
//           page = "CreatePlaylist"
//       }
//       this.setstate ({selectPage: page})
//     };

//     PageRendereizada = () => {
//       switch(this.state.selectPage) {

//         case "CreatePlaylist":
//           return  <UserPlaylist/>;
          
//         case "UserPlaylist":
//           return <CreatePlaylist/>
        
//       }
//     };

//  render() {
//    const currentPage = this.PageRendereizada();
//     return (
//     <Container>
//       <button onClick = {this.onclickSelect}>
//         {this.state.selectPage === "CreatePlaylist" ? "Ir para Lista": "Voltar"}
//       </button>
//       {currentPage}
   
//     </Container>
//     )
//   }
// };

const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
`;

export default App;