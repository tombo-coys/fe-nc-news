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

    removeComment = (comment_id) => {
        this.setState(currentState => {
            return {comments: currentState.comments.filter(comment => {
                return comment_id !== comment.comment_id
            })}
        })
    }

    handleSubmit = (body) => {
        const {article_id, user} = this.props
        const comment = {username: user, body}
        api.postComment(comment, article_id).then((comment) => {
            this.setState(currentState => {
               return {comments: [comment, ...currentState.comments]}
            })
        })
    }

    render() {
        const {comments} = this.state
        const user = this.props.user

        return (
            <section>
            <PostCommentCard handleSubmit={this.handleSubmit}/>
            <ul className='commentsList'>{comments.map(comment => {
                return (<CommentCard removeComment={this.removeComment} article_id={this.props.article_id} user={user} key={comment.comment_id} comment={comment}/>)
            })}
            </ul>
            </section>
        );
    }
}

export default CommentsList;