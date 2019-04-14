import axios from 'axios'

var instance = axios.create({
    timeout: 5000,
})

instance.interceptors.request.use(function (config) {
    console.log(config)
    config.params = {
        ...config.params
    }
    // 在发送请求之前做些什么
    return config
}, function (error) {
// 对请求错误做些什么
    return Promise.reject(error)
})

export default instance
