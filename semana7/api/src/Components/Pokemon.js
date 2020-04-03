import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

class Pokemon extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            pokemons: [],
            photo: undefined,
            type: "",
            abilities:"",
            weight: "",
            height: ""
        }
    }

    componentDidMount() {

     axios
      .get(
        `${baseUrl}?limit=151`)

      .then((response) => {
        console.log(response)

        this.setState({

         pokemons: response.data.results

        })
      });
    }

    onchangeP = (e) => {

        const dadosPokemon = e.target.value
        console.log(dadosPokemon)

        if (dadosPokemon !== "") {
            axios
                .get(`${baseUrl}/${dadosPokemon}`)
                .then((response) => {
                    console.log(response.data)

                    this.setState({

                        photo: response.data.sprites.front_default})

                    this.setState({

                        abilities: response.data.abilities[0].ability.name
                    })
                    this.setState({

                        type: response.data.types[0].type.name
                    })
                    this.setState({

                        height: response.data.height
                    })
                    this.setState({

                        weight: response.data.weight
                    })
                })
        } else {
            this.setState({

                pokemonImage: undefined

            });
        };
    }

    render() {

        return (
            <Container>

                <PhotoPokemon src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Logo Pokémon" />
                <div>
                <Select onChange={this.onchangeP}>
                    <option value="">Nenhum</option>
                    {this.state.pokemons.map((pokemon) => {
                        return <option value={pokemon.name}>{pokemon.name}</option>;
                    })}
                </Select>

                    <Div>

                            {this.state.photo && (
                                <ImagePokemon src={this.state.photo} />
                            )}


                        <Text>
                            Ability: {this.state.abilities}
                            weight: {this.state.weight} kg
                            <br/>
                            Height: {this.state.height} m
                            Type: {this.state.type}
                        </Text>

                    </Div>


                    <br/>
                    <ButtonSave>Save</ButtonSave>
                </div>
            </Container>
        );
    }
}

const PhotoPokemon = styled.img`
    width: 60%;
    height: 60%;
    
    
`;
const ImagePokemon = styled.img`
    width: 40%;
    height: 50%;
    margin-left:30%;
`
const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: rgb(174,233,238);
    background: radial-gradient(circle, rgba(174,233,238,1) 0%, rgba(100,125,212,1) 100%);
`;
const Select = styled.select`
    width: 200px;
    height:30px;
    text-align: center; 
    color: white;
    background-color:darkblue;
   
`
const Div = styled.div`

    border: 1px solid black;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPepU0cnSi29J-R0H09rnZA9ICU4AW-aUXnFr7QoF1rUCa78d3&usqp=CAU");
    width: 200px;
    height: 290px;
    display: flex;
    flex-direction:column;
    // justify-content: center;
    margin-top:15px;
    align-itms:center;
   
`;
const Text = styled.h6`
    color: black;
    margin:150px auto 0px auto
    padding: 20px;
    margin-left:30px;
   
`;

const ButtonSave = styled.button`

    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: hsl(236, 32%, 26%);
    overflow: hidden;
    transition: color 0.4s ease-in-out;


  :before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 100%;
    right: 100%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

:hover {
    cursor: pointer;
    color: #161616;
  }

:hover::before {
    transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
  }
`
export default Pokemon;