import router from "./router/index.js";
import store from './store'
import {getToken} from "./util/auth.js";

const whiteList = ['/login', '/404', '/403'];

router.beforeEach(async(to, from, next) => {

    const hasToken = getToken();

    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' });
        } else {
            next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
        }
    }
});