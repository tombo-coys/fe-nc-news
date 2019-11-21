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
        sort_by: null,
        error: false,
        errorDetails: null
    }

    componentDidMount(){
        api.getArticles(this.props.topic).then((articles) => {
            this.setState({articles, isLoading: false})
        }).catch(err => {
            this.setState({error: true, errorDetails: err})
        })
    }

    componentDidUpdate(prevProps, prevState){
        const topic = this.props.topic
        const author = this.props.author
        const sort_by = this.state.sort_by
        const order_by = this.state.order_by    

        if (prevProps.topic !== topic || prevProps.author !== author || prevState.order_by !== order_by || prevState.sort_by !== sort_by){
            api.getArticles(topic, author, sort_by, order_by).then((articles) => {
                this.setState({articles, isLoading: false, error: false, errorDetails: null})
            })
        }

    }

    handleArticleFilter = (sort_by, order_by) => {
            this.setState({sort_by: sort_by, order_by: order_by})
                }

    render() {
        const {articles, error, errorDetails} = this.state;
        let topicHeading ='';
        if (this.props.topic){
            topicHeading = this.props.topic.charAt(0).toUpperCase() + this.props.topic.slice(1)
        }
        if (error) return <ErrorHandler errorDetails={errorDetails}/>
        if (this.state.isLoading === true) return <><p>....Loading</p>  <img className='loadingImg' src={require(`../Images/loadingGif.gif`)}alt='loading spinner'></img> </>
        return (
            <div >
                {this.props.topic === 'football' ||this.props.topic === 'coding' ||this.props.topic === 'cooking' ? <h2 className='topicsHeading'>{topicHeading} Articles</h2> : ''}
                <ArticlesFilterBar handleArticleFilter={this.handleArticleFilter}/>
                <main>
                    <ul  className='articlesList'>{articles.map(article => {
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