import React from 'react';

import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header>
        <h1>FutureTube</h1>
        <span classNameName="buscar">
            <input type="text" id="buscar" placeholder="Busca"></input>
            
            
        </span>
    </header>

    <div className = "barra">
        <nav>
            <a href = ""><div className = "link">Home</div></a>
            <a href = ""><div className = "link">Início</div></a>
            <a href = ""><div className = "link">Em alta</div></a>
            <a href = ""><div className = "link">Inscrições</div></a>
            <a href = ""><div className = "link">Originais</div></a>
            <a href = ""><div className = "link">Biblioteca</div></a>
            <a href = ""><div className = "link">Histórico</div></a>
        </nav>
    </div>

    <main> 
      
        <nav className="container"> 
            <div id="media1">
                    
                    <img src= {require("../src/media-1.png")} alt="Media 1" className="imagem"/>
                    <p><a target="blank" href="detalhes.html">Media 1</a></p>

            </div>
            <div id="media2"> 

                <img src={require("../src/media2.png")} alt="Media 2" className="imagem"/>
                <p><a target="blank" href="detalhes2.html" className="texto-midia">Media 2</a></p>

            </div>
            <div id="media3">
                <img src={require("../src/media3.png")} alt="Media 3" className="imagem"/>
                    <p> Media 3</p>    
            </div>
            <div id="media4">
                <img src={require("../src/media4.png")} alt="Media 4" className="imagem"/>
                <p>Media 4</p> 
                    
            </div>
            <div id="media5">
                <img src={require("../src/media5.png")} alt="Media 5" className="imagem"/>
                <p>Media 5 </p>
                    
            </div>
            <div id="media6"> 
                <img src={require("../src/media6.png")} alt="Media 6" className="imagem"/>
                <p>Media 6</p>
                
            </div>
            <div id="media7"> 
                <img src={require("../src/media7.png")} alt="Media 7" className="imagem"/>
                <p>Media 7</p>
                
            </div>
            <div id="media8"> 
                <img src={require("../src/media8.png")} alt="Media 8" className="imagem"/>
                <p>Media 8 </p>
                
            </div>
     
        </nav>
    </main>
    <footer>
        
        <img src={require("../src/mascoteFuture4.png")} width="32" height="30" alt="astronauta" id="img"/>
        <p className="copyright">&copy; Copyright FutureTube - 2020</p>
        
    </footer>

    
    </div>
  );
}

export default App;
//http://next-scissors.surge.sh/