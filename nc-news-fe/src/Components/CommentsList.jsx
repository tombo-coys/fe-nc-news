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

    handleSubmit = (body) => {
        const {article_id, user} = this.props
        const comment = {username: user, body: body}
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
                return (<CommentCard article_id={this.props.article_id} user={user} key={comment.comment_id} comment={comment}/>)
            })}
                
            </ul>
            </section>
        );
    }
}

export default CommentsList;