import React, { Component } from 'react';
import { Router } from '@reach/router'
import './App.css';
import Header from './Components/Header';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import IndividualArticle from './Components/IndividualArticle';
import User from './Components/User';
// import Login from './Components/Login';

class App extends Component {
  state = {
    username: 'grumpy19'
  }
  handleUser = (event) => {
    const username = event.target.value
    this.setState({ username })
  }

  render() {
    const username = this.state.username
    return (
      <div className="App">
        <form className='logIn'>
          <p className='loggedInUser'> Logged in as: </p>
          <select onChange={this.handleUser} className='userSelect'>
            <option>grumpy19</option>
            <option>jessjelly</option>
            <option>tickle122</option>
            <option>happyamy2016</option>
            <option>cooljmessy</option>
            <option>weegembump</option>
          </select>
        </form>
        <Header />
        <Router>
          <Articles path='/' />
          <Topics path='/articles/topic/:topic' />
          <IndividualArticle user={username} path='/article/:article_id' />
          <User path='/users/:username' />
        </Router>
      </div>
    );
  }
}

export default App;
