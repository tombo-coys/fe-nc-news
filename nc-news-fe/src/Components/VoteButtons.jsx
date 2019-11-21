import React, { Component } from 'react';
import * as api from '../api'

class VoteButtons extends Component {
    state={
        change: 0,
        disabled: false
    }

    handleVote = (num) => {
        console.log(num, "***")
        const comment_id = this.props.comment_id
        const article_id = this.props.article_id
        const vote = {inc_votes: num}
        this.setState((prevState) => {
            return {change: num + prevState.change, disabled: true}
        })
        if(comment_id === undefined){
            api.patchArticleVote(vote, article_id)
        }   
        else {
            api.patchCommentVote(vote, comment_id)  
        } 
    }

    render() {
        return (
            <section className='voter'>
                <button disabled={this.state.disabled} onClick={() => {this.handleVote(1)}} ><img alt='upward facing arrow' className ='voteButton' src={require('../Images/uparrow.png')}></img></button> 
                <p>Current votes: {this.props.votes + this.state.change}</p>
                <button disabled={this.state.disabled} onClick={() => {this.handleVote(-1)}} value={-1}><img alt='downward facing arrow' className ='voteButton' src={require('../Images/downarrow.png')}></img></button>
            </section>
        );
    }
}

export default VoteButtons;