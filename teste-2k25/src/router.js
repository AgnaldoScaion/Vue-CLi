import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Part2 from './components/Part2.vue'

const routes = [
  { path: '/', component: App },
  { path: '/part2', component: Part2 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router