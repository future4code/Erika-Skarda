import React from 'react'
import styled from 'styled-components'
import Footer from './Components/Footer'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      tarefas: [] ,
      inputValue:'',
      filter:''
    
    }
  }
  render() {

    return (
      <AppContainer>

          <H1>4Task</H1>
        
        <InputsContainer>
          <Input
            value={this.state.inputValue} 
            onChange={this.onChangeInput}
            placeholder="O que tem que ser feito?"
          />
        
        </InputsContainer>
        <br/>

        <Footer/>
      </AppContainer>
      )
    }
  }

  
  const H1 = styled.h1`
    
    position: absolute;
    top: -150px;
    width: 100%;
    font-size: 80px;
    font-weight: 400;
    text-align: center;
    color: #b83f45;

`
const Input = styled.input `
  margin-top:20px;
  width: 100%;
  padding-left: 70px;
  font-size: 25px;
  height: 65px;
  border: none;
  border-bottom: 1px solid #00000021;
  box-sizing: border-box;

::placeholder{
    font-style: italic;
}
`
const InputsContainer = styled.div `
  
    
`
const AppContainer = styled.div`
    display:block;
    justify-content:center;
    align-items:center;
    height:fit-content;
    width:33%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2), 0 25px 50px 0 rgba(0,0,0,.1);
    margin: 130px 0 40px 600px;
    position: relative;
`;


export default App
