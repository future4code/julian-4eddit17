import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import CreatePost from './components/CreatPost';
import FormCreateNewPost from './components/FormCreateNewPost';
import CardPosts from './components/CardPosts'
import styled from 'styled-components'


/*Estilização*/
const FeedPageWrapper = styled.div`
  background-color: #faf6e9;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const FeedPageTitle = styled.h1`
  font-size: 50px;
  font-family: 'Yeseva One', cursive;
  color: black;
`
const ButtonDiv = styled.div`
  bottom: 0;
  right: 0;
  margin-bottom: 5px;
  margin-right: 5px;
  position: fixed; 
`
const Button = styled.button`
  width:10vw;
  background-color: #cf7500;
  border-radius: 28px;
  border: 1px solid #cf7500;
  color: black;  
  padding: 1rem 1rem;
  text-align: center;
  :hover {
    color: #ece8d9;
    transition: 1s;  
  }
`

/*Estilização*/

const FeedPage = () => {
  const [getPost, setGetPost] = useState([])
  const [selectedArea,setSelectedAre] = useState(false)
    const HomePage = useHistory();      
    
    useEffect(() => {
      const token = localStorage.getItem('token');

      if(token === null){
        HomePage.push("/")
      }
    },[HomePage]);

    const goToHomePage = () => {
        HomePage.push("/")
    }; 
    
    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts'
    useEffect(() => {
      axios.get(`${baseUrl}`, {
        headers:{
          Authorization: localStorage.getItem('token')
        }
      })
      .then(response=>{
        localStorage.getItem('token')
        console.log('response',response.data.posts)
        setGetPost(response.data.posts)

      })
      .catch(err=>{
        console.log('errouuuu',err)
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
    <FeedPageWrapper>
      {getPost.map((posts => {
          return (
            <CardPosts posts={posts}/>            
          )
        }))}        
      <FeedPageTitle>Dashboard</FeedPageTitle>
        {createNewPostArea()}
      <ButtonDiv><Button onClick={goToHomePage}>homepage</Button></ButtonDiv>        
      <CardPosts/>
    </FeedPageWrapper>
  )
}
export default FeedPage;


