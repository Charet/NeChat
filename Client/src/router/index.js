import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "@/views/Welcome.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Chat from "@/views/Chat.vue";
import Talk from "@/views/Talk";


Vue.use(VueRouter)

const routes = [
    {path: '/', component: Welcome,},
    {path: '/login', component: Login,},
    {path: '/register', component: Register,},

    {
        path: '/chat',
        component: Chat,
        redirect: '/chat/talk',
        children: [
            {path: 'talk', component: Talk},
        ]
    }

]

const router = new VueRouter({
    routes
})

export default router
