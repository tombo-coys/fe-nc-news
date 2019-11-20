 import React, { Component } from 'react';
import * as api from '../api'
import DisplayArticle from './DisplayArticle';
import CommentsList from './CommentsList';


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
        const username = this.props.user
       const {article, isLoading} = this.state;
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