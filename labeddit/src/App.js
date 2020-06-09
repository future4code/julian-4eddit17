import React from 'react';
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
          <Route exact path="/feed-page/post">
              <PostPage/>
          </Route>
        </Switch>
    
    </BrowserRouter>  
  );
}

export default App;
