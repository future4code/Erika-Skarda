import React from 'react';
import './SmallCard.css';


function SmallCard(props) {
    return (
    <div className="small-card">  

    <p>{ props.texto }</p>

    </div>
)
}
export default SmallCard;
