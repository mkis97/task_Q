import {createRouter, createWebHistory} from 'vue-router'
import IndexView from '@/views/IndexView'
import PostsView from "@/views/PostsView"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: IndexView
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsView
    }
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})

export default router