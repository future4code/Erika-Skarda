import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getPosts } from '../../actions/posts'
import { routes } from "../Router";
import Post from "../../Components/Post.js/post";
import Axios from "axios";
import Comments from "../../Components/Comments/comments";
//Material ui./styled
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Card, Snackbar } from "@material-ui/core";
import UpVote from "@material-ui/icons/ThumbUp";
import UpVoteOutlined from "@material-ui/icons/ThumbUpOutlined";
import DownVote from "@material-ui/icons/ThumbDown";
import DownVoteOutlined from "@material-ui/icons/ThumbDownOutlined";
import styled from 'styled-components'
import {
  createPost,
  postVote,
  onCloseSnackBar,
  voteComment,
  comments,

} from "../../actions/posts";
import { MySnackbarContentWrapper } from "../../Components/SnackBar/snackBar";
import {InsertPostWrapper, AppWrapper, FeedContent, FormSyled, PostCreate,  DivPosts } from './styles'

const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 30px;
  align-items: center;
`;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      name: "",
      post: "",
      commentPost: ''
    };
  }

  componentDidMount() {
    this.props.getPosts();
    const token = window.localStorage.getItem("token");
    if (!token) {
      this.props.goToLoginPage();
    }
  }

  handleExpandClick = () => {
   this.setState((state) => ({ expanded: !state.expanded }));
  };

  handleClose = () => {
    this.props.onCloseSnackBar();
  };

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  handleLogout = () => {
    localStorage.clear()
    this.props.goToLoginPage()
  }
  onCreatePost = (event) => {
    event.preventDefault();
    const { title, post } = this.state;
    this.props.createPost(title, post);
    this.setState({text:""});
    this.setState({name:""})
  };
  clickVote = (post,direction) => {
    if(post.userVoteDirection === direction) {
      this.props.postVote(post.id, 0);
    } else {
    this.props.postVote(post.id, direction);
  }}

  clickVoteComments = (comments, direction) => {
    if(comments.userVoteDirection === direction) {
    this.props.voteComments(comments.id, 0);
  } else {
    this.props.voteComments(comments.id, direction)

  }}
  comments = async (postId) => {
    console.log(postId);
    const token = window.localStorage.getItem("token");

    try {
      const response = await Axios.get(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}`,
        {
          headers: {
            auth: token,
          },
        }
      );
      let feedComments = response.data.post.comments;
      this.setState({
        [postId]: feedComments,
      });
      console.log(this.state);
    } catch (e) {
      window.alert(e.message);
    }
  };
  render() {
    
    console.log(this.state)
    return (
      <AppWrapper>
        
        <InsertPostWrapper>
          <PostCreate>
            <CardStyled>
              <FormSyled onSubmit={this.onCreatePost}>
                <TextField
                  placeholder={"Assunto"}
                  name="title"
                  value={this.state.title}
                  onChange={this.handleFieldChange}
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  multiline
                  rows={4}
                  style={{ marginBottom: "20px" }}
                  placeholder={"MENSAGEM"}
                  name="post"
                  value={this.state.post}
                  onChange={this.handleFieldChange}
                ></TextField>
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  disabled={!this.state.post}
                >
                  ENVIAR
                </Button>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick ={this.handleLogout}>Logout</Button>
              </FormSyled>
            </CardStyled>
          </PostCreate>
        </InsertPostWrapper>
        <FeedContent>
          {this.props.posts.map((post) => (
            <DivPosts key={post.id}>
              <Post
                key={post.id}
                titleCard={post.title}
                usernameCard={post.username}
                textCard={post.text}
                votesCountCard={post.votesCount}
                commentsNumberCard={post.commentsNumber}
                upVote={
                  post.userVoteDirection > 0 ? <UpVote /> : <UpVoteOutlined />
                }
                DownVote={
                  post.userVoteDirection < 0 ? (
                    <DownVote />
                  ) : (
                    <DownVoteOutlined />
                  )
                }
                showComments={() => this.comments(post.id)}
                onClickUpVote={() => this.clickVote(post,1)}
                onClickDownVote={() => this.clickVote(post,-1)}
                postId={post.id}
                
                comments={
                  this.state[post.id] &&
                  this.state[post.id].map((comment) => (
                    <Comments
                      UserName={comment.username}
                      onClickUpVoteComment={() =>
                        this.clickVoteComments(comment.id, post.id, 1)
                      }
                      onClickDownVoteComment={() =>
                        this.cliVoteComments(comment.id, post.id, -1)
                      }
                      upVote={
                        comment.userVoteDirection > 0 ? (
                          <UpVote />
                        ) : (
                          <UpVoteOutlined />
                        )
                      }
                      DownVote={
                        comment.userVoteDirection < 0 ? (
                          <DownVote />
                        ) : (
                          <DownVoteOutlined />
                        )
                      }
                      commentsNumberCard={comment.commentsNumber}
                      textComments={comment.text}
                      votesCountCard={comment.votesCount}
                    ></Comments>
                  ))
                }
              ></Post>
            </DivPosts>
          ))}
        </FeedContent>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant={this.props.variant}
            message={this.props.msg}
          />
        </Snackbar>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    msg: state.posts.msg,
    variant: state.posts.variant,
    open: state.posts.open,
    comments: state.posts.comments

  };
};

const mapDispatchToProps = (dispatch) => ({
  goToCreateUser: () => dispatch(push(routes.createUser)),
  goToFeed: () => dispatch(push(routes.feed)),
  goToLoginPage: () => dispatch(push(routes.root)),
  getPosts: () => dispatch(getPosts()),
  createPost: (title, post) => dispatch(createPost(title, post)),
  postVote: (id,direction) => dispatch(postVote(id,direction)),
  sendComment: (postId, text) => dispatch(sendComment(postId, text)),
  onCloseSnackBar: () => dispatch(onCloseSnackBar()),
  voteComments: (commentId, postId,direction) =>
    dispatch(voteComment(commentId, postId,direction)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
