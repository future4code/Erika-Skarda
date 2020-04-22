import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";


const ListTripPage = props => {
   
    return (
      <div>
        <div>Lista</div>
        <button onClick={props.goToCreate}>Lista das viagens</button>
        <button onClick={props.goToDetails}>Voltar</button>
      </div>
    );
  };
  
  function mapDispatchToProps(dispatch) {
    return {
      goToCreate: () => dispatch(push(routes.create)),
      goToDetails: () => dispatch(push(routes.details))
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(ListTripPage);
  