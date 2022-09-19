<template>
  <MainLayout />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '../src/layouts/MainLayout.vue'

export default defineComponent({
  components: { MainLayout },
  name: 'App',
});
</script>
