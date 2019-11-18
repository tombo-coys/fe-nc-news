import React from 'react';

const ArticlesCard = ({article}) => {
    return (
        <div className='articleCard'>
            <li >{article.title}</li>
        </div>
    );
};

export default ArticlesCard;