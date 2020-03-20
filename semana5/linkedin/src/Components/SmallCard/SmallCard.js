import React from 'react';
import './SmallCard.css';


function SmallCard(props) {
    return (

    <div className="email-endereco">  
        <img className="icones" src={ props.img } />

        <div className="texto">
            <h4>{ props.label }{ props.texto }</h4>
        </div>
    </div>
    )
}
export default SmallCard;
