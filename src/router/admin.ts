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

const admin: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: () => import('pages/Admin.vue'),
    beforeEnter: requiredAdmin,
  },
  // Admin products
  {
    path: '/admin/products',
    component: () => import('components/AdminProducts.vue'),
    beforeEnter: requiredAdmin,
  },
  // admin product create
  {
    path: '/admin/product-create',
    component: () => import('components/AdminProductCreate.vue'),
    beforeEnter: requiredAdmin,
  },
  // admin product edit
  {
    path: '/admin/product-edit/:idProduct',
    component: () => import('components/AdminProductCreate.vue'),
    props: true,
    beforeEnter: requiredAdmin,
  },
  // admin orders
  {
    path: '/admin/orders',
    component: () => import('components/AdminOrders.vue'),
    beforeEnter: requiredAdmin,
  },
  // admin payment methods
  {
    path: '/admin/payment',
    component: () => import('components/AdminPaymentMethods.vue'),
    beforeEnter: requiredAdmin,
  },
];

export default admin;
