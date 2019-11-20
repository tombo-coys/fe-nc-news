import React, { Component } from 'react';

class PostCommentCard extends Component {
    state = {

       body: ''
    }
  
    handleComment = (event) => {
        this.setState({body: event.target.value})
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.handleSubmit(this.state.body);
                this.setState({ body: ''})
            }} className='commentBoxContainer'>
              <br></br>
                <textarea onChange={this.handleComment} value={this.state.body} id='body' className='commentInput' name='commentbox' placeholder='WHACK A COMMENT HERE'>
                </textarea><br></br>
                <button >Add Comment</button>
            </form>
        );
    }
}

export default PostCommentCard;