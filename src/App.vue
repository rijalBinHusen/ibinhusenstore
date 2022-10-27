<template>
  <div class="bg-grey-1" style="max-width: 1366px; margin: 0 auto">
    <AdminLayout v-if="isRoleAdmin" />
    <MainLayout v-else />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onBeforeMount } from 'vue';
import { role, getUserFromSession } from './composable/userSignin';
import MainLayout from '../src/layouts/MainLayout.vue';
import AdminLayout from '../src/layouts/AdminLayout.vue';

export default defineComponent({
  components: { MainLayout, AdminLayout },
  name: 'App',
  setup() {
    const isRoleAdmin = computed(() => role.value === 'admin');

    onBeforeMount(async () => {
      await getUserFromSession();
    });
    return { isRoleAdmin };
  },
});
</script>
