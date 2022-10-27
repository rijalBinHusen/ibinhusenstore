<template>
  <div class="q-pa-md items-start col-3">
    <!-- <router-link to="/produk"> -->
    <q-card @click="handleClick" class="my-card cursor-pointer">
      <!-- <img :src="imgUrl(product?.img)" /> -->
      <q-img :src="produkImages" :ratio="16 / 9" />
      <q-card-section>
        <div class="text-weight-medium text-caption">{{ product.name }}</div>
        <div class="text-subtitle2 text-weight-regular">
          RP{{ product.price }}
        </div>
      </q-card-section>
    </q-card>
    <!-- </router-link> -->
  </div>
</template>

<script lang="ts" setup>
import { ProductTypes } from '../types/Product';
import { PropType, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { isArray } from '@vue/shared';

const router = useRouter();
const route = useRoute();

const handleClick = async () => {
  if (isPageAdmin.value) {
    await router.push(`/admin/product-edit/${props.product.id}`);
    return;
  }
  await router.push({ path: '/produk' });
};

const produkImages = computed(() => {
  if (isArray(props.product.images)) {
    return props.product.images[0];
  }

  return props.product.images;
});

const isPageAdmin = computed(() => {
  return route.fullPath.indexOf('admin') > -1;
});

const props = defineProps({
  product: {
    required: true,
    type: Object as PropType<ProductTypes>,
  },
});
</script>

<style lang="scss" scoped>
.my-card:hover {
  box-shadow: 0 1px 5px $grey-10;
}
</style>
