<template>
    <div class="q-container">
      <Navbar />
      <Hero />
      <ProductCategories :categories="categories" />
      <Testimonial :testimonial="testimonial" />
      <Footer />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import ProductCategories from '../components/ProductCategories.vue'
import landingPage from '../assets/landingPage.json'
import Testimonial from '../components/Testimonial.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    let categories = computed(() => landingPage?.categories)
    let testimonial = computed(() => landingPage?.testimonial)
    
    return { categories, testimonial };
  },
  components: { Navbar, Hero, ProductCategories, Testimonial, Footer }
});
</script>