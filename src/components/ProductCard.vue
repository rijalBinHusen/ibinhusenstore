<template>
  <div class="q-pa-md items-start col-3">
    <!-- <router-link to="/produk"> -->
      <q-card @click='handleClick' class="my-card cursor-pointer">
        <!-- <img :src="imgUrl(product?.img)" /> -->
        <q-img src="../assets/cookies7.jpg" :ratio="16/9"/>
        <q-card-section>
          <div class="text-weight-medium text-caption">{{ product.name }}</div>
          <div class="text-subtitle2 text-weight-regular">RP{{ product.price }}</div>
        </q-card-section>
      </q-card>
    <!-- </router-link> -->
  </div>
</template>

<script lang="ts">
import Product from '../types/Product'
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const handleClick = async () => {
      await router.push({ path: '/produk'})
    }

    return { handleClick }
  },
    props: {
      product: {
        required: true,
        type: Object as PropType<Product>
      }
    },
})
</script>

<style lang="scss" scoped>
  .my-card:hover {
    box-shadow: 0 1px 5px $grey-10;
  }
</style>