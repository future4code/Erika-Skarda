import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaPost: [
        { 
          usuario: 'Paulinha',
          foto: 'https://picsum.photos/50/50',
          postagem: 'https://picsum.photos/200/150'

        },
        { 
          usuario: 'João',
          foto: 'https://picsum.photos/50/51',
          postagem: 'https://picsum.photos/200/151'
        },
        {
          usuario: 'Ozzy',
          foto: 'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2017/08/14/gatos-ronronam-istock-533398893.jpg',
          postagem: 'https://picsum.photos/200/154'
        }
      ],

      valorInputUsuario:'',
      valorInputFoto:'',
      valorInputPostagem: ''
    }
  };
  // DEFININDO UMA OBJETO POSTNOV
  adicionarPost= () => {
    const postNovo = {
      
    usuario: this.state.valorInputUsuario,
    foto: this.state.valorInputFoto,
    postagem: this.state.valorInputPostagem

    };
   // COPIANDO ARRAY PARA ADICIONA O POST NOVO DEPOIS DE TUDO
    const postAtualizado = [...this.state.listaPost, postNovo];

  // ATUALIZANDO OS POSTS
    this.setState({

      listaPost: postAtualizado

    })
  };  
  onchangeInputUsuario = (event) => {
    this.setState({

      valorInputUsuario: event.target.value

    })
  };
  onchangeInputFoto = (event) => {
    this.setState({

      valorInputFoto: event.target.value

    })
  };
  onchangeInputPostagem = (event) => {
    this.setState({

      valorInputPostagem: event.target.value

    })
  };

  render() {
    
    const mapeandoLista = this.state.listaPost.map((post, index) => {
      return (
      <Post
        key = {index}
        nomeUsuario={post.usuario}
        fotoUsuario={post.foto}
        fotoPost={post.postagem}
      /> 
     )
    });
  
    return (
      <Container>
        <div>
          {mapeandoLista}
        </div>
        <ContainerInput>
          <input
            onChange = { this. onchangeInputUsuario} 
            value  = { this.valorInputUsuario}
            type  = "text"
            placeholder = "Nome do Usuário"
          />
           <input
            onChange = { this. onchangeInputFoto} 
            value  = { this.valorInputFoto}
            placeholder = "Foto de Perfil"
          />
           <input
            onChange = { this. onchangeInputPostagem} 
            value  = { this.valorInputPostagem}
            placeholder = "Post"
          />
          <button onClick = {this.adicionarPost}>Postar</button>
        </ContainerInput>

       
      </Container>
    )
  }
}
  const Container = styled.div `
   
  
  `
  const ContainerInput = styled.form `
   
  
  `

export default App;
