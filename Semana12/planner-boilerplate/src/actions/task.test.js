import { setTasks, getTask } from "./tasks"
import axios from "axios";

// Testando funções síncronas
describe("Tasks Actions", () => {
  test("set Task", () => {
     //Preparação
     const mockTaskText = "Comprar bananinha";

     //Execução
     const action = setTasks(mockTaskText)

     //Validação
     expect(action.type).toBe('SET_TASKS');
     expect(action.payload.tasks).toEqual(mockTaskText)

    })


// Como sabemos a resposta esperada da API (de
// acordo a documentação), podemos mockar as
// chamadas para o axios, simulando uma requisição

//Testando as funções assíncornas

//Uso da jest.fn() para simular resposta da API
  test("get task -> Deve retornar uma tarefa e o dia", async ()=> {
    //Mock do axios 
    axios.get = jest.fn(async() => ({
      data: [
        {
        text: "Task test",
        day:"Segunda-Feira"
        }
      ]
    }))
    //Mock do dispatch
    const dispatch = jest.fn();

    //Execução da função assíncrona
    await getTask()(dispatch)

    //Verificação se o dispatch foi chamado pela ação correta
    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_TASKS",
      payload: {
        tasks:  [
          {
          text: "Task test",
          day:"Segunda-Feira"
          }
        ]
      }
    })
  }) 
})