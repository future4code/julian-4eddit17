import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'


const Post = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);
  display: flex;
  padding: 15px;
  text-align: center;
  `
const PostPage = () => {

  const [detail, setDetail] = useState ([])

  

  

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
        console.log('response comentarios',response.data.post)
        setDetail(response.data.post)

      })
      .catch(err=>{
        console.log('errouuuu',err)
      })
    },[]);

    return (    
        <div>
            <h2>Página do Post</h2>
            <Post>
                <div>
                  <p></p>
                  <p>Titulo: {detail.title}</p>
                  <p>Texto: {detail.text}</p>
                  <p>Comentários: {detail.commentsCount}</p>
                  <p>Votos: {detail.votesCount}</p>
                  <p>Usuario: {detail.username}</p>
                  <h3>Comentários: </h3>
                  <p>faltam ser renderizados, tem que fazer um map ou algo parecido para isso acontecer.</p>
                  <p></p>
                  <p></p>
                </div>                    
            </Post>
            <button onClick={goToFeedPage}>Voltar para Página dos Feeds</button>                
            <button onClick={goToHomePage}>Sair</button>
        </div>  
  );  
}
export default PostPage;