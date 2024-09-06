import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaygroundView from '../views/PlaygroundView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/playground',
        name: 'Playground',
        component: PlaygroundView
    },
    {
      path: '/playground/:id',
      component: PlaygroundView
    }
  ]
})

export default router