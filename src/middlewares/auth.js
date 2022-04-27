import router from "@/router";

export default function auth() {
    if (!localStorage.getItem('q_login')) {
        return router.push({name: 'Login'});
    }
}