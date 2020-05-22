import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  height: 10vh;
  padding: 4px;
  /* background: transparent; */
  background-color:blue;
  color:white;
`

export const HeaderFl = styled.div`
width: 30vw;
display: flex;
justify-content: space-between; 
align-items: center;
@media screen and (max-width: 320px)  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2px; 
}
`
export const ContainerHeader = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between; 
  height: 100%;
  @media screen and (max-width: 320px)  {
  display: flex;
  flex-direction: column;
}
`
export const Logo = styled.div`
height: 100%;
`
export const Img = styled.img `
 height: 100%; 
 border-radius: 5px;
 cursor: pointer;
`
export const ContainerCarrossel = styled.div`
   
    height: 800px;
    max-width: 1000px;
    /* min-width: 100%; */
    margin: 10px auto;
    overflow: hidden;   
    figure.slider-principal {
        position: relative;
        width: 500%;
        height: 500%;
        margin: 0;
        left: 0;
        animation: 20s slider infinite;
    }
    figure.slider-principal img {
        width: 20%;
        height: 60vh;
        float: left;
        background-size: cover;
       
    }
    @keyframes slider {
        0% { left: 0;}
        20% { left: 0;}
        25% { left: -100%;}
        45% {left: -100%;}
        50% { left: -200%;}
        70% {left: -200%;}
        75% {left: -300%;}
        95% {left: -300%;}
        100% {left: -400%}
    }
`
export const Imagem = styled.img`
    height: 100px;
    width: 100px;
`