import React from 'react';

const CommentCard = ({comment}) => {
    return (
        <li className='commentCard'>
            <h4 className='commentBody'>{comment.body}</h4>
    <p classname='commentSub' >Posted by {comment.author} | Posted on {comment.created_at} | {comment.votes} Votes </p>
    <button><img alt='upward facing arrow' className ='voteUpCommentButton' src={require('../Images/uparrow.png')}></img></button> <button><img alt='downward facing arrow' className ='voteDownCommentButton' src={require('../Images/downarrow.png')}></img></button>
        </li>
    );
};

export default CommentCard;