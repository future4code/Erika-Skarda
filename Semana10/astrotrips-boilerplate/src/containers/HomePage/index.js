import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";

class HomePage extends React.Component {

render(){
    const{goToLogin, goToForm} = this.props
    return (
        <div>
            <h1>HOMEPAGE</h1>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToForm}>Formulário</button>
        </div>
    )
}
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(push(routes.login)),
        goToForm: () => dispatch(push(routes.form))
    }
}
export default connect(null,mapDispatchToProps)(HomePage)


