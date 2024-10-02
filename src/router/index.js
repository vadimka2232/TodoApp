import { createRouter, createWebHistory } from 'vue-router';
import Profiles from '../components/UserProfiles.vue'; // Импортируем компонент профилейы
import TableComp from '../components/TableComp.vue'; // Импортируем компонент задач

const routes = [
  {
    path: '/',
    name: 'Profiles',
    component: Profiles // Путь для компонента профилей
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TableComp // Путь для компонента задач
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
