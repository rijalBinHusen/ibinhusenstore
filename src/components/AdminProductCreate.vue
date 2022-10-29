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
      <q-editor v-model="newProductDescription.description" min-height="5rem">
      </q-editor>
    </div>
    <!-- Image uploader -->
    <div class="row q-gutter-sm">
      <image-uploader-vue
        v-for="img in newProductState.images"
        :key="img"
        :imgsrc="img"
      >
        {{ img }}
      </image-uploader-vue>
      <image-uploader-vue
        @image-url="handleImage($event)"
        @removed-image="handleImage"
      />
    </div>
    <!-- Image uploader -->

    <!-- Button submit -->
    <div class="row q-mt-md">
      <q-btn
        @click="handleSubmit"
        color="primary"
        :label="isEditMode ? 'Update produk' : 'Buat produk'"
      ></q-btn>
    </div>
    <!-- Button sumbit -->
  </q-page>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {
  newProductState,
  newProductDescription,
  createNewProduct,
  getProductById,
  updateProduct,
} from '../composable/products';
import ImageUploaderVue from './ImageUploader.vue';

const $q = useQuasar();
const router = useRouter();
const route = useRoute();

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
const handleImage = (downloadURL: string) => {
  if (downloadURL) {
    // upload file and wait the download url
    newProductState.value.images.push(downloadURL);
  } else {
    newProductState.value.images = newProductState.value.images.filter(
      (img) => img !== downloadURL
    );
  }
};

const handleSubmit = async () => {
  if (isEditMode.value) {
    await updateProduct(
      isNewProductChanged.value,
      isNewProductDescriptionChanged.value
    );
  } else {
    await createNewProduct();
  }
  $q.notify({
    message: `Produk baru berhasil ${
      isEditMode.value ? 'di update!' : 'dimasukkan'
    }`,
    color: 'primary',
    timeout: 500,
  });
  await router.push('/');
};

onMounted(async () => {
  if (isEditMode.value) {
    await getProductById(route.params.idProduct as string);
  }
});

const isNewProductChanged = ref(false);
const isNewProductDescriptionChanged = ref(false);

watch(
  [newProductState, newProductDescription],
  (newVal, oldVal) => {
    if (isEditMode.value) {
      // description
      if (newVal[1].description !== oldVal[1].description) {
        isNewProductDescriptionChanged.value = true;
        console.log('desc berubah');
      }
      // product
      if (
        newVal[0].name !== oldVal[0].name ||
        newVal[0].category.toString() !== oldVal[0].category.toString() ||
        newVal[0].price !== oldVal[0].price ||
        newVal[0].weight !== oldVal[0].weight ||
        newVal[0].images.toString() !== oldVal[0].images.toString()
      ) {
        isNewProductChanged.value = true;
        console.log('product berubah');
      }
    }
  },
  { deep: true }
);

const isEditMode = computed(() => {
  return Boolean(route.params.idProduct);
});
</script>
