import React from 'react';
import {Link} from '@reach/router'

const DisplayArticle = ({article}) => {
    const date = article.created_at.split('T')[0]
    const topicName = article.topic.charAt(0).toUpperCase() + article.topic.slice(1)
    return (
        <li className='individualArticle'>
            <h2 className='individualArticleTitle'>{article.title}</h2>
            <h4 className="individualArticleSubheader">Posted on {date}|Posted by <Link to={`/users/${article.author}`}>{article.author} </Link> | {article.votes} votes | {topicName} </h4>
            <p className='articleBody'>{article.body}</p>
            <button><img alt='upvote article button' className ='voteArticleButton' src={require('../Images/uparrow.png')}></img></button> <button><img alt='downvote article button' className ='voteArticleButton' src={require('../Images/downarrow.png')}></img></button>
        </li>
    );
};

export default DisplayArticle;