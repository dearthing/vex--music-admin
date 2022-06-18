import {getToken, removeToken, setToken, getCurrentUser, setCurrentUser, removeCurrentUser} from "../../util/auth.js";
import {createToken} from "../../api/token.js";
import {me} from "../../api/user.js"


const state = () => ({
    token: getToken(), currentUser: getCurrentUser()
});


const getters = {
    nicknameFirstWord: state => {
        return state.currentUser && state.currentUser.nickname
            ? state.currentUser.nickname.slice(0, 1)
            : '';
    }
};


const actions = {

    login({commit}, {username, password}) {
        return new Promise((resolve, reject) => {
            createToken(username.trim(), password).then(token => {
                commit('SET_TOKEN', token);
                setToken(token)
                resolve();
            }).catch(error => {
                reject(error)
            })
        })
    },

    fetchCurrentUser({commit}) {
        return new Promise((resolve, reject) => {
            me()
                .then(currenUser => {
                    commit('SET_CURRENT_USER', currenUser);
                    setCurrentUser(currenUser);
                    resolve(currenUser);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    logout({commit}) {
        commit('SET_TOKEN', '')
        commit('SET_CURRENT_USER', '')
        removeCurrentUser()
        removeToken()
    },

};


const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },

    SET_CURRENT_USER: (state, currentUser) => {
        state.currentUser = currentUser
    }

}

export default {
    namespaced: true, state, getters, actions, mutations,
}