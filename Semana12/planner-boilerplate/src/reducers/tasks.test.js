import  { taskReducer, initialState } from "./tasks"

//Para testar o reducer -> checar se a açao está gerando o efeito esperado
//O teste envia um teste para cair nos CASES, mocka uma ação e chama o reducer
//Testamos o estado e a ação!!!! --- Expect estado alterado

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

 //Test para cair no caso default
    test("Invalid Action Type", () => {
        const mockTask =  [
            {
                day:"segunda",
                id:"x9",
                text:"Comprar bananinha"
            }
        ]
        const mockInvalidAction = { 
            type: "TEST_INVALID_ACTION_TYPE" 
        }
        const newState = taskReducer(mockTask, mockInvalidAction)

        expect(newState).toEqual(mockTask)
    })

})

//array.forEach(funcao([valorAtual, índice, array]), argumentoThis)