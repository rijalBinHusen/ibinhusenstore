<script lang="ts">
import { computed, defineComponent } from 'vue';
import Hero from '../components/Hero.vue';
import ProductCategories from '../components/ProductCategories.vue';
import landingPage from '../assets/landingPage.json';
import Testimonial from '../components/Testimonial.vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    let categories = computed(() => landingPage?.categories);
    let testimonial = computed(() => landingPage?.testimonial);

    const goToElm = () => {
      window.scrollTo(0, 600);
    };

    return { goToElm, categories, testimonial };
  },
  components: { Hero, ProductCategories, Testimonial },
});
</script>

<template>
  <div class="q-container">
    <Hero @goToCategories="goToElm" />
    <ProductCategories
      v-for="cat in categories"
      :key="cat.id"
      :name="cat.name"
      :products="cat.products"
    />
    <Testimonial :testimonial="testimonial" />
  </div>
</template>
