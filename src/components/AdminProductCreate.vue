<template>
  <q-page class="q-pa-lg">
    <h4>Buat produk baru</h4>
    <!-- Form input -->
    <div class="row q-gutter-sm">
      <q-input
        outlined
        v-model="newProductState.name"
        label="Nama produk"
      ></q-input>
      <q-input outlined v-model="newProductState.price" label="Harga"></q-input>
      <q-input
        outlined
        v-model="newProductState.weight"
        label="berat"
      ></q-input>
      <q-input
        outlined
        v-model="category"
        label="Tambah kategori"
        @keydown.enter="handleCategory"
      ></q-input>
    </div>
    <!-- Form input -->
    <!-- Kategory lists -->
    <div class="q-my-md">
      Kategori produk:
      <q-chip
        v-for="cat in newProductState.category"
        :key="cat"
        removable
        color="primary"
        text-color="white"
        :label="cat"
        :title="cat"
        @remove="handleCategory(cat)"
      />
    </div>
    <!-- Kategory lists -->
    <!-- Description -->
    <div class="q-my-md">
      <label for="">Deskripsi produk:</label>
      <q-editor v-model="description" min-height="5rem"> </q-editor>
    </div>
    <!-- Image uploader -->
    <image-uploader-vue
      imgsrc="https://firebasestorage.googleapis.com/v0/b/catatansaya-b7f41.appspot.com/o/products%2F1666829885176?alt=media&token=53f85e75-450f-4fb5-aaad-6a11d70ee389"
    />

    <image-uploader-vue @image-url="addImage($event)" />
    <!-- Image uploader -->

    <!-- Button submit -->
    <div class="row q-mt-md">
      <q-btn
        @click="createNewProduct"
        color="primary"
        label="Buat produk"
      ></q-btn>
    </div>
    <!-- Button sumbit -->
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { newProductState, createNewProduct } from '../composable/products';
import ImageUploaderVue from './ImageUploader.vue';

// category model form
const category = ref<string>('');
// function to add category in product
const handleCategory = (e: string) => {
  const isExists = newProductState.value.category.includes(category.value);
  if (!isExists && category.value) {
    newProductState.value.category.push(category.value);
  } else {
    newProductState.value.category = newProductState.value.category.filter(
      (cat) => cat !== e
    );
  }
  category.value = '';
};
// add image
const addImage = (downloadURL: string) => {
  // upload file and wait the download url
  newProductState.value.images.push(downloadURL);
};
// description reference
const description = ref<string>('Tulis deskripsi produk');
</script>
