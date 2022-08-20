<template>
    <q-header reveal class='rounded-borders bg-grey-1' elevated style="max-width:1366px; margin:0 auto;">
      <q-toolbar>
        <q-toolbar-title @click="redirect" class='text-h5 cursor-pointer'> 
          <strong class="text-primary" style="text-decoration:none;">
              Ibinhusen store
          </strong>
        </q-toolbar-title>
         <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs shrink v-for="link in links" :key='link' class="text-black text-subtitle1">
          <q-tab :name="link" :label="link" />
        </q-tabs>
        </q-toolbar>
    </q-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Navbar',

  setup() {
    const router = useRouter()
    let links = ref(['Home', 'Cari barang', 'Keranjang', 'Testimonial'])

    const redirect = async () => {
      await router.push({ path: '/'})
    }
    
    return { links, redirect };
  },
});
</script>