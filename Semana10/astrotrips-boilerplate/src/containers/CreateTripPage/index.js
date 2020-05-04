import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";
import {createTrip} from '../../actions/trips'

import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormCreate = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
`;

//     **id**: o backend criará um, não é necessário enviar na criação
const formCreateTrip = [
    //     **name**: no mínimo 5 letras
    {
        name:"name",
        placeholder:"Descreva",
        type:"text",
        label:"name",
        required:true,
        title:"No mínimo 5 letras",
        pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{5,}"
    },
    // **date**: deve ser uma data no futuro
    // "date": "31/12/2019"
    //Olhar biblioteca para que o usuário respeite 
    {
        name:"date",
        placeholder:"Data",
        type:"date",
        label:"Data",
        required:true,
        title:"Data deve ser uma data no futuro",
        pattern:"(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d"
    },
    //     **description**: no mínimo 30 letras
    {
        name:"description",
        placeholder:"Description",
        type:"text",
        label:"Descritption",
        required:true,
        title:"No mínimo 30 letras",
        pattern:"^[a-z]+${30,}"
    },
    //     **durationInDays**: no mínimo 50
    {
        name:"duration",
        placeholder:"Duration in days",
        type:"number",
        // min: 50,
        label:"Duration in days",
        required:true,
        title:"No mínimo 50 dias",
        pattern:"((^[5-9][0-9]?[0-9]$))"
    }

]
class CreateTripPage extends Component {
    state = {
            form: {
                     selectPlanet: 'Escolha o planeta'
                  }
            }
    componentDidMount = () => {
        //Busca no LocasStorage o token, se n existir retornará null
        const token = window.localStorage.getItem('token')

        if(token === null) {
            this.props.goToLogin()
        }
    }
    //Método que recebe todos inputs e suas mudanças
    handleOnChangeForm = event => {
        const { name, value } = event.target;
    // Atualizando o valor do input no estado, dentro da chave form
        this.setState({  form: {...this.state.form, [name]:value}})
    }
    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createTrip(this.state.form, this.state.token)
        console.log(this.state.form)
        
    }
    handleOnChangeSelect = e => {
        this.setState({form:{...this.state.form,selectPlanet:e.target.value}})
    }
    render() {
        const{goToHome, goBack} = this.props
        const planets = [

            "Mercúrio",
            "Vênus",
            "Terra",
            "Marte",
            "Júpiter",
            "Saturno",
            "Urano",
            "Netuno",
            "Plutão",
            
          ];
          
        return (
            <Fragment>
                <FormCreate onSubmit={this.handleOnSubmit}>
                      {formCreateTrip.map(trip => {
                          return(
                        <div key={trip.name}>
                            <label htmlFor={trip.name}>{trip.name}: </label>
                            <TextField
                                name={trip.name}
                                placeholder={trip.placeholder}
                                type={trip.type}
                                value={this.state.form[trip.name] || ''}
                                required={trip.required}
                                onChange={this.handleOnChangeForm}
                                inputProps={trip.pattern}
                            />
                        </div> )
                    })} 

                {/* //  **planet**: o usuário deve ver um dropdown com todos os planetas*/}
                <select required onChange={ this.handleOnChangeSelect}>
                    <option>Escolha o planeta</option>
                    {planets.map(planet => {
                        return(
                        <option key = {planet} value={planet}>{planet}</option>
                        )
                    })}
                </select>
                <Button type="submit">Submit</Button>
                </FormCreate>
                <button onClick={goToHome}>HomePage</button>
                <button onClick={goBack}>Voltar</button> 
            </Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
        goToHome: () => dispatch(push(routes.home)),
        goBack:() => dispatch(goBack()),
        createTrip: (body, token) => dispatch(createTrip(body,token)),
        goToLogin: () => dispatch(replace(routes.login))
    }
}
export default connect(null, mapDispatchToProps)(CreateTripPage);