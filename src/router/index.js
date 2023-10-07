import {createRouter, createWebHistory} from "vue-router";
import GClass from "@/views/g_class/GClass.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: GClass
        }
    ],
    history: createWebHistory(),
    scrollBehavior(_) {
        return { x: 0, y: 0 };
    }
})

export default router
