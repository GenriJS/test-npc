import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/Main.vue';
import NotFound from './components/NotFound.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Main,
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;