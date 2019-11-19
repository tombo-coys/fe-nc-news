import React, { Component } from 'react';
import * as api from '../api'
import CommentCard from './CommentCard'

class CommentsList extends Component {
    state = {
        comments: []
    }
    
    componentDidMount(){
        api.getComments(this.props.article_id).then((comments) => {
            this.setState({comments})
        })
    }

    render() {
        const {article_id} = this.props
        const {comments} = this.state
        return (
            <ul className='commentsList'>{comments.map(comment => {
                return (<CommentCard key={comment.comment_id} comment={comment}/>)
            })}
                
            </ul>
        );
    }
}

export default CommentsList;