import { createRouter, createWebHashHistory } from 'vue-router';
import layout from "../pages/Layout.vue";


export const menusRouter = [
    {
        path : 'dashboard',
        name : 'Dashboard',
        meta : {title : '控制台', icon : 'dashboard'},
        component : () => import("../pages/dashboard/Index.vue")
    },
    {
        path : 'user',
        name : 'User',
        meta : {title : '用户管理', icon : 'manage_accounts'},
        component : () => import("../pages/user/Index.vue")
    }
]


const routes = [
    {
        path : '/',
        component : layout,
        redirect : 'dashboard',
        children : menusRouter
    },
    {
        path : '/login',
        component: () => import("../pages/Login.vue")
    },
    {
        path : '/:pathMatch(.*)',
        component: () => import("../pages/404.vue")
    }
]


const router = createRouter({
    scrollBehavior: () => ({ y: 0 }),
    history: createWebHashHistory(),
    routes
});


export default router;