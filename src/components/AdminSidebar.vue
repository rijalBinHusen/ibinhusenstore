<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <q-list>
      <template v-for="(menuItem, index) in menuLists" :key="index">
        <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
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

const menuLists = [
  {
    icon: 'box',
    label: 'Products',
    separator: true,
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false,
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false,
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true,
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false,
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false,
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false,
  },
];
</script>
