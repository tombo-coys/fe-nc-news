import React from 'react';
import { Router, Link } from '@reach/router'
import './App.css';
import Header from './Components/Header';
import Articles from './Components/Articles';
import Topics from './Components/Topics';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Articles path='/' />
        <Topics path='/articles/topic/:topic' />
      </Router>
    </div>
  );
}

export default App;
