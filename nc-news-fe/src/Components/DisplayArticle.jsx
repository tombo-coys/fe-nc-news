import React from 'react';

const DisplayArticle = ({article}) => {
    return (
        <li className='individualArticle'>
            <h2 className='individualArticleTitle'>{article.title}</h2>
    <h4 className="individualArticleSubheader">Posted on {article.created_at}| Posted by {article.author} | {article.votes} votes | {article.topic} </h4>
<p className='articleBody'>{article.body}</p>
<button><img alt='upvote article button' className ='voteArticleButton' src={require('../Images/uparrow.png')}></img></button> <button><img alt='downvote article button' className ='voteArticleButton' src={require('../Images/downarrow.png')}></img></button>

        </li>
    );
};

export default DisplayArticle;