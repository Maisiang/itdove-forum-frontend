import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/:catchAll(.*)",
        redirect : '/',
    },
    {   // 公開頁面
        path: '/',
        name: "Public",
        component: () => import('@/views/PublicView.vue'),
        children: [
            {
                path: 'kanban/:kanbanName',
                name: 'Home',
                component: () => import('@/views/Public/HomeView.vue'),
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/Public/AboutView.vue'),
            }
        ]
    },

];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 切換頁面時移到最上方
router.afterEach((to, from,next) => {
    window.scrollTo(0,0);
})

export default router
