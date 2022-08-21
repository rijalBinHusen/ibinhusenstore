<template>
      <q-toolbar class='rounded-borders shadow-1 bg-grey-1'>
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
        <q-tabs 
          shrink 
          v-for="link in links" 
          :key='link.name' 
          class="text-black text-subtitle1"
          active-color="primary"
        >
          <q-route-tab
            :to="link.path"
            :name="link.name" 
            :label="link.name"
            exact
          />
        </q-tabs>
        </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Navbar',

  setup() {
    const router = useRouter()
    let links = ref([
      { name: 'Home', path: '/'  },
      { name: 'Cari barang', path: '/' },
      { name: 'Keranjang', path: '/keranjang' },
      { name: 'Testimonial', path: '/' }
    ])

    const redirect = async () => {
      await router.push({ path: '/'})
    }
    
    return { links, redirect };
  },
});
</script>