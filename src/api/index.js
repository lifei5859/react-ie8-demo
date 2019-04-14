import axios from './axios'

const api = {
    getUser (params) {
        console.log(params)
        return axios.get('/users', params)
    },
    userLogin (params) {
        return axios.post('users/login', params)
    }
}

export default api
