import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled /*{Keyframes}*/ from 'styled-components';
import axios from 'axios';

const HomePageContainer = styled.div`  
  display:grid;
  margin-left: auto;
  margin-right: auto;  
  text-align: center;
  background-color: #faf6e9;
  margin:0;  
  height:100vh;
  `

const H1Title = styled.h1`
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

const FormContainer = styled.form`
  width: 50vw;
  padding: 3%;   
  display:grid;
  margin-left: auto;
  margin-right: auto;  
  text-align: center;
  color:black;
    :hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
            transition: 3s;
            border-radius: 100px;
            background-color: #ece8d9;
          }
  `

const Input = styled.input`
  display:flex;
  font-size: 0.88rem;
  background: transparent;
  border-radius: 28px;
  border: 1px solid #ece8d9;
  color: black;  
  padding: 1rem 1rem;
  margin: 1rem auto;
  width: 500px;
  text-align: center;
   
  :hover {
    color: black;
    border: 1px solid #cf7500;
    transition: 3s;
  }   
`

const Button = styled.button`  
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
      <H1Title>LABEDDIT</H1Title>
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
        <Button onClick={ handleLogin }>login</Button>       
      </FormContainer>   
      <Button onClick={goToCreateProfilePage}>Sign in</Button>  
        <Button onClick={ handleLogout }>logout</Button>      
    </HomePageContainer>
  );
}

export default HomePage;
