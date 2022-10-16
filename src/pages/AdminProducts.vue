<template>
<div>
    <!-- Search produk -->
    <div class="q-pa-md row q-gutter-sm ">
        <q-input class="col-7" outlined v-model="produk" label="Cari produk"></q-input>
        <q-btn class="col-1" color="primary" icon="search"></q-btn>
        <q-btn class="col-2" color="primary" label="Buat produk baru" to="product-create"></q-btn>
    </div>
    <!-- Search produk -->
    <q-page class="row justify-between">
        <productCard v-for="product in lists" :key="product.id" :product="product" />
    </q-page>
</div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue'
    import ProductCard from '../components/ProductCard.vue'
    import { renewProduct, lists } from '../composable/products'
    const produk = ref('')

    onMounted(() => {
        renewProduct()
    })
</script>