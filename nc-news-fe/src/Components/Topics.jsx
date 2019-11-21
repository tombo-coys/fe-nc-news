import React from 'react';
import ArticlesList from './ArticlesList';

const Topics = (props) => {
    const {topic} = props
    return (
        <section>
            <ArticlesList topic={topic} />
        </section>
    );
};

export default Topics;