<template>
  <q-toolbar class="rounded-borders shadow-1 bg-grey-1">
    <q-toolbar-title @click="redirect" class="text-h5 cursor-pointer">
      <strong class="text-primary" style="text-decoration: none">
        Ibinhusen store
      </strong>
    </q-toolbar-title>
    <q-space />

    <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
    <q-tabs
      shrink
      v-for="link in links"
      :key="link.name"
      class="text-black text-subtitle1"
      active-color="primary"
      inline-label
    >
      <q-route-tab
        :to="link.path"
        :icon="link.icon"
        :name="link.name"
        :label="link.name"
        exact
      />
    </q-tabs>
    <q-btn-dropdown auto-close stretch flat :icon="fasUser" label="User">
      <q-list>
        <q-item clickable to="/login">
          <q-item-section>Login</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-toolbar>
</template>

<script lang="ts">
import {
  fasCartArrowDown,
  fasHouseUser,
  fasNewspaper,
  fasSearch,
  fasUser,
} from '@quasar/extras/fontawesome-v5';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Navbar',

  setup() {
    const router = useRouter();
    let links = ref([
      { name: 'Home', path: '/', icon: fasHouseUser },
      { name: 'Cari barang', path: '/', icon: fasSearch },
      { name: 'Keranjang', path: '/keranjang', icon: fasCartArrowDown },
      { name: 'Testimonial', path: '/', icon: fasNewspaper },
    ]);

    const redirect = async () => {
      await router.push({ path: '/' });
    };

    return { links, redirect, fasUser };
  },
});
</script>
