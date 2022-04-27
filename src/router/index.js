import {createRouter, createWebHistory} from 'vue-router'
import IndexView from '@/views/IndexView'
import PostsView from "@/views/PostsView"
import SinglePostView from "@/views/SinglePostView"
import auth from "@/middlewares/auth"
import loggedIn from "@/middlewares/loggedIn"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: IndexView,
        beforeEnter: () =>{
            loggedIn()
        }
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsView,
        beforeEnter: () =>{
            auth()
        }
    },
    {
        path: '/posts/:postId',
        name: 'Single post',
        component: SinglePostView,
        beforeEnter: () =>{
            auth()
        }
    }
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})

export default router