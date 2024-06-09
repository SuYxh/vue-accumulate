import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue') // 动态导入 Home 组件
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/index.vue') // 动态导入 About 组件
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
