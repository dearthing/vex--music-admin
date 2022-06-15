import {login} from "../../api/user.js"
import {getToken, setToken} from "../../util/auth.js";

const state = () => ({
    nickname : '',
    username : '',
    token : getToken(),
    roles : []
})


const getters = {
    nicknameFirstWord: state => {
        return state.nickname.slice(0,1);
    }
}

// action请求处理调用mutation改变state
const actions = {
    login({ commit }, { username, password }) {
        return new Promise((resolve, reject) => {
            login( username.trim(),  password ).then(response => {
                const authorization = response.headers['authorization'];
                commit('SET_TOKEN',authorization); //调用mutation改变state里的token值
                setToken(authorization) //放到客户端的cookie里
                resolve();
            }).catch(error => {
                reject(error)
            })
        })
    },
}


const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NICKNAME: (state, nickname) => {
        state.nickname = nickname
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}