import postsi from "./posts"
import posts from "../actions/posts"

describe("Testes do reducers", () => {
    test("Teste do set all posts", () => {
        //Preparação
        const mockState = {
            posts: []
        }
        const mockPost = [{
            is: 42,
            text: "Post teste"
        }]
        const mockAction = posts(mockPost)
        //Execução
        const newState = postsi(mockState, mockAction)
        //Verificação -- dentro do newState tem um post?
        expect(newState.posts).toHaveLenght(1)//espero q o newsetState na posicao zero tenha id passado
        expect(newState.posts[0].id).toEqual(mockPost[0].id);
        expect(newState.posts[0].text).toEqual(mockPost[0].text)
    })
})