<template>
  <q-page class="q-pa-lg">
    <h4>Buat produk baru</h4>
    <!-- Form input -->
    <div class="row q-gutter-sm">
      <!-- Name product -->
      <q-input
        outlined
        v-model="newProductState.name"
        label="Nama produk"
        @update:model-value="valueChanged('product')"
      ></q-input>
      <!-- End of name product -->

      <!-- Price -->
      <q-input
        outlined
        @update:model-value="valueChanged('product')"
        v-model="newProductState.price"
        label="Harga"
      >
      </q-input>
      <!-- End of price -->

      <!-- Weight -->
      <q-input
        outlined
        v-model="newProductState.weight"
        @update:model-value="valueChanged('product')"
        label="berat"
      ></q-input>
      <!-- End of weight product -->

      <!-- Category product -->
      <q-input
        outlined
        v-model="category"
        label="Tambah kategori"
        @keydown.enter="handleCategory"
      ></q-input>
      <!-- End of category product -->
    </div>

    <!-- End of Form input -->

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

    <!-- Description product -->
    <div class="q-my-md">
      <label for="">Deskripsi produk:</label>
      <q-editor
        v-model="newProductDescription.description"
        min-height="5rem"
        @update:model-value="valueChanged('description')"
      >
      </q-editor>
    </div>
    <!-- End of description product -->

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
    <!-- End of Image uploader -->

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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {
  newProductState,
  newProductDescription,
  createNewProduct,
  getProductById,
  updateProduct,
  emptyProductState,
} from '../composable/products';
import ImageUploaderVue from './ImageUploader.vue';

const $q = useQuasar();
const router = useRouter();
const route = useRoute();

// use this function to update either product or description changed
// so we're just update data that we're only want to update
const valueChanged = (param: string) => {
  if (param == 'product') {
    isNewProductChanged.value = true;
  }
  if (param == 'description') {
    isNewProductDescriptionChanged.value = true;
  }
};

// category model form
const category = ref<string>('');
// function to add category in product
const handleCategory = (e: string) => {
  const isExists = newProductState.value.category.includes(category.value);
  if (!isExists && category.value) {
    newProductState.value.category.push(category.value);
    // set the product changed true
    isNewProductChanged.value = true;
  } else {
    newProductState.value.category = newProductState.value.category.filter(
      (cat) => cat !== e
    );
    // set the product changed true
    isNewProductChanged.value = true;
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
  // set the product changed true
  isNewProductChanged.value = true;
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

onBeforeUnmount(() => {
  emptyProductState();
});

onMounted(async () => {
  console.log(!isEditMode.value);
  if (isEditMode.value) {
    await getProductById(route.params.idProduct as string);
  }
});

const isNewProductChanged = ref(false);
const isNewProductDescriptionChanged = ref(false);

const isEditMode = computed(() => {
  return Boolean(route.params.idProduct);
});
</script>
