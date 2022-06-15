import axios from "axios";
import store from "../store/index.js";
import {getToken} from "../util/auth.js";

// 后端服务器的域名以及端口
const baseURL = import.meta.env.VITE_API_HOST


const instance = axios.create({
    baseURL
})

// 拦截器添加给请求头添加token
instance.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['Authorization'] = getToken()
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

const { get, post, put } = instance


export {get, post, put}