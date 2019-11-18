import axios from 'axios'

const baseUrl = 'https://toms-nc-news-app.herokuapp.com/api/'



export const getArticles = (query) => {
    console.log(query, 'in the api file')
    return axios.get(`${baseUrl}articles`, {
        params: {
            topic: query
        }
    }).then(({ data }) => {
        return data.articles
    })
}