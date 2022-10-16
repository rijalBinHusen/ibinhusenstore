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

  {
    path: '/admin',
    component: () => import('pages/Admin.vue'),
  },
  // Admin products
  {
    path: '/products',
    component: () => import('pages/AdminProducts.vue'),
  },
  // admin product create
  {
    path: '/product-create',
    component: () => import('pages/AdminProductCreate.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
