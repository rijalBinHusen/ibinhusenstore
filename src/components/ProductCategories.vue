<template>
    <div class="row justify-center" style="margin:20px 0 0 auto; max-width:1366px;">
        <div class=" col-10 ">
            <div class="text-h5 text-weight-medium">
                {{ name }}
            </div>
            <div class="row justify-between">
                <ProductCard v-for="product in products" :key="product.id" :product="product" />
            </div>
        <hr />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from './ProductCard.vue'

export default defineComponent({
    props: {
        products: {
            type: Object,
            required: true,
        },
        name: {
            type: String,
            required: true
        }
    },
    components: { ProductCard }
})
</script>
