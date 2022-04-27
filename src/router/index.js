import {createRouter, createWebHistory} from 'vue-router'
import IndexView from '@/views/IndexView'
import PostsView from "@/views/PostsView"
import SinglePostView from "@/views/SinglePostView"
import auth from "@/middlewares/auth"
import loggedIn from "@/middlewares/loggedIn"
import DefaultLayout from "@/layouts/DefaultLayout"
import MainLayout from "@/layouts/MainLayout"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: IndexView,
        beforeEnter: () =>{
            loggedIn()
        },
        meta: { layout: DefaultLayout }
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsView,
        beforeEnter: () =>{
            auth()
        },
        meta: { layout: MainLayout }
    },
    {
        path: '/posts/:postId',
        name: 'Single post',
        component: SinglePostView,
        beforeEnter: () =>{
            auth()
        },
        meta: { layout: MainLayout }
    }
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})

export default router