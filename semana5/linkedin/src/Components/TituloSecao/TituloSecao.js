import React from 'react'
import './TituloSecao.css'

function TituloSecao(props) {
    return (
      <div className="titulos-secao">
          <h2>{ props.titulo }</h2>
      </div>
    );
}



export default TituloSecao