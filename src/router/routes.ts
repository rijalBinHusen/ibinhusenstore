import {
  RouteRecordRaw,
  RouteLocationRaw,
  NavigationGuardNext,
} from 'vue-router';
import { firebaseAuth } from '../firebase/firebaseApp';

const requiredAdmin = (
  to: RouteLocationRaw,
  from: RouteLocationRaw,
  next: NavigationGuardNext
) => {
  const user = firebaseAuth.currentUser;
  if (!user) {
    next('/login');
  } else {
    next();
  }
};

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
    path: '/admin/:idAdmin',
    children: [
      { path: '', component: () => import('pages/Admin.vue') },
      // Admin products
      {
        path: 'products',
        component: () => import('components/AdminProducts.vue'),
        name: 'products',
      },
      // admin product create
      {
        path: 'product-create',
        component: () => import('components/AdminProductCreate.vue'),
      },
      // admin orders
      {
        path: 'orders',
        component: () => import('components/AdminOrders.vue'),
      },
      // admin payment methods
      {
        path: 'payment',
        component: () => import('components/AdminPaymentMethods.vue'),
      },
    ],
    beforeEnter: requiredAdmin,
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
