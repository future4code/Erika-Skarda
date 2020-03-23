import React from 'react'
import './App.css'
import BigCard from './Components/BigCard/BigCard'
import SmallCard from './Components/SmallCard/SmallCard'
import TituloSecao from './Components/TituloSecao/TituloSecao'
import ImageButton from './Components/ImageButton/ImageButton'

function App() {

  return(
    <div className="Container">

            <TituloSecao titulo={ "Dados Pessoais" }/>

        <div className="astrodev" >
            <BigCard imagem={require("./img/astrodev.png")} subtitulo={ "Astrodev"} texto={ "Oi, eu sou o Astrodev. Sou chefe dos aluno da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."} />
        </div> 

        <div className="email">
            <SmallCard img={require("./img/email.png")} label={ "Email: " } texto={ "future4code@gmail.com" }/>
        </div>

        <div className="endereco">
            <SmallCard img={require("./img/endereco.png")} label={ "Endereço: " } texto={ "Rua do Futuro, 4" }/> 
        </div>

            <ImageButton icone={require("./img/seta.png")} botao={ "Ver mais" }/>

            <TituloSecao titulo={ "Experiências Profissionais" } />

        <div className="future4">
            <BigCard imagem={require("./img/outsmart.png")} subtitulo={ "Future4"} texto={ "Formando desenvolvedores para o futuro!" } />
        </div>

            <TituloSecao titulo={ "Minhas Redes Sociais" } />

        <div className="outsmart">
            <BigCard imagem={require("./img/f4.png")} subtitulo={ "Outsmart"} texto={ "Criando apps incríveis para grandes clientes." }  />
        </div>

            <ImageButton icone={require("./img/facebook.png")} botao={ "Facebook" }/>
      
     
    </div>
  );
}

export default App;
//available-visitor.surge.sh
