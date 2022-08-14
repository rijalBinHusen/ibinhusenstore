<template>
  <q-layout view="lHh Lpr lFf">
    <div style="max-width:1366px; margin:0 auto;">
      <Navbar />
      <LandingPage />
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue'
import LandingPage from '../components/LandingPage.vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {};
  },
  components: { Navbar, LandingPage }
});
</script>