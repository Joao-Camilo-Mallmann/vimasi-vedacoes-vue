import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/vedacoes',
      name: 'vedacoes',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
