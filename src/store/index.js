import { createStore, createLogger } from 'vuex'
import user from './moudles/user.js'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        user
    },
    plugins: debug ? [createLogger()] : []
})