<template>
  <div class="bg-grey-1" style="max-width: 1366px; margin: 0 auto">
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <Navbar />
        <router-view />
        <Footer />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from 'src/components/Navbar.vue';
import Footer from 'src/components/Footer.vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {};
  },
  components: { Navbar, Footer },
});
</script>
