import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import Header from './Components/Header';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import IndividualArticle from './Components/IndividualArticle';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Articles path='/' />
        <Topics path='/articles/topic/:topic' />
        <IndividualArticle path='/article/:article_id' />
        <User path='/users/:username' />
      </Router>
    </div>
  );
}

export default App;
