import React from 'react';
import './ImageButton.css';

function ImageButton (props) {

    return (

        <div className="botao">

            
             <button><img className="icone" src={ props.icone } />{ props.botao }</button>

        </div>
    )
}
    export default ImageButton;