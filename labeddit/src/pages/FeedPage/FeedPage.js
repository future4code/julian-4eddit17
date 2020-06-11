import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Post, Container } from '../../pages/FeedPage/style'
import axios from 'axios'


const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'

const FeedPage = () => {
    const HomePage = useHistory(); 
    const PostPage = useHistory(); 
    const [getPost, setGetPost] = useState([])   


    useEffect(() => {
      const token = localStorage.getItem('token');
  
      if(token === null){
        HomePage.push("/")
      }
    },[HomePage]);

    const goToHomePage = () => {
        HomePage.push("/")
    };
    const goToPostPage = () => {
    PostPage.push("/feed-page/post")
    }; 
    
    useEffect(() => {
      axios.get(`${baseUrl}/posts`, {
        headers:{
          Authorization: localStorage.getItem('token')
        }
      })
      .then(response=>{
        localStorage.getItem('token')

        setGetPost(response.data.posts)

        console.log(response.data.posts)
      })
      .catch(err=>{
        console.log(err)
      })
    },[])

  return (
    <Container>
      {/* ToDO fazer card para o texto e o titulo */}
        <h2>Página de Feed</h2> 
        {getPost.map(post =>{
            return(
              <Post>
                <h1> {post.title} </h1>
                <p> {post.text} </p>
              </Post>
            )
          })}
     <button onClick={goToHomePage}>Sair</button>

     <div>
         
         <button onClick={goToPostPage}>Abrir Post</button>
     </div>

    </Container>
  );
}

export default FeedPage;