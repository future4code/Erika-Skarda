import styled from 'styled-components'

 export const InsertPostWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 11;
  align-items: center;
  flex-direction: column;
  background-color: black;
  width: 100vw;
  height: 20vw;
`;
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  background-color: black;
`;
export const FeedContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormSyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const PostCreate = styled.div`
  position: fixed;
  top: 20px;
  z-index: 10;
  width: 50vw;
`;
export const DivPosts = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;