import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vedacoes from '../views/Vedacoes.vue'
import Contato from '../views/Contato.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/vedacoes',
      name: 'vedacoes',
      component: Vedacoes,
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato,
    },
  ],
})

export default router
