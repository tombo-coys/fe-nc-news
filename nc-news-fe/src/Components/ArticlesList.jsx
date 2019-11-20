import React, { Component } from 'react';
import ArticlesCard from './ArticlesCard';
import ArticlesFilterBar from './ArticlesFilterBar'
import * as api from '../api'

class ArticlesList extends Component {
    state = {
        articles: [],
        isLoading : true,
        order_by: 'asc',
        sort_by: null
    }

    componentDidMount(){
        api.getArticles(this.props.topic).then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }

    componentDidUpdate(prevProps, prevState){
        const topic = this.props.topic
        const author = this.props.author
        const sort_by = this.state.sort_by
        const order_by = this.state.order_by    

        if (prevProps.topic !== this.props.topic || prevProps.author !== this.props.author || prevState.order_by !== this.state.order_by || prevState.sort_by !== this.state.sort_by){
            api.getArticles(topic, author, sort_by, order_by).then((articles) => {
                this.setState({articles, isLoading: false})
            })
        }

    }

    handleArticleFilter = (sort_by, order_by) => {
            this.setState({sort_by: sort_by, order_by: order_by})
                }

    render() {
        const {articles} = this.state;
        if (this.state.isLoading === true) return <p>....Loading</p> 
        return (
            <div >

                <ArticlesFilterBar handleArticleFilter={this.handleArticleFilter}/>
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