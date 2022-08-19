<template>
  <div class="q-pa-md items-start col-3">
    <q-card class="my-card">
      <!-- <img :src="imgUrl(product?.img)" /> -->
      <q-img src="../assets/cookies7.jpg" :ratio="16/9"/>
       <q-card-section>
        <div class="text-weight-medium text-caption">{{ product.name }}</div>
        <div class="text-subtitle2 text-weight-regular">RP{{ product.price }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import Product from '../types/Product'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
      product: {
        required: true,
        type: Object as PropType<Product>
      }
    },
})
</script>
