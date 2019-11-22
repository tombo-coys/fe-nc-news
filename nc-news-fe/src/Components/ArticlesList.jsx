import React, { Component } from 'react';
import ArticlesCard from './ArticlesCard';
import ArticlesFilterBar from './ArticlesFilterBar'
import * as api from '../api'
import ErrorHandler from './ErrorHandler';

class ArticlesList extends Component {
    state = {
        articles: [],
        isLoading : true,
        order_by: 'asc',
        sort_by: 'title',
        error: false,
        errorDetails: null
    }
    
    fetchArticles = () => {
        const topic = this.props.topic
        const author = this.props.author
        const sort_by = this.state.sort_by
        const order_by = this.state.order_by 
        api.getArticles(topic, author, sort_by, order_by).then((articles) => {
            this.setState({articles, isLoading: false, error: false, errorDetails: null})
        }).catch(err => {
            this.setState({error: true, errorDetails: err})
        })
    }

    componentDidMount(){
        this.fetchArticles()
    }

    componentDidUpdate(prevProps, prevState){
        const {topic, author} = this.props
        const {sort_by, order_by} = this.state
        const topicChange = prevProps.topic !== topic;
        const authorChange = prevProps.author !== author;
        const orderByChange = prevState.order_by !== order_by;
        const sortByChange = prevState.sort_by !== sort_by;

        if (topicChange || authorChange || orderByChange || sortByChange){
            this.fetchArticles(topic, author, sort_by, order_by)
        }
    }

    handleArticleFilter = (sort_by, order_by) => {
        this.setState({sort_by, order_by})
    }

    render() {
        const {articles, error, errorDetails, isLoading} = this.state;
        const topic = this.props.topic;
        let topicHeading ='';
        if (topic){
            topicHeading = topic.charAt(0).toUpperCase() + topic.slice(1)
        }
        
        if (error) return <ErrorHandler errorDetails={errorDetails}/>
        if (isLoading === true) return <><p>....Loading</p>  <img className='loadingImg' src={require(`../Images/loadingGif.gif`)}alt='loading spinner'></img> </>

        return (
            <div >
                {topic === 'football' ||topic === 'coding' ||topic === 'cooking' ? <h2 className='topicsHeading'>{topicHeading} Articles</h2> : ''}
                <ArticlesFilterBar handleArticleFilter={this.handleArticleFilter}/>
                <main>
                    <ul className='articlesList'>{articles.map(article => {
                        return (
                            <ArticlesCard key={article.article_id} article={article}  />
                        )
                    })}
                    </ul>
                </main>
            </div>
        );
    }
}

export default ArticlesList;