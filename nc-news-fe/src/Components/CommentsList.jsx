import React, { Component } from 'react';
import * as api from '../api'
import CommentCard from './CommentCard'
import PostCommentCard from './PostCommentCard'

class CommentsList extends Component {
    state = {
        comments: []
    }
    
    componentDidMount(){
        api.getComments(this.props.article_id).then((comments) => {
            this.setState({comments})
        })
    }

    handleSubmit = (username, body) => {
        const {article_id} = this.props
        const comment = {username: username, body: body}
        api.postComment(comment, article_id).then((comment) => {
            this.setState(currentState => {
               return {comments: [comment, ...currentState.comments]}
            })
        })
    }

    render() {
        const {comments} = this.state
        return (
            <section>
        <PostCommentCard handleSubmit={this.handleSubmit}/>
            <ul className='commentsList'>{comments.map(comment => {
                return (<CommentCard key={comment.comment_id} comment={comment}/>)
            })}
                
            </ul>
            </section>
        );
    }
}

export default CommentsList;