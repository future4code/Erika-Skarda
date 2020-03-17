import React from 'react';
import './BigCard.css';

function BigCard (props) {
    return (
        <div className="big-card">  

            <img src={ props.imagem } />
            <h3>{ props.subtitulo }</h3>
            <p>{ props.texto }</p>

        </div>
    )
}
export default BigCard;