import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { goBack, replace, push } from "connected-react-router";

import  TextField  from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { Card } from "@material-ui/core";

import { routes } from "../Router";
import { login } from '../../actions/login'
  
const LoginWrapper = styled.form`
 
  gap: 12px;
  place-content: center;
  background: radial-gradient(circle, rgba(174,233,238,1) 0%, rgba(100,125,212,1) 100%);
  display: flex;
  flex-direction: column;
`;
const DivCard = styled(Card) `
  width: 30vw;
  display:flex;
  flex-direction:column;
  padding:10px;
  box-shadow: 3px 3px 4px #006064;

  :hover{
  box-shadow: 4px 4px 5px #006064;
  }
`
const Div = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
 
`


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = e => {

    e.preventDefault()
    const { email, password } = this.state
    this.props.login(email, password)
    this.setState({email: '', password:''})
  }

  handleOnclickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }
  handleOnKeyPress = event => {

    if(event.key === "Enter") {
      event.preventDefault()
      const { email, password } = this.state
      this.props.login(email, password)
    }
  }
  render() {
    const { email, password, showPassword } = this.state;
    const { goToHome} = this.props;

    return (
      <Div>
      <DivCard>
        <LoginWrapper onSubmit={this.handleOnSubmit}>

          <TextField
            onChange={this.handleFieldChange}
            required
            name="email"
            type="email"
            label="E-mail"
            value={email}
            style={{ margin: '10px', }}
            
          /> 
          <TextField
              onChange={this.handleFieldChange}
              onKeyPress={this.handleOnKeyPress}
              id="outlined-adornment-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="Senha"
              value={password}
              style={{ margin: '10px', }}
              required={true}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleOnclickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

          <Button type="submit">Login</Button> 
        </LoginWrapper>
        {/* <Button onClick={goToHome}>Voltar</Button> */}
    </DivCard>
    </Div>
   )
 }
}
const mapDispatchToProps = dispatch => ({  
  goToHome: () => dispatch(push(routes.home)),  
  goToListTripPage: () => dispatch(push(routes.list)),  
  login: (email, password) => dispatch(login(email, password)),
})
  
  export default connect(null, mapDispatchToProps)(LoginPage);
