import  { taskReducer, initialState } from "./tasks"

describe("Testando reducer das tasks", () => {
    it("Teste do set tasks", () => {

    //Preparação
    const mockTask = [
        {
            day:"segunda",
            id:"x9",
            text:"Comprar bananinha"
        }
    ]
    
    //Execução
    const testAction = {
        type: "SET_TASKS",
        payload: {
            
            tasks: mockTask,
        }
    }
     const newState = taskReducer(initialState, testAction);
  
    //Validação
    //   mockTask.forEach((task, index) => {
    //   expect(newState[index]).toEqual(task)
    //  })
    expect(newState).toEqual(mockTask)
    })
})

