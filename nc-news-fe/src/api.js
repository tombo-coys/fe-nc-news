import axios from 'axios'

const baseUrl = 'https://toms-nc-news-app.herokuapp.com/api/'



export const getArticles = (query) => {
    return axios.get(`${baseUrl}articles`, {
        params: {
            topic: query
        }
    }).then(({ data }) => {
        return data.articles
    })
}

export const getOneArticle = (article_id) => {
    return axios.get(`${baseUrl}/articles/${article_id}`).then(({data}) => {
        return data.article
    })
}