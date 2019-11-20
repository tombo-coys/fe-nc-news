import axios from 'axios'

const baseUrl = 'https://toms-nc-news-app.herokuapp.com/api/'



export const getArticles = (topic, author, sort_by, order_by) => {
    return axios.get(`${baseUrl}articles`, {
        params: {
            topic: topic,
            author: author,
            sort_by: sort_by,
            order_by: order_by
        }
    }).then(({ data }) => {
        return data.articles
    })
}


export const getOneArticle = (article_id) => {
    return axios.get(`${baseUrl}/articles/${article_id}`).then(({ data }) => {
        return data.article
    })
}

export const getComments = (article_id) => {
    return axios.get(`${baseUrl}/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments
    })
}

export const getUser = (username) => {
    return axios.get(`${baseUrl}/users/${username}`).then(({ data }) => {
        return data.user
    })
}

export const postComment = (comment, article_id) => {
    return axios.post(`${baseUrl}/articles/${article_id}/comments`, comment).then(({ data }) => {
        return data.comment
    })
}

export const patchArticleVote = (vote, article_id) => {
    return axios.patch(`${baseUrl}/articles/${article_id}`, vote).then(({ data }) => {
        return data.vote
    })
}
export const patchCommentVote = (vote, comment_id) => {
    return axios.patch(`${baseUrl}comments/${comment_id}`, vote).then(({ data }) => {
        return data.vote
    })
}