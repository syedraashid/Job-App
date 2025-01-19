import { createRouter, createWebHistory } from "vue-router";  
import HomeView from "@/Views/HomeView.vue";
import JobView from "@/Views/JobView.vue";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name:"Home",
            component: HomeView,
        },
        {
            path: "/jobs",
            name:"Job",
            component: JobView,
        }
    ],
});

export default router;