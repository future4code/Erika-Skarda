import React from 'react'
import './TituloSecao.css'

function TituloSecao(props) {
    return (
      <div className="titulos-secao">
          <h1>{ props.titulo }</h1>
      </div>
    );
}



export default TituloSecao