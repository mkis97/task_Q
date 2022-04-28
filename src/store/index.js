import {createStore} from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            users: []
        }
    },

    getters: {
        getUsers(state) {
            return state.users
        }
    },

    mutations: {
        FETCH_USERS(state, users) {
            state.users.splice(0, state.users.length, ...users)
        }
    },

    actions: {
        async fetchUsers({commit}) {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                commit("FETCH_USERS", res.data);
            } catch (e) {
                console.log(e)
            }
        }
    }
})

export default store