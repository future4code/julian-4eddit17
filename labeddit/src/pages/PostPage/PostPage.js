import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

import axios from 'axios'

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
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'

const PostPage = () => {
    const HomePage = useHistory();
    const FeedPage = useHistory(); 
    const [getPost, setGetPost] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if(token === null){
          HomePage.push("/")
        }
      },[HomePage])

    
    useEffect(() => {
      axios.get(`${baseUrl}/posts`, {
        headers:{
          Authorization: localStorage.getItem('token')
        }
      })
      .then(response=>{
        localStorage.getItem('token')
        console.log(response.data.posts)
      })
      .catch(err=>{
        console.log(err)
      })
    },[])
    

    const goToHomePage = () => {
        HomePage.push("/")
    }
    const goToFeedPage = () => {
    FeedPage.push("/feed-page/")
    }  

    return (    
        <div>
            <h2>Página do Post</h2>
            <Post>
                <div>
                      post
                </div>
                
                <div>
                  <br></br><br></br>
                    <button onClick={goToFeedPage}>Voltar para Página dos Feeds</button>                
                </div>                    
            </Post>
            <button onClick={goToHomePage}>Sair</button>
        </div>  

  );
}

export default PostPage;