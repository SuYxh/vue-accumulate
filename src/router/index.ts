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
  {
    path: '/collapse-page',
    name: 'CollapsePage',
    component: () => import('@/views/CollapsePage/index.vue')
  },
  {
    path: '/icon-page',
    name: 'IconPage',
    component: () => import('@/views/IconPage/index.vue')
  },
  {
    path: '/tooltip-page',
    name: 'TooltipPage',
    component: () => import('@/views/TooltipPage/index.vue')
  },
  {
    path: '/dropdown-page',
    name: 'DropdownPage',
    component: () => import('@/views/DropdownPage/index.vue')
  },
  {
    path: '/message-page',
    name: 'MessagePage',
    component: () => import('@/views/MessagePage/index.vue')
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
