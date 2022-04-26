import {createRouter, createWebHistory} from 'vue-router'
import IndexView from '@/views/IndexView'
import PostsView from "@/views/PostsView"
import SinglePostView from "@/views/SinglePostView"

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
    },
    {
        path: '/posts/:postId',
        name: 'Single post',
        component: SinglePostView
    }
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})

export default router