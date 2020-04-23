import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";

// {

//     **id**: o backend criará um, não é necessário enviar na criação
    
//     **name**: no mínimo 5 letras
    
//     **planet**: o usuário deve ver um dropdown com nomes de todos os planetas do Sistema Solar
    
//     **date**: deve ser uma data no futuro
    
//     **description**: no mínimo 30 letras
    
//     **durationInDays**: no mínimo 50
    
//     }

class CreateTripPage extends React.Component {
    
    render() {
        const{goToHome} = this.props
        return (
            <div>
                <p>CreateTirp</p>
                <button onClick={goToHome}>HomePage</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
        goToHome: () => dispatch(push(routes.home))
    }
}
export default connect(null, mapDispatchToProps)(CreateTripPage);