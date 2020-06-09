import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const CreateProfilePage = useHistory();
    const FeedPage = useHistory();     

    const goToCreateProfilePage = () => {
        CreateProfilePage.push("/create-new-profile/")
      }
    const goToFeedPage = () => {
      FeedPage.push("/feed-page/")
    }


  return (
    <div>
        <h2>Home page- area onde vai ficar login e senha, e botao de cadastro de usuario</h2>
     <button onClick={goToCreateProfilePage}>Novo Cadastro</button>

     <button onClick={goToFeedPage}>Logar</button>

    </div>
  );
}

export default HomePage;
