<template>
  <q-page class="q-pa-lg">
    <h4>Buat produk baru</h4>
    <!-- Form input -->
    <div class="row q-gutter-sm">
      <q-input outlined v-model="product.name" label="Nama produk"></q-input>
      <q-input
        outlined
        v-model="category"
        label="Kategory"
        @keydown.enter="addCategory"
      ></q-input>
      <q-input outlined v-model="product.price" label="Harga"></q-input>
      <q-input outlined v-model="product.weight" label="berat"></q-input>
    </div>
    <!-- Form input -->
    <!-- Description -->
    <div class="q-my-md">
      <label for="">Deskripsi produk:</label>
      <q-editor v-model="description" min-height="5rem"> </q-editor>
    </div>
    <!-- Image uploader -->
    <div class="row q-gutter-sm">
      <q-uploader
        url="http://localhost:4444/upload"
        label="Gambar produk"
        style="max-width: 250px"
      ></q-uploader>

      <q-uploader
        url="http://localhost:4444/upload"
        label="Gambar produk"
        style="max-width: 250px"
      ></q-uploader>
    </div>
    <!-- Image uploader -->

    <!-- Button submit -->
    <div class="row q-mt-md">
      <q-btn color="primary" label="Buat produk"></q-btn>
    </div>
    <!-- Button sumbit -->
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ProductTypes } from '../types/Product';

const product = ref({} as ProductTypes);
const category = ref('' as string);
const addCategory = () => {
  const isExists = product.value.category.includes(category.value);
  if (!isExists) {
    product.value.category.push(category.value);
  }
  category.value = '';
};
const description = ref('Tulis deskripsi produk');
</script>
