<template>
    <q-header elevated style="max-width:1366px; margin:0 auto;">
      <q-toolbar class='rounded-borders'>
        <q-toolbar-title class='text-h5'> 
          <strong>
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

export default defineComponent({
  name: 'Navbar',

  setup() {
    let links = ref(['Home', 'Cari barang', 'Keranjang', 'Testimonial'])
    // let link = ref(null)
    
    return { links, };
  },
});
</script>