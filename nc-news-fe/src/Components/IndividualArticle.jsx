import React, { Component } from 'react';
import * as api from '../api'


class IndividualArticle extends Component {
    state = {
        article: {},
        isLoading: true
    }

    componentDidMount(){
        api.getOneArticle(this.props.article_id).then((article) => {
            this.setState({article, isLoading: false})
        })
    }

    render() {
        console.log(this.state.article)
        if (this.state.isLoading === true) return <p>....Loading</p> 
        return (
            <h1> Individual article page</h1>
        );
    }
}

export default IndividualArticle;