import axios from "axios";
import store from "../store/index.js";
import { Notify } from 'quasar'

// 后端服务器的域名以及端口
const baseURL = import.meta.env.VITE_API_HOST
const tokenPrefix = 'Bearer '

const instance = axios.create({
    baseURL
})

// 拦截器添加给请求头添加token
instance.interceptors.request.use(
    config => {
        if (store.state.user.token) {
            config.headers['Authorization'] = tokenPrefix + store.state.user.token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response=>{
        return response.data;
    },
    error => {
        Notify.create({
            type: 'negative',
            message: error.message,
            position : 'top'
        });
        return Promise.reject(error)
    },
)


const { get, post, put } = instance

export {get, post, put}