import posts from "./posts"
import {setPostDetails} from "../actions/posts"

describe("Testes do reducers", () => {
    // test("Teste do set all posts", () => {
    //     //Preparação
    //     const mockState = {
    //         posts: []
    //     }
    //     const mockPost = [{
    //         id: 42,
    //         text: "Post teste"
    //     }]
    //     const mockAction = posts(mockPost)
    //     //Execução
    //     const newState = posts(mockState, mockAction)
    //     //Verificação -- dentro do newState tem um post?
    //     expect(newState.posts).toHaveLenght(1)//espero q o newsetState na posicao zero tenha id passado
    //     expect(newState.posts[0].id).toEqual(mockPost[0].id);
    //     expect(newState.posts[0].text).toEqual(mockPost[0].text)
    // })
    test("Teste do set all posts", () => {
        //Preparação
        const mockState = {
            coments: []
        }
        const mockComment = [{
            id: 42,
            text: "Commtest"
        }]
        const mockAction = setPostDetails(mockComment)
        //Execução
        const newState = posts(mockState, mockAction) // reducer - altera estado
        //Verificação -- dentro do newState tem um post?
        expect(newState.coments).toHaveLength(1)//espero q o newsetState na posicao zero tenha id passado
        expect(newState.coments[0].id).toBe(mockComment[0].id);
        expect(newState.coments[0].text).toBe(mockComment[0].text)
    }) 
    test("Invalid action type", () => {
        //Preparação
        const mockState = {
            posts : [
                {
                    id: 1,
                    text:"comment"
                }
            ]
        }
        const mockInvalidAction = {
            type: "IS_A_INVALID_ACTION_TYPE"
        }
        //Execução
        const newState = posts(mockState, mockInvalidAction);

        //Verificação
        expect(newState).toEqual(mockState)


    })
})