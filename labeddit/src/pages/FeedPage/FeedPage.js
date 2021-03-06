import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import CreatePost from './components/CreatPost';
import FormCreateNewPost from './components/FormCreateNewPost';
import CardPosts from './components/CardPosts'
import styled from 'styled-components'
import AllPosts from './components/AllPosts';


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

/*Estilização*/

const FeedPage = () => {
  const HomePage = useHistory(); 
  const PostPage = useHistory(); 
  const [gostei, setGostei] = useState(true)
  const [nGostei, setNGostei] = useState(false)   
  const [selectedArea,setSelectedAre] = useState(false)
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

    const putBaseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts'
    const onClickGostei = () => {
    axios.put(`${putBaseURL}/:postId/vote`).then((
            response => {console.log("Resposta: " + response)
            localStorage.getItem('token')
            }))
        .catch(e => { console.log("ó o erro: " + e)})
    }

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
      <FeedPageTitle>Dashboard</FeedPageTitle>
        {createNewPostArea()}
      <ButtonDiv>
        <Button onClick={goToHomePage}>homepage</Button>
      </ButtonDiv>
      <AllPosts posts={getPost}/>      
      <div>
        <button >Abrir Post</button>
      </div>
     
      </FeedPageWrapper>
        )
      }
      export default FeedPage;    

      