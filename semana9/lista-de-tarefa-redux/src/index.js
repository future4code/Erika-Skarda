import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'

import { applyMiddleware, compose } from 'redux';

const middlewares = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];
const store = createStore(rootReducer, compose(...middlewares));

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Criando a store com o nosso rootReducer
// Que é a soma de todos os reducers do projeto
// const store = createStore(rootReducer, reduxDevTools);

// Abaixo temos o Provider que é o responsável
// por disponibilizar a store
// para todos os componentes abaixo dela
// ou seja, todos os filhos do componente App
// ao serem conectados (connect()) terão acesso à store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
