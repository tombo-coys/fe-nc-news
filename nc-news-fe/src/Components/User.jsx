import React, { Component } from 'react';
import UserCard from './UserCard';
import * as api from '../api'
import ArticlesList from './ArticlesList';
import ErrorHandler from './ErrorHandler'


class User extends Component {
    state = {
        user: {},
        isLoading: true,
        error: false,
        errorDetails: null
    }

    componentDidMount(){
        api.getUser(this.props.username).then((user) => {
            this.setState({user, isLoading: false})
        }).catch(err => {
            console.dir('its an error')
            this.setState({error: true, errorDetails: err})
        })
    }

    render() {
        const {user, error, errorDetails} = this.state
        if (error) return <ErrorHandler errorDetails={errorDetails}/>
        return (
            <section>
                <h2>{user.username} user page</h2>
                <UserCard user={user}/>
                <ArticlesList author={user.username}/>
            </section>
        );
    }
}

export default User;