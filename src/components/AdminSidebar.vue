<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <q-list>
      <template v-for="(menuItem, index) in menuLists" :key="index">
        <q-item 
          clickable 
          @click="activeMenu = menuItem.label" 
          :active="menuItem.label === activeMenu" 
          v-ripple 
          :to="menuItem.route" 
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon"></q-icon>
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>
        <q-separator
          :key="'sep' + index"
          v-if="menuItem.separator"  
        ></q-separator>
      </template>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { leftDrawerOpen } from 'src/composable/admin';
import { fasBox, fasCashRegister, fasMoneyCheck } from '@quasar/extras/fontawesome-v5';
import { ref } from 'vue';

const activeMenu = ref('')

const menuLists = [
  {
    icon: fasBox,
    label: 'Products',
    separator: true,
    route: '/admin/111/products'
  },
  {
    icon: fasCashRegister,
    label: 'Orders',
    separator: true,
    route: '/admin/111/orders'
  },
  {
    icon: fasMoneyCheck,
    label: 'Metode pembayaran',
    separator: true,
    route: '/products'
  },
];
</script>
