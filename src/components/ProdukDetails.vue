<template>
  <div class="q-pa-md">
    <div class="row justify-center" style="margin-top:20px; height:400px;">
      <div class="column col-md-4" >
             <q-carousel
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
                >
                <q-carousel-slide :name="1" img-src="../assets/cookies8.jpg" />
                <q-carousel-slide :name="2" img-src="../assets/cookies1.jpg" />
                <q-carousel-slide :name="3" img-src="../assets/cookies2.jpg" />
                <q-carousel-slide :name="4" img-src="../assets/cookies3.jpg" />
            </q-carousel>
      </div>
      <div class="col-md-5 items-end offset-md-1" >
        <div class="column" style="height:350px">
            <span class="col-1 text-h5 text-weight-bold ">
                {{ produkInfo?.name }}
            </span>
            
            <span class="col-2 text-h4 text-weight-regular">
                RP{{ produkInfo.price }}
            </span>
            
            <div class="col-2">
                <q-btn :icon="fasShoppingCart" color="primary" label="Masukkan keranjang" />
            </div>
            
            <div class="col-1 text-subtitle1">
                <p class="text-weight-bold">Deskripsi:</p>
                {{ produkDetails }}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { fasShoppingCart } from '@quasar/extras/fontawesome-v5'

export default defineComponent({
    props: {
        produkInfo: {
            type: Object,
            required: true,
        },
        produkDetails: {
            type: String,
            required: true,
        }
    },
    setup() {
        const slide = ref(1)
        return { fasShoppingCart, slide }
    },
    components: { }
})
</script>