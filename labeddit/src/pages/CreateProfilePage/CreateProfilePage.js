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
  color:black;
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
  
`

const Button = styled.button`  
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;  
  padding: 1rem 1rem;
  margin: auto 1rem;  
  :hover {
    color: #00FF00;
    border: 4px solid #00FF00;    
  }
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
        <h1>Area de cadastro de usuario</h1>
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
                <Button onClick={ handleSingUp }>Criar Perfil</Button>        
            </form>
    </AppBarContainer>    
         
     <button onClick={goToHomePage}>Voltar pra Home</button>

    </CreateProfileContainer>
  );
}

export default CreateProfilePage;