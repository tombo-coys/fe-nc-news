import React from 'react';
import {Link} from '@reach/router'

const ArticlesCard = ({article}) => {
    const topic = article.topic;   
    return (
        <div className='articleCard'>
            <li > 
            <img className='topicLogo' src={require(`../Images/${topic}.png`)} alt={`${topic} logo`}></img>
                <h3 className='articleTitle'><Link to={`/article/${article.article_id}`}> {article.title}</Link></h3>
                <h4 className='articleSubheader'>Posted by{article.author} | {article.comment_count} comments | {article.votes} votes | posted on {article.created_at} </h4>
                <button><img alt='upward facing arrow' className ='voteButton' src={require('../Images/uparrow.png')}></img></button> <button><img alt='downward facing arrow' className ='voteButton' src={require('../Images/downarrow.png')}></img></button>
                </li>
        </div>
    );
};

export default ArticlesCard;