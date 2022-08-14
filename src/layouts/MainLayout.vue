<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />
    <LandingPage />
    <q-page-container>
      <router-view />
    </q-page-container>
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
<style scoped>
  .title-color {
    color: 445D9E;
  }
</style>