<template>
  <div>
    <Navbar />
    <div class="row justify-center">
      <div class="col-10">
          <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" to="/" />
              <q-breadcrumbs-el label="Produk" />
          </q-breadcrumbs>
          
          <ProdukDetails 
            :produkInfo='produk.produk' 
            :produkDetails='produk.details.content'
          />
          
          <ProdukTestimoni :testimoni='produk.testimoni' />
      </div>
    </div>
    <ProductCategories :products='produk.suggestCategory.products' :name="produk.suggestCategory.name" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ProdukDetails from '../components/ProdukDetails.vue'
import ProdukTestimoni from '../components/ProdukTestimoni.vue'
import ProductCategories from '../components/ProductCategories.vue'
import produk from '../assets/produkDetails.json'

export default defineComponent({
    components: { Navbar, Footer, ProdukDetails, ProdukTestimoni, ProductCategories },
    setup() {
      return { produk }
    }
})
</script>
