import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const PostTitle = styled.h1`
  font-size: 20px;
  font-family: 'Yeseva One', cursive;
  color: black;
`
const PostText = styled.p`
  font-size: 15px;
  font-weight: lighter;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  display: flex;
  `
const Post = styled.div`
  width: 40vw;
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  margin: 15px;
  padding: 20px;
  justify-content: center;
`
const PostButton = styled.button`
  border-radius: 100%;
  background-color: #cf7500;
  border: 1px solid #cf7500;
  color: black;  
  width: 20px;
  height: 20px;
  display: flex;
  align-self: flex-end;
  justify-content: center;
`
const VoteButton = styled.button`
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid #cf7500;
  color: black;  
  width: 40px;
  height: 40px;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  font-size: 15px;
  text-align:center;
`


const CardPosts = (props) => {
    
    const [gostei, setGostei] = useState(true)
    const [nGostei, setNGostei] = useState(false)   
    const PostPage = useHistory(); 
    
      
    
    const putBaseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts'
    const onClickGostei = () => {
    axios.put(`${putBaseURL}/:postId/vote`).then((
            response => {console.log("Resposta: " + response)
            localStorage.getItem('token')
            }))
        .catch(e => { console.log("ó o erro: " + e)})
    }
    const goToPostPage = () => {
        //console.log('postId',posts.id)
      PostPage.push("/feed-page/post")
      };
    const posts = props.posts  

    return (         
            <div>           
              <Post onClick={goToPostPage}>
                <PostTitle>{posts.title}</PostTitle>
                <PostText>{posts.text}</PostText>
                <VoteButton onClick={onClickGostei}>👍</VoteButton>
                <VoteButton>👎</VoteButton>
                <PostButton onClick={goToPostPage}>+</PostButton>
              </Post>
          )
        }))}                                 
            </div>
    );
  /*comment de teste*/
}
export default CardPosts;