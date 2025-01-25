import { createRouter, createWebHistory } from "vue-router";  
import HomeView from "@/Views/HomeView.vue";
import JobsView from "@/Views/JobsView.vue";
import Job from "@/Views/Job.vue";

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
            name:"Jobs",
            component: JobsView,
        },
        {
            path: '/job/:id',
            name:"Job",
            component: Job,
        }
    ],
});

export default router;