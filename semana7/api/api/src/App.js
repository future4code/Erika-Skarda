import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Componets {
  constructor(props) {
    super(props);
    this.state = {
      pokemons:[],
      pokemonImage: undefined
    }
  }

  baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  componentDidMount() {
    axios
    .get(
      "https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      console.log(response)
      this.setState({
        listaPokemons: response.data.result 
      })
    }

  selectPokemon= (event) => {
    const dadosPokemon = event.target.value
    console.log(dadosPokemon)

    if(dadosPokemon !== "") {
      axios
      .get(
        `${baseUrl}/${event.target.value}`)
      .then((response) => {
        console.log(response.data);
        this.setsate({

          pokemonImage: response.data.sprites.front_default

        }); 

      } else {
        this.setState({

          pokemonImage: undefined

        })
      } 
    } 
      render() {

        return (
          <div className="App">

            <select onChange={this.selectPokemon}>
              <option value="">Nenhum</option>
              {this.state.pokemons.map((pokemon) => {
                return <option value={pokemon.name}>{pokemon.name}</option>;
              })}
            </select>
            <div>
              {this.state.pokemonImage && (
                <img alt={"pokemon"} src={this.state.pokemonImage} />
              )}
            </div>
          </div>
        );
      }
    }
export default App;
