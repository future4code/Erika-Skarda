import { posts, setPostDetails } from "./posts"

describe("Posts Actions", () => {
    test("set posts", () => {
        //Preparação
        const mockPost = "Post teste";

        //Execução
        const action = posts(mockPost); //nome da função

        //Verificação
        expect(action.type).toBe("SET_POSTS");
        expect(action.payload.posts).toBe(mockPost)
    })
    
 
    test("Set post details", () => {
        //Preparação
        const mockPostDetail = "Post details test";
        //Execução
        const action = setPostDetails(mockPostDetail);

        //Verificação
        expect(action.type).toBe("SET_ALL_POSTS_DETAILS")
        expect(action.payload.comments).toBe(mockPostDetail)
    })
})