import axios from "axios";

export const getPosts = () => async (dispatch, getState) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axios.get(
      "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts",
      {
        headers: {
          auth: token,
        },
      }
    );
    dispatch(posts(response.data.posts));
  } catch (e) {
    window.alert(e.message);
  }
};

export const posts = (posts) => {
  return {
    type: "SET_POSTS",
    payload: {
      posts,
    },
  };
};
 export const setPostDetails = comments => {
 	return {
		type: "SET_ALL_POSTS_DETAILS",
		payload: {
 			comments
		}
	}
 }
export const createPost = (title, text) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");
	const data = { title, text }
	console.log('title', title, 'text', text)
	try {
		const response = await axios.post(
			"https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts", data,
			{
				headers: {
					auth: token
				}
			}
		);
		const msg = `Post criado com sucesso`
		const variant = 'success'
		dispatch(snackBarOpen(msg, variant))
		dispatch(getPosts());
	} catch (e) {
		const msg = `Ocorreu um erro : ${e.message}`
		const variant = 'error'
		dispatch(snackBarOpen(msg, variant))
  }
}
  export const postVote = (id, direction) => async (dispatch, getState) => {
    const token = window.localStorage.getItem("token");
    const idVote = id;
    const data = { direction: direction };
   
    try {
      const response = await axios.put(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${idVote}/vote`,
        data,
        {
          headers: {
            auth: token,
          },
        }
      );
      dispatch(getPosts());
    } catch (e) {
      window.alert(e.message);
    }
  };
  
  export const onCloseSnackBar = () => {
    return {
      type: "SET_SNACKBAR_CLOSE",
    };
  };
  
  export const snackBarOpen = (msg, variant) => {
    return {
      type: "SET_SNACKBAR_OPEN",
      payload: {
        msg,
        variant,
      },
    };
  };
  //PUT Vote Comment
  export const voteComment = (commentId, postId,direction) => async (dispatch,getState) => {
    const token = window.localStorage.getItem("token");
  
    console.log(commentId, postId);
    const data = { direction: direction};
    try {
      const response = await axios.put(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`,
        data,
        {
          headers: {
            auth: token,
          },
        }
      );
      dispatch(comments(postId));
    } catch (e) {
      window.alert(e.message);
    }
  };
  //GET Get Post Detail --> pegando os comentários de um Post específico
  export const comments = (postId) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
  
    try {
      const response = await axios.get(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}/comment`,
        {
          headers: {
            auth: token,
          },
        }
      );
        dispatch(setPostDetails(response.data.post))  
    } catch (e) {
      window.alert(e.message);
    }
  };
  
 //POST Create Comment
  export const sendComment = (postId, text) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const body = { text: text };
  
    const response = await axios.post(
      `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}/comment`,
      body,
      {
        headers: {
          auth: token,
        },
      }
    );
    dispatch(comments(postId) )
    console.log(response);
  };
 
