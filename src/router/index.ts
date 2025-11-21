import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Início' },
    },
    {
      path: '/vedacoes',
      name: 'vedacoes',
      component: () => import('../views/ProductsView.vue'),
      meta: { title: 'Produtos' },
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contato' },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = `${title} | Vimasi Vedações`
  } else {
    document.title = 'Vimasi Vedações | Vedações Hidráulicas e Industriais'
  }
  next()
})

export default router
