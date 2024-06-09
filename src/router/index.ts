import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/index.vue')
  },
  {
    path: '/button-page',
    name: 'ButtonPage',
    component: () => import('@/views/ButtonPage/index.vue')
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
