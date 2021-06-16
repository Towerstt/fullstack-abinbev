import React from "react";
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './Styles/App.css';

import Header from './Screens/Header'
import ArticlesList from './Screens/ArticlesList'
import Login from './Screens/Login'
import Settings from './Screens/Settings'
import CreateArticle from './Screens/CreateArticle'
import Article from './Screens/Article'
import Profile from './Screens/Profile'
import Footer from './Screens/Footer'

function App() {
  return (
    <Router>
    <div className='app'>
      <Header />
        <Switch>
          <Route exact path='/'>
            <ArticlesList/>
          </Route>
         <Route exact path={['/login', '/#/register']}>
            <Login />
          </Route>
           {/* <Route exact path='/#/settings'>
            <Settings />
          </Route> */}
          <Route exact path={['/editor', '/editor/:slug']}>
            <CreateArticle />
          </Route>
          <Route exact path='/articles/:slug'>
            <Article />
          </Route>
          {/* <Route exact path={['/#/profile/:username', '/#/profile/:username/favorites']}>
            <Profile />
          </Route>*/}
        </Switch>
      {/* <Footer />  */}
    </div>
    </Router>
  );
}

export default App