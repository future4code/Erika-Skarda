import React from 'react';
import './BigCard.css';

function BigCard (props) {
    return (
        <div className="big-card">  

            <img className="imagens" src={ props.imagem } />
            <h2>{ props.subtitulo }</h2>
            <h4 className="apresentacao">{ props.texto }</h4>

        </div>
    )
}
export default BigCard;