import React from 'react'
import './App.css'
import BigCard from './Components/BigCard/BigCard'
import SmallCard from './Components/SmallCard/SmallCard'
import TituloSecao from './Components/TituloSecao/TituloSecao'
import ImageButton from './Components/ImageButton/ImageButton'

function App() {
  return(
    <div className="Container">
      <div className="titulos">
          
          <TituloSecao titulo={ "Dados Pessoais" }/>
          <BigCard imagem={require("./img/astrodev.png")} subtitulo={ "Astrodev"} texto={ "Oi, eu sou o Astrodev. Sou chefe dos" +
           "aluno da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com um abronca e dar mais trabalho para eles."} />
           <SmallCard texto={ "future4code@gmail.com" }/>
          <TituloSecao titulo={ "Experiências Profissionais" } />
          <BigCard imagem={require("./img/outsmart.png")} subtitulo={ "Future4"} texto={ "Formando desenvolvedores para o futuro!" } />
          <TituloSecao titulo={ "Minhas Redes Sociais" } />
          <BigCard imagem={require("./img/f4.png")} subtitulo={ "Outsmart"} texto={ "Criando apps incríveis para grandes clientes." }  />
      </div>
     
    </div>
  );
}

export default App;
//available-visitor.surge.sh
