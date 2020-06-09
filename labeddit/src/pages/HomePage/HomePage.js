import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const HomePageContainer = styled.div` 
  padding: 3%;  
  display:grid;
  margin-left: auto;
  margin-right: auto;  
  text-align: center;
  color:black;
  
  `
const ButtonCad = styled.button`  
  background-color: pink;
  padding: 1%;
  width: 10vw;
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
    :hover {
      color: green;
      border: 4px solid #00FF00;   
    }
` 

const FormContainer = styled.form`
  width: 50vw;
  background-color: #fcfa96;
  padding: 3%;    
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  display:grid;
  margin-left: auto;
  margin-right: auto;  
  text-align: center;
  color:black;
  `

const Input = styled.input`
  display:flex;
  font-size: 1rem;
  font-size: 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: black;  
  padding: 1rem 1rem;
  margin: 1rem auto;
   
  :hover {
    color: blue;
    border: 4px solid #00FF00;
  }   
`

const Button = styled.button`  
  width:10vw;
  background: orange;
  border-radius: 3px;
  border: 2px solid red;
  color: black;  
  padding: 1rem 1rem;
  margin: auto;  
  :hover {
    color: green;
    border: 4px solid #00FF00;    
  }
`

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'

const HomePage = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const CreateProfilePage = useHistory();
  const FeedPage = useHistory();    
  
  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    }
    console.log('body',handleLogin)
    try {
      const response = await axios.post(`${baseUrl}/login`,body);

      localStorage.setItem('token',response.data.token);

      console.log(response.data.token);
      FeedPage.push("/feed-page/")
    } catch(e) {
      alert('Usuario não encontrado :(')
    };
  }
  
  const handleLogout = () => {
    localStorage.clear();
  }
  
  const goToCreateProfilePage = () => {
    CreateProfilePage.push("/create-new-profile/")
  }

  const handleSubmit = event => {
    event.preventDefault();    
  }
        
  return (
    <HomePageContainer>
      <h1>LabEddit</h1>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          value={email}
          placeholder='e-mail'
          onChange={e => setEmail(e.target.value)}
          type='email'
          required          
        />
        <Input
          value={password}
          placeholder='senha'
          onChange={e => setPassword(e.target.value)}
          type='password'
          required          
        />        
        <Button onClick={ handleLogin }>logar</Button>
      </FormContainer>    
      <Button onClick={ handleLogout }>logout</Button>      
      <ButtonCad onClick={goToCreateProfilePage}>Novo Cadastro</ButtonCad>      
    </HomePageContainer>
  );
}

export default HomePage;
