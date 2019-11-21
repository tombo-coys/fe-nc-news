 import React, { Component } from 'react';
import * as api from '../api'
import DisplayArticle from './DisplayArticle';
import CommentsList from './CommentsList';
import ErrorHandler from './ErrorHandler';

class IndividualArticle extends Component {
    state = {
        article: {},
        isLoading: true,
        error: false,
        errorDetails: null
    }

    componentDidMount(){
        api.getOneArticle(this.props.article_id).then((article) => {
            this.setState({article, isLoading: false})
        }).catch(err => {
            this.setState({error: true, errorDetails: err})
        })
    }

    render() {
        const username = this.props.user
       const {article, isLoading, error, errorDetails} = this.state;
       if (error) return <ErrorHandler errorDetails={errorDetails}/>
        if (isLoading === true) return <p>....Loading</p> 
        return (
            <section className="individualArticleContainer">
            <ul>
            <DisplayArticle article={article} />
            </ul>
          <CommentsList user={username} article_id={article.article_id}/>
            </section>
        );
    }
}

export default IndividualArticle;