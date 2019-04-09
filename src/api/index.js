import axios from './axios'

const api = {
    getUser (params) {
       return axios.get('/static/json/user.json', params)
    }
}

export default api
