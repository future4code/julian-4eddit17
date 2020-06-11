import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const CreatePostContainer = styled.div`
background-color: #BAB5A4;
  width: 20%;
  height: 50%;
  margin: 0 auto;  
  padding: 15px;
  text-align: center;  
`
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'

const FormCreateNewPost = (props) => {
  const [ text, setText ] = useState('')
  const [ title, setTitle ] = useState('')

  const handleLogin = async () => {
    const body = {
      text: text,
      title: title,
    }
    console.log('body',handleLogin)
    try {
      const response = await axios.post(`${baseUrl}/posts`, body ,{
        headers: {
          Authorization:localStorage.getItem("token")
        }
      });

      //localStorage.setItem('token',response.data.token);
      console.log(response.data);
      
    } catch(e) {
      alert('Usuario não encontrado :(')
    };
  }
  const handleSubmit = event => {
    event.preventDefault();    
  }
  return (
    <CreatePostContainer>
       <form onSubmit={handleSubmit}>
        <input
          value={title}
          placeholder='Title'
          onChange={e => setTitle(e.target.value)}
          type='text'
          required          
        />
        <textarea
          value={text}
          rows="4"
          cols="30"
          placeholder='Crie seu post aqui'
          onChange={e => setText(e.target.value)}
          type='text'
          required          
        /> 
        <button onClick={props.goToTitleCreatePost}>CANCEL</button>
        <button onClick={ handleLogin }>POST</button>       
      </form>          
    </CreatePostContainer>
    
    
  );
}

export default FormCreateNewPost;