import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     
      curtido: true,
      numeroCurtidas: 0,
      comentando: true,
      numeroComentarios: 0
    }
  }

  onClickCurtida = () => {
   

    let qtd = this.state.numeroCurtidas
    if(qtd) {
      qtd = this.state.numeroCurtidas - 1
      console.log("Descurtiu")
    } else {
      qtd = this.state.numeroCurtidas + 1
      console.log('Curtiu!')
    }

    this.setState({
      curtido: this.state.numeroCurtidas,
      numeroCurtidas: qtd

    })
  }
  
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {


    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoBranco
      
    } else {
      iconeCurtida = iconeCoracaoPreto
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

  
    return (

    <div className={'app-container'}>
        
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
      </div>
      {componenteComentario}
      
    </div>
    
  );
 }
} 

export default Post