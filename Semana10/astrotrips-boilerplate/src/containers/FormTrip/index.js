import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";
import { CountryDropdown } from 'react-country-region-selector'
import { 
         fetchAllTrips,
         applyToTrip
        } from '../../actions/trips'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Estrutura do formulário

const formTrip = [
    //     **name**: no mínimo 3 letras
    {
        name: "name",
        placeholder:"Name",
        type: "text",
        label: "name",
        required: true,
        title: "Mínimo 3 letras",
        pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}"
    },
    //     **age:** maior do que 18
    {
        name:"age",
        placeholder:"Age",
        type:"number",
        label:"Age",
        required: true,
        title:"Idade mínima é 18",
        pattern:" min: 18 "
    },
    //     **applicationText:** no mínimo 30 caracteres
    {
        name:"applicationText",
        placeholder:"porque sou um bom candidato(a)?",
        type:"text",
        label: "Application Text",
        required: true,
        title: "[A-Za-z ]{30, }",
        pattern: "No mínimo 30 caracteres"
    },
    //     **profession**:  Mínimo de 10 caracteres
    {
        name:"profession",
        placeholder:"Qual sua profissão?",
        type:"text",
        label: "Profession",
        required: true,
        title: "[A-Za-z ]{10, }",
        pattern: "No mínimo 10 caracteres"
    },
    //     **country**: o usuário deve ver um dropdown com nomes de todos os países
    //     **tripId:** id da viagem que o candidato quer ir,    
]
class FormTrip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                country:'',
                value: 'Escolha seu destino'
                
            },
                idTrip: '',
                
        }
    }
    componentDidMount = () => {
        this.props.fetchAllTrips();

    }
    handleOnChangeForm = e => {
        //Pegando nome e value dos inputs
        const { name, value } = e.target;
        this.state({ form: { ...this.state.form, [name]: value}})
    }

    // Precisa do Id
    handleOnSubmit = e => {
        e.preventDefault()
        console.log(this.state.form)
        this.props.applyToTrip(this.state.form)
        this.props.applyToTrip(this.state.idTrip)
        
    }

    selectCountry(val) {
        this.setState({ country: val })
    }
    handleOnChangeSelect = e => {
        this.setState({idTrip: e.target.value})
    }
render() {
    const{goToHome} = this.props
    const { country } = this.state
    console.log(this.props.allTrips)
    
    return (
        <div>
        <form onSubmit={this.handleOnSubmit}>
            {formTrip.map(dado => (
                <div key={dado.name}>
                    <label htmlFor={dado.name}>{dado.name}: </label>
                    <TextField
                        name={dado.name}
                        placeholder={dado.placeholder}
                        type={dado.type}
                        value={this.state.form[dado.name] || ""}
                        required={dado.required}
                        onChange={this.handleOnChangeForm}
                        inputProps={dado.pattern}
                    />
                </div>
            ))}
             <CountryDropdown
                value={country}
                onChange={(val) => this.selectCountry(val)} 
            />
            {/* //`Nome da Viagem - Planeta` e ao selecionar o id da viagem deve ser enviado ao back end. */}
             <select required onChange = { this.handleOnChangeSelect}>
                 <option>Escolha seu destino</option>
                {this.props.allTrips.map(option => {
                    return (
                        <option key = {option.id} value = {option.id}>{option.name} 🚀 {option.planet}</option>
                    )

                })}

            </select> 
            <Button type="submit">Submit</Button>
            </form>
           
           
            <Button onClick={goToHome}>HomePage</Button>
        </div>
    )
}
}
const mapStateToProps = (state) => {
    return {
        allTrips: state.trips.allTrips
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
        goToHome: () => dispatch(push(routes.home)),

        fetchAllTrips: () => dispatch(fetchAllTrips()),
        applyToTrip: (form, id) => dispatch(applyToTrip(form, id))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormTrip);