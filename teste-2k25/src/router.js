import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [
  { path: '/', component: App },
  { path: '/part2', component: App } // Adiciona a rota /part2
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router