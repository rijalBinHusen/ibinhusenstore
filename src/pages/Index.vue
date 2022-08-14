<template>
    <div class="q-container">
      <Navbar />
      <Hero />
      <ProductCard />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import ProductCard from '../components/ProductCard.vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {};
  },
  components: { Navbar, Hero, ProductCard }
});
</script>