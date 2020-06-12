import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'

const PageWrapper = styled.div`
  display:grid;
  margin-left: auto;
  margin-right: auto;  
  text-align: center;
  background-color: #faf6e9;
  margin:0;  
  height:auto;
`
const PageTitle = styled.h1`
font-size: 50px;
  font-family: 'Yeseva One', cursive;
  color: black;
  width: 100%;
        :hover
            {
                   /*Ainda to pensando em algumas animações pra 
                   colocar aqui*/
            }
`
const CommentTitle = styled.h3`
  font-size: 20px;
  font-family: 'Yeseva One', cursive;
  color: black;
  width: 100%;
        :hover
            {
                   /*Ainda to pensando em algumas animações pra 
                   colocar aqui*/
            }
`
const Post = styled.div`
  width: 50%;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  padding: 15px;
      :hover{
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
              transition: 3s;
              border-radius: 100px;
              background-color: #ece8d9;
            }
  `
const CommentFormatter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const FeedPageButton = styled.div`
  width:10vw;
  background-color: #cf7500;
  border-radius: 28px;
  border: 1px solid #cf7500;
  color: black;  
  padding: 1rem 1rem;
  margin: auto;  
  :hover {
    color: #ece8d9;
    transition: 1s;  
  }
`
const LogoutButton = styled.div`
  width:10vw;
  background-color: #cf7500;
  border-radius: 28px;
  border: 1px solid #cf7500;
  color: black;  
  padding: 1rem 1rem;
  margin: auto;  
  :hover {
    color: #ece8d9;
    transition: 1s;  
  }
`
const FeedButtonWrapper = styled.div`
  margin-bottom: 5px;
`
const PostPage = () => {

  const [detail, setDetail] = useState ([])
  const [comment, setComment] = useState ([])
  
    const HomePage = useHistory();
    const FeedPage = useHistory(); 

    const params = useParams();    

  useEffect(() => {
        const token = localStorage.getItem('token');
    
        if(token === null){
          HomePage.push("/")
        }
      },[HomePage])


    const goToHomePage = () => {
        HomePage.push("/")
    }
    const goToFeedPage = () => {
    FeedPage.push("/feed-page/")
    }  
    const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`
    useEffect(() => {
      axios.get(`${baseUrl}`, {
        headers:{
          Authorization: localStorage.getItem('token')
        }
      })
      .then(response=>{
        localStorage.getItem('token')
        console.log('Acessando conteúdo do post:',response.data.post)
        setDetail(response.data.post)
        console.log('Acessando os comentários do post: ', response.data.post.comments)
        setComment(response.data.post.comments)

      })
      .catch(err=>{
        console.log('LOG: ',err)
      })
    },[]);

    return (    
        <PageWrapper>
            <PageTitle>Página do Post</PageTitle>
            <Post>
                    <p>Titulo: {detail.title}</p>
                    <p>Texto: {detail.text}</p>
                    <p>Comentários: {detail.commentsCount}</p>
                    <p>Votos: {detail.votesCount}</p>
                    <p>Usuario: {detail.username}</p>
                    <CommentTitle>Comentários: </CommentTitle>
                    {comment.map((comments => {
                        return (
                                  <CommentWrapper>
                                    <CommentFormatter>
                                      <h4>{comments.username}</h4>
                                      <p>{comments.text}</p>
                                      <p>{comments.votesCount}</p>
                                    </CommentFormatter>
                                  </CommentWrapper>
                              )}))}                 
            </Post>
            <FeedButtonWrapper>  <FeedPageButton onClick={goToFeedPage}>feedpage</FeedPageButton> </FeedButtonWrapper>
            <LogoutButton onClick={goToHomePage}>logout</LogoutButton> 
        </PageWrapper>  
  );  
}
export default PostPage;