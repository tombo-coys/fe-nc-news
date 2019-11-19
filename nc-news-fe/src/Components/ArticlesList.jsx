import React, { Component } from 'react';
import ArticlesCard from './ArticlesCard';
import ArticlesFilterBar from './ArticlesFilterBar'
import * as api from '../api'

class ArticlesList extends Component {
    state = {
        articles: [],
        isLoading : true,
        orderby: null,
        sortby: null
    }

    componentDidMount(){
        api.getArticles(this.props).then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }

    componentDidUpdate(prevProps){
        if (prevProps.topic !== this.props.topic){
            api.getArticles(this.props).then((articles) => {
                this.setState({articles, isLoading: false})
            })
        }
        if (prevProps.author !== this.props.author){
            api.getArticles(this.props).then((articles) => {
                this.setState({articles, isLoading: false})
            })
        }
    }

    handleSubmit = (sortby, orderby) => {
        this.setState({sortby, orderby})
                }

    render() {
        const {articles} = this.state;
        if (this.state.isLoading === true) return <p>....Loading</p> 
        return (
            <div >

                <ArticlesFilterBar handleSubmit={this.handleSubmit}/>
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