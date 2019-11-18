import React from 'react';
import ArticlesList from './ArticlesList';

const Topics = (props) => {
    return (
        <section>
            <ArticlesList topic={props.topic} />
        </section>
    );
};

export default Topics;