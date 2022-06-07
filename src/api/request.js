import axios from "axios";

//后端服务器的域名以及端口
const baseURL = import.meta.env.VITE_API_HOST


//创建axios实例
const instance = axios.create({
    baseURL
})

const { get, post, put } = instance

//暴露该实例
export {get, post, put}