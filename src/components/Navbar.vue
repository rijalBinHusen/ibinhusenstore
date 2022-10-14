<template>
  <q-header
    style="max-width: 1366px; margin-left: auto; margin-right: auto"
    elevated
  >
    <q-toolbar class="rounded-borders shadow-1 bg-grey-1">
      <q-btn
        v-if="isRoleAdmin"
        dense
        flat
        round
        icon="menu"
        class="text-blue"
        @click="toggleLeftDrawer"
      />
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

      <q-tabs
        shrink
        class="text-black text-subtitle1"
        active-color="primary"
        inline-label
      >
        <q-btn-dropdown
          auto-close
          class="text-black"
          flat
          :icon="fasUser"
          label="User"
        >
          <q-list>
            <q-item clickable to="/login">
              <q-item-section>Login</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import {
  fasCartArrowDown,
  fasHouseUser,
  fasNewspaper,
  fasSearch,
  fasUser,
} from '@quasar/extras/fontawesome-v5';
import { role } from 'src/composable/userSignin';
import { toggleLeftDrawer } from 'src/composable/admin';
import { defineComponent, ref, computed } from 'vue';
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

    const isRoleAdmin = computed(() => role.value === 'admin');

    const redirect = async () => {
      await router.push({ path: '/' });
    };

    return { links, redirect, fasUser, isRoleAdmin, toggleLeftDrawer };
  },
});
</script>
