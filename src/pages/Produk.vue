<template>
    <Navbar />
      <div class="row justify-center">
        <div class="q-pa-md q-gutter-sm col-10">
            <q-breadcrumbs>
                <q-breadcrumbs-el label="Home" to="/" />
                <q-breadcrumbs-el label="Produk" />
            </q-breadcrumbs>
        </div>
        <h1>Hello world</h1>
      </div>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
    components: { Navbar, Footer }
})
</script>
