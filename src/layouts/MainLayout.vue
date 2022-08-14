<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {};
  },
  components: { Navbar }
});
</script>
<style scoped>
  .title-color {
    color: 445D9E;
  }
</style>