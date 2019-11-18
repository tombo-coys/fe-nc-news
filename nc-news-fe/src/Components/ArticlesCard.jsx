import React from 'react';

const ArticlesCard = ({article}) => {
    const topic = article.topic;
    
    return (
        <div className='articleCard'>
            <li>
            <img src={require(`../Images/${topic}.png`)} alt={`${topic} logo`}></img>
                <h3 className='articleTitle'>{article.title}</h3>
    <h4 className='articleSubheader'>Posted by{article.author} | {article.comment_count} comments | {article.votes} votes | posted on {article.created_at} </h4>
                <button>upvote</button> <button>downvote</button>
                </li>
        </div>
    );
};

export default ArticlesCard;