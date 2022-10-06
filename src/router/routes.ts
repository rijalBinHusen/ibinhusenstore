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
    name: 'order-parent',
    component: () => import('pages/Order.vue'),
    props: true,
    children: [
      {
        path: '',
        component: () => import('components/OrderDetails.vue'),
        name: 'pemesan',
      },
      {
        path: '',
        component: () => import('components/OrderDetailsPenerima.vue'),
        name: 'penerima',
      },
      {
        path: '',
        component: () => import('components/OrderAlamat.vue'),
        name: 'alamat',
      },
      {
        path: '',
        component: () => import('components/OrderBayar.vue'),
        name: 'pembayaran',
      },
      {
        path: '',
        component: () => import('components/OrderFinished.vue'),
        name: 'selesai',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
