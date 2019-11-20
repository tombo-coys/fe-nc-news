import React from 'react';
import {Link, navigate} from '@reach/router'
import VoteButtons from './VoteButtons'
import * as api from '../api'


const handleClick = (comment, article_id) => {

    api.deleteComment(comment.comment_id).then(() => {
    window.alert('comment deleted')
    navigate(`/article/${article_id}`)
    
})
}


const CommentCard = ({comment, user, article_id}) => {
    const date = comment.created_at.split('T')[0]
    const votes = comment.votes
    return (
        <li className='commentCard'>
            {user === comment.author ? <button onClick={()=> {handleClick(comment, article_id)}}>Delete Comment</button> : ''}
            <h4 className='commentBody'>{comment.body}</h4>
            <p className='commentSub' >Posted by <Link to={`/users/${comment.author}`}> {comment.author} </Link> | Posted on {date} | {comment.votes} Votes </p>  
            <VoteButtons votes={votes} comment_id={comment.comment_id} />
        </li>
    );
    
};

export default CommentCard;