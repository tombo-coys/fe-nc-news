import React from 'react';
import {Link} from '@reach/router'

const CommentCard = ({comment}) => {
    const date = comment.created_at.split('T')[0]

    return (
        <li className='commentCard'>
            <button>Delete Comment</button>
            <h4 className='commentBody'>{comment.body}</h4>
    <p className='commentSub' >Posted by <Link to={`/users/${comment.author}`}> {comment.author} </Link> | Posted on {date} | {comment.votes} Votes </p>  
    <button><img alt='upward facing arrow' className ='voteUpCommentButton' src={require('../Images/uparrow.png')}></img></button> <button><img alt='downward facing arrow' className ='voteDownCommentButton' src={require('../Images/downarrow.png')}></img></button>
        </li>
    );
};

export default CommentCard;