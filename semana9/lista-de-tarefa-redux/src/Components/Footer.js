import React from 'react';
import styled from 'styled-components';
import Botao from '@material-ui/core/Button'

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
      this.state = {}
    }

    render() {  
        return (
            <ButtonActions>
                <StyledButton variant="outlined" color="secundary">Todas</StyledButton>
                <StyledButton variant="outlined" color="secundary">Pendentes</StyledButton>
                <StyledButton variant="outlined" color="secundary">Completas</StyledButton>
                <StyledButton variant="outlined" color="secundary">Remover completas</StyledButton>
            </ButtonActions>
        );
    }
}

export default Footer;