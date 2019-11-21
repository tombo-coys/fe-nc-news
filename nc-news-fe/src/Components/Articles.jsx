import React from 'react';
import ArticlesList from './ArticlesList';

const Articles = () => {
    return (
        <section className='articleListContainer'>
            <h2 className='articlesHeading'>All Articles</h2>
            <ArticlesList /> 
        </section>
    );
};

export default Articles;