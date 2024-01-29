// define routing rules
import { createRouter } from "vue-router"
import { createWebHistory } from 'vue-router'
import QuizesView from "@/views/QuizesView.vue"
import QuizView from "@/views/QuizView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: "quizes",
        component: QuizesView,
        },
        {
        path: "/quiz/:id",
        name: "quiz",
        component: QuizView,
        }
        // {
        // path: "/:catchall(.*)*",
        // name: "Not Found",
        // component: NotFoundView
        // }

]
})

export default router