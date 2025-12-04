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
      path: '/gaxetas',
      name: 'gaxetas',
      component: () => import('../views/GasketsView.vue'),
      meta: { title: 'O que é Gaxeta? Tipos, Aplicações e Vantagens' },
    },
    {
      path: '/aneis-vedacao',
      name: 'aneis-vedacao',
      component: () => import('../views/SealingRingsView.vue'),
      meta: { title: 'Anéis de Vedação: O-Ring e Tipos | Guia Completo' },
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contato' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
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
