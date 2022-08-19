<template>
    <div class="row justify-center" style="margin:20px 0 0 auto; max-width:1366px;">
        <div class=" col-10 " v-for="cat in categories" :key="cat">
            <div class="text-h5 text-weight-medium">
                {{ cat?.name }}
            </div>
            <div class="row justify-between">
                <ProductCard v-for="product in cat.products" :key="product.id" :product="product" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Categories from '../types/Categories'
import ProductCard from './ProductCard.vue'

export default defineComponent({
    props: {
        categories: {
            type: Object as PropType<Categories[]>,
            required: true,
        }
    },
    components: { ProductCard }
})
</script>
