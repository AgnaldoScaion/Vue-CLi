import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
const routes = [
  {path: '/', component: Home},
  {path: '/part2', component: Part2} // Adiciona a rota /part2
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;