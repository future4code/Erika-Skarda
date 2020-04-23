import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack, replace } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { routes } from "../Router";
import {login} from '../../actions/login'


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = e => {

    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
    
  }

  render() {
    const { email, password } = this.state;
    const { goToHome, goBack, goToList} = this.props

    return (
      <LoginWrapper onSubmit={this.handleOnSubmit}>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button type="submit">Login</Button>
      
      </LoginWrapper>
 )
 }
}
/* <button onClick={goToHome}>Home</button>
<button onClick={goBack}>Voltar</button> */
   
const mapDispatchToProps = (dispatch) => {
  return {
      goToLogin: () => dispatch(replace(routes.login)),
      goBack:() => dispatch(goBack()),
    
      login:(email, password) => dispatch(login(email,password))
      
  }
}
export default connect(null,mapDispatchToProps)(LoginPage);
