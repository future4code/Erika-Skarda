import React from 'react';
import styled from 'styled-components';
import Botao from '@material-ui/core/Button';
import { connect } from "react-redux";
import {
    completeAll,
    deleteAllComplete,
    setFilter
  } from "../actions/todo";

const ButtonActions = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    width: 100%;
    padding-left: 10px;
    font-size: 25px;
    height: 60px;
    border: none;
`
const StyledButton = styled(Botao)`
  width:100px;
  background-color:red;
`
class Footer extends React.Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }

    render() {  
        return (
            <ButtonActions>
                <StyledButton variant="outlined" onClick={this.props.completeAll}>Marcar todas como completas</StyledButton>
                <p>Filtros: </p>
                <button onClick={() => this.props.setFilter("todas")}>Todas</button>
                <StyledButton variant="outlined" color="secundary" onClick={() => this.props.setFilter("pendentes")}>Pendentes</StyledButton>
                <StyledButton variant="outlined" color="secundary" onClick={() => this.props.setFilter("completas")}>Completas</StyledButton>
                <div>
                    <StyledButton variant="outlined" color="secundary" onClick={this.props.deleteAllComplete}>Remover completas</StyledButton>
                </div>
            </ButtonActions>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        completeAll: () => dispatch(completeAll()),
        deleteAllComplete: () => dispatch(deleteAllComplete()),
        setFilter: filter => dispatch(setFilter(filter))

    }
}
export default connect(
    null,
    mapDispatchToProps
  )(Footer);