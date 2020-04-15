//Onde combinamos todos os reducers
import { combineReducers } from "redux";
import{ tarefas } from "./tarefas";

// Local onde juntamos todos os nossos reducers
// em um só, lembrando, usamos o rootReducer
// para inicializar a store no createStore();
const rootReducer = combineReducers({
  tarefas:tarefas
});

export default rootReducer;