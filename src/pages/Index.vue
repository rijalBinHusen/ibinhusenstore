<template>
    <div class="q-container">
      <Navbar />
      <Hero />
      <ProductCategories :categories="categories" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import ProductCategories from '../components/ProductCategories.vue'
import landingPage from '../assets/landingPage.json'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    let categories = computed(() => landingPage?.categories)
    
    return { categories };
  },
  components: { Navbar, Hero, ProductCategories}
});
</script>