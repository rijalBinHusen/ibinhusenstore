import { ref } from 'vue';

export const leftDrawerOpen = ref(true);

export const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
