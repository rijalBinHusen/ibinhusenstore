import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Index.vue'),
  },
  {
    path: '/produk',
    component: () => import('pages/Produk.vue'),
  },
  {
    path: '/keranjang',
    component: () => import('pages/Keranjang.vue'),
  },
  {
    path: '/order/:step',
    name: 'order',
    component: () => import('pages/Order.vue'),
    props: true,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
