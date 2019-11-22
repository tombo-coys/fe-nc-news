import React, { Component } from 'react';

class PostCommentCard extends Component {
    state = {
       body: ''
    }
  
    handleComment = (event) => {
        const comment = event.target.value
        this.setState({body: comment})
    }

    render() {
        const newComment = this.state.body
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.handleSubmit(newComment);
                this.setState({ body: ''})
            }} className='commentBoxContainer'>
                <br></br>
                <textarea onChange={this.handleComment} value={newComment} id='body' className='commentInput' name='commentbox' placeholder='Type your comment here'>
                </textarea><br></br>
                <button >Add Comment</button>
            </form>
        );
    }
}

export default PostCommentCard;