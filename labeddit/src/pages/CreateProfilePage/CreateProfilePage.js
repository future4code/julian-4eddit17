import React from 'react';
import { useHistory } from 'react-router-dom';

const CreateProfilePage = () => {
    const HomePage = useHistory();
    const FeedPage = useHistory();      

    const goToHomePage = () => {
        HomePage.push("/")
      }

      const goToFeedPage = () => {
        FeedPage.push("/feed-page/")
      }


  return (
    <div>
        <h2>Area de cadastro de usuario</h2>

        <button onClick={goToFeedPage}>Logar</button> 
     <button onClick={goToHomePage}>Voltar pra Home</button>

    </div>
  );
}

export default CreateProfilePage;