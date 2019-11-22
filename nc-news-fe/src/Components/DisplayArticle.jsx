import React from 'react';
import {Link} from '@reach/router'
import VoteButtons from './VoteButtons';

const DisplayArticle = ({article}) => {
    const votes = article.votes
    const date = article.created_at.split('T')[0]
    const topicName = article.topic.charAt(0).toUpperCase() + article.topic.slice(1)

    return (
        <li className='individualArticle'>
            <h2 className='individualArticleTitle'>{article.title}</h2>
            <h4 className="individualArticleSubheader">Posted on {date}|Posted by <Link to={`/users/${article.author}`}>{article.author} </Link>  | {topicName} </h4>
            <p className='articleBody'>{article.body}</p>
           <VoteButtons votes={votes} article_id={article.article_id} />
        </li>
    );
};

export default DisplayArticle;