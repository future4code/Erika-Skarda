import styled from 'styled-components'

export const ListWrapper = styled.div`
    min-height: 90vh;
    max-height: 100%;
    
    color: black;
    padding: 0 18px;

     > Button {
        float: right;
        margin: 40px 20px; 
    }

    > h1 {
        padding-top: 100px;
        color: white;
        text-align: center;
    } 
`
 
export const CardMain = styled.main`
    padding-top: 25px;
    

     ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        list-style-type: none;

             > li {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background: radial-gradient(circle, rgba(174,233,238,1) 0%, rgba(100,125,212,1) 100%);
                border-radius: 4px;
                padding: 20px;


            Button {
                margin-top: 15px;
            }
        }
      
                Button {
          z-index: 1;
          font-size: inherit;
          font-family: inherit;
          color: white;
          padding: 0.5em 1em;
          outline: none;
          border: none;
          background-color: hsl(236, 32%, 26%);
        }

        button:hover {
          cursor: pointer;
          animation: jelly 0.5s;
        }

        @keyframes jelly {
          0%,
          100% {
            transform: scale(1, 1);
          }
          25% {
            transform: scale(0.9, 1.1);
          }
          50% {
            transform: scale(1.1, 0.9);
          }
          75% {
            transform: scale(0.95, 1.05);
          }
        }

        } 
    
`
export const Loading = styled.div `
  position: relative;
  width: 2em;
  height: 2em;
  border: 3px solid #3cefff;
  overflow: hidden;
  animation: spin 3s ease infinite;
}

::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 2em;
  height: 2em;
  background-color: hsla(185, 100%, 62%, 0.75);
  transform-origin: center bottom;
  transform: scaleY(1);
  animation: fill 3s linear infinite;
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }

`