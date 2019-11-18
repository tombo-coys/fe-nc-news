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
        console.log('mounting')
        api.getArticles().then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }
    componentDidUpdate(prevProps){
        console.log(prevProps.topic, this.props.topic)
        if (prevProps.topic !== this.props.topic){
            console.log('component updating?')
            api.getArticles(this.props.topic).then((articles) => {
                this.setState({articles, isLoading: false})
            })
        }
    }

    render() {
        const {articles} = this.state;
        return (
            this.state.isLoading? <p>....Loading</p> : 
            <div >
                <h2 className='articlesHeading'>All Articles</h2>
                <ArticlesFilterBar />
                <main>
                    <ul  className='articlesList'>{articles.map(article => {
                return (
                    <ArticlesCard key={article.id} article={article}  />
                )
                    })}
                </ul>
                </main>
            </div>
        );
    }
}

export default ArticlesList;