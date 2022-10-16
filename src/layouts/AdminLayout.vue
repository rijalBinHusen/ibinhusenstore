<template>
  <q-layout view="hHh lpR fFf">
    <Navbar />
    <Sidebar />
      <q-page-container>
        <router-view />
      </q-page-container>
    <Footer />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from 'src/components/Navbar.vue';
import Footer from 'src/components/Footer.vue';
import Sidebar from 'src/components/AdminSidebar.vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {};
  },
  components: { Navbar, Footer, Sidebar },
});
</script>
