import {get} from "./request";


// 创建sayHello方法调用后端的api
export const sayHello = () =>{
    // 通过调用暴露出来的get方法调用后端的/hello接口
    // return 的是一个promise对象
    return get('/hello')
}

