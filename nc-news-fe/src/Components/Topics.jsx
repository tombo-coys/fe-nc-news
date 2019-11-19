import React from 'react';
import ArticlesList from './ArticlesList';

const Topics = (props) => {
    const {topic} = props
    const topicHeading = topic.charAt(0).toUpperCase() + topic.slice(1)
    return (
        <section>
            <h2 className='topicsHeading'>{topicHeading} Articles</h2>
            <ArticlesList topic={topic} />
        </section>
    );
};

export default Topics;