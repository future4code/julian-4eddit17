import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import CreatePost from './components/CreatPost';
import FormCreateNewPost from './components/FormCreateNewPost';



const FeedPage = () => {
    const HomePage = useHistory(); 
    const PostPage = useHistory(); 
    const [getPost, setGetPost] = useState([])   
    const [selectedArea,setSelectedAre] = useState(false)

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

    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/post'
    useEffect(() => {
      axios.get(`${baseUrl}`, {
        
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


    const createNewPostArea = () => {
      switch(selectedArea) {
        case false: 
          return <CreatePost goToAreaOfNewPost={goToAreaOfNewPost}/>
        case true:
          return <FormCreateNewPost goToTitleCreatePost={goToTitleCreatePost}/> 
        default:
          return <CreatePost/>
      }
    }
    const goToAreaOfNewPost = () => {
      setSelectedAre(true)
    }
    const goToTitleCreatePost = () => {
      setSelectedAre(false)
    }

  return (
    <div>
      {/* ToDO fazer card para o texto e o titulo */}
        <h2>Página de Feed</h2> 
        {createNewPostArea()}
        {getPost.map(post =>{
            return(
              <div>
                <h1> {post.title} </h1>
                <p> {post.text} </p>
              </div>
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