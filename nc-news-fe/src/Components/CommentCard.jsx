import React from 'react';
import {Link} from '@reach/router'
import VoteButtons from './VoteButtons'

const CommentCard = ({comment}) => {
    const date = comment.created_at.split('T')[0]
    const votes = comment.votes
    return (
        <li className='commentCard'>
            <button>Delete Comment</button>
            <h4 className='commentBody'>{comment.body}</h4>
    <p className='commentSub' >Posted by <Link to={`/users/${comment.author}`}> {comment.author} </Link> | Posted on {date} | {comment.votes} Votes </p>  
    <VoteButtons votes={votes} comment_id={comment.comment_id} />
        </li>
    );
};

export default CommentCard;