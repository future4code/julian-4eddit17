import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CreatePost from './components/CreatPost';
import FormCreateNewPost from './components/FormCreateNewPost';

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

const FeedPage = () => {  
  const [selectedArea, setSelectedAre] = useState(false) 

  const HomePage = useHistory(); 
  const PostPage = useHistory();    

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
        <h2>Página de Feed</h2>
        <h3 >Criar post</h3>
        {createNewPostArea()}
     <button onClick={goToHomePage}>Sair</button>

     <Post>
         post
         <button onClick={goToPostPage}>Abrir Post</button>
     </Post>

    </div>
  );
}

export default FeedPage;