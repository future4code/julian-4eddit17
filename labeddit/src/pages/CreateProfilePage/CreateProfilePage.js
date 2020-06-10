import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'; 

const CreateProfileContainer = styled.div` 
  padding: 3%;  
  display:grid;
  margin-left: auto;
  margin-right: auto;  
  text-align: center;
  background-color: #faf6e9;
  height:90vh;
  button{
    padding: 1%;
    width: 10vw;
    margin-top: 2vh;
    margin-left: auto;
    margin-right: auto;  
  }
  `

const AppBarContainer = styled.div`
  display: block;
  justify-content: space-between;  
  align-items: center;
  padding: 0 1rem;  
  min-width: 60%;
  :hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
            transition: 3s;
            border-radius: 100px;
            background-color: #ece8d9;
          }
`
const H1Title = styled.h1`
  font-size: 30px;
  font-family: 'Yeseva One', cursive;
  color: black;
  width: 100%;
        :hover
            {
                   /*Ainda to pensando em algumas animações pra 
                   colocar aqui*/
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
  text-align: center;
  width: 300px;
   
  :hover {
    color: black;
    border: 1px solid #cf7500;
    transition: 3s;
  }     
`

const StyledButton = styled.button`
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

const CreateProfilePage = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ name, setName ] = useState('')

    const HomePage = useHistory();
    const FeedPage = useHistory();

    const handleSingUp = async () => {
        const body = {
            email: email,
            password: password,
            username: name
        }
        try{
            const response = await axios.post(`${baseUrl}/signup`,body);

            localStorage.setItem('token',response.data.token);
            console.log(response.data);
            FeedPage.push("/feed-page/");
        } catch(e) {
            alert('Erro no Cadastro! Tente novamente!')

        };
    };      

    const goToHomePage = () => {
        HomePage.push("/")
    }

    const handleSubmit = event => {
        event.preventDefault();    
      }

  return (
    <CreateProfileContainer>
        <H1Title>Sign in </H1Title>
        <AppBarContainer>
            <form onSubmit={handleSubmit}>            
                <Input
                    value={name}
                    placeholder='Nome'
                    onChange={e => setName(e.target.value)}
                    type='text'
                    pattern="[A-Za-z ]{3,}"
                    title="O nome deve conter 3 letras no mínimo"            
                    required 
                />
                <Input
                    value={email}
                    placeholder='E-mail'
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    required
                />
                <Input
                    value={password}
                    placeholder='Senha'
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    required
                />            
                <StyledButton onClick={ handleSingUp }>Criar Perfil</StyledButton>        
            </form>
    </AppBarContainer>    
         
     <StyledButton onClick={goToHomePage}>homepage</StyledButton>

    </CreateProfileContainer>
  );
}

export default CreateProfilePage;