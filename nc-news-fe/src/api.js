import axios from 'axios'

const baseUrl = 'https://toms-nc-news-app.herokuapp.com/api/'



export const getArticles = (query) => {
    return axios.get(`${baseUrl}articles`, {
        params: query 
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