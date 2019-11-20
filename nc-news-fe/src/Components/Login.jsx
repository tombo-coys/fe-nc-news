import React, { Component } from 'react';

class Login extends Component {
    state= {
        username: 'grumpy19'
    }
handleUser = (event) => {
    const username= event.target.value
    this.setState({username})
}

    render() {
        return (
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
        );
    }
}

export default Login;