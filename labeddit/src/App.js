import React, {useContext} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateProfilePage from './pages/CreateProfilePage/CreateProfilePage';
import FeedPage from './pages/FeedPage/FeedPage';
import PostPage from './pages/PostPage/PostPage';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <HomePage/>
          </Route>
          <Route exact path="/create-new-profile/">
              <CreateProfilePage/>
          </Route>
          <Route exact path="/feed-page/">
              <FeedPage/>
          </Route>
          <Route exact path="/feed-page/post/:id">
              <PostPage/>
          </Route>        
          <Route path="/">
            <div><h1> Error 404! Digite o endereço correto</h1></div>
          </Route>
        </Switch>
    </BrowserRouter>  
  );
}

export default App;
