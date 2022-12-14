import { RouteRecordRaw } from 'vue-router';
import admin from './admin';

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
    path: '/order/:orderId/',
    name: 'order',
    component: () => import('pages/Order.vue'),
    props: true,
    children: [
      {
        path: 'pemesan',
        component: () => import('components/OrderDetails.vue'),
      },
      {
        path: 'penerima',
        component: () => import('components/OrderDetailsPenerima.vue'),
      },
      {
        path: 'alamat',
        component: () => import('components/OrderAlamat.vue'),
      },
      {
        path: 'pembayaran',
        component: () => import('components/OrderBayar.vue'),
      },
      {
        path: 'selesai',
        component: () => import('components/OrderFinished.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

const merge: RouteRecordRaw[] = routes.concat(admin);

export default merge;
