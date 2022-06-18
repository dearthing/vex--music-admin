import { post,get} from "./request";


export const search = (paging) => {
    return get('/users/search',{params : paging})
}

export const me = () => {
    return get('/users/me')
}