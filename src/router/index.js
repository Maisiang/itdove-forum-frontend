import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/:catchAll(.*)",
        redirect : '/0',
    },
    {   // 公開頁面
        path: '/',
        name: "Public",
        component: () => import('@/views/PublicView.vue'),
        children: [
            {
                path: 'kanban/:id',
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
// 切換頁面時移到最上方
/*router.afterEach((to, from,next) => {
    window.scrollTo(0,0);
})*/

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
