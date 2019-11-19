import React, { Component } from 'react';

class PostCommentCard extends Component {
    render() {
        return (
            <form className='commentBoxContainer'>
                <textarea name='commentbox' placeholder='WHACK A COMMENT HERE'>
                    
                </textarea><br></br>
                <button >Add Comment</button>
            </form>
        );
    }
}

export default PostCommentCard;