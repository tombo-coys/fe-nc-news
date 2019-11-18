import axios from 'axios'

export const getArticles = () => {
    return axios.get('https://toms-nc-news-app.herokuapp.com/api/articles').then(({ data }) => {
        return data.articles
    })
}