import React from 'react';
import {Link} from '@reach/router'

const ArticlesCard = ({article}) => {
    const topic = article.topic;   
    const date = article.created_at.split('T')[0]

    console.log(date)
    return (
        <div className='articleCard'>
            <li > 
           <Link to={`/articles/topic/${article.topic}`} ><img className='topicLogo' src={require(`../Images/${topic}.png`)} alt={`${topic} logo and link to topic page`}></img></Link>
                <h3 className='articleTitle'><Link to={`/article/${article.article_id}`}> {article.title}</Link></h3>
                <h4 className='articleSubheader'>Posted by <Link to={`/users/${article.author}`}> {article.author} </Link>| {article.comment_count} comments | {article.votes} votes | posted on {date} </h4>
                <button><img alt='upward facing arrow' className ='voteButton' src={require('../Images/uparrow.png')}></img></button> <button><img alt='downward facing arrow' className ='voteButton' src={require('../Images/downarrow.png')}></img></button>
                </li>
        </div>
    );
};

export default ArticlesCard;