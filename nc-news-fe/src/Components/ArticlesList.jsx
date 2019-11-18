import React, { Component } from 'react';
import ArticlesCard from './ArticlesCard';
import ArticlesFilterBar from './ArticlesFilterBar'
import * as api from '../api'

class ArticlesList extends Component {
    state = {
        articles: {},
        isLoading : true
    }

    componentDidMount(){
        api.getArticles().then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }

    render() {
        const {articles} = this.state;
        return (
            this.state.isLoading? <p>....Loading</p> : 
            <div >
                <h2 className='articlesHeading'>All Articles</h2>
                <ArticlesFilterBar />
                <main>
                    <ul className='articlesList'>{articles.map(article => {
                return (
                    <ArticlesCard article={article} key={article.id} />
                )
                    })}
                </ul>
                </main>
            </div>
        );
    }
}

export default ArticlesList;