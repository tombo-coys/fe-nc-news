import React, { Component } from 'react';
import UserCard from './UserCard';
import * as api from '../api'
import ArticlesList from './ArticlesList'


class User extends Component {
    state = {
        user: {},
        isLoading: true
    }

    componentDidMount(){
        api.getUser(this.props.username).then((user) => {
            this.setState({user, isLoading: false})
        })
    }

    render() {
        const {user} = this.state
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