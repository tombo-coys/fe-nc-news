import React, { Component } from 'react';

class PostCommentCard extends Component {
    state = {
       username: '',
       body: ''
    }
    handleUsername = (event) => {
        this.setState({username: event.target.value})
    }
    handleComment = (event) => {
        this.setState({body: event.target.value})
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.handleSubmit(this.state.username, this.state.body);
                this.setState({username: '', body: ''})
            }} className='commentBoxContainer'>
              <label> Username:  <input id='username' value={this.state.username} className='usernameInput' name='username' type="text" onChange={this.handleUsername}/></label>
              <br></br>
                <textarea onChange={this.handleComment} value={this.state.body} id='body' className='commentInput' name='commentbox' placeholder='WHACK A COMMENT HERE'>
                </textarea><br></br>
                <button >Add Comment</button>
            </form>
        );
    }
}

export default PostCommentCard;