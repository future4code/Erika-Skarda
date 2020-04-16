import React from 'react'
import styled from 'styled-components'
import Footer from './Components/Footer'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'


export default function App() {
  
    return (
      <AppContainer>

          <H1>4Task</H1>
        
      <TaskForm/>
      <TaskList/>
        <br/>
       
        <Footer/>
      </AppContainer>
      )
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


