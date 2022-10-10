<template>
  <div>
    <Navbar />
    <div class="row justify-center" style="margin: 20px 0 0 auto">
      <div class="col-10" style="margin-top: 20px">
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" to="/" />
          <q-breadcrumbs-el label="Keranjang" to="/keranjang" />
          <q-breadcrumbs-el label="pesan" />
        </q-breadcrumbs>
        <StepperNumber :totalStep="totalStep" :step="step" />
        <div class="row" style="min-height: 200px">
          <OrderItems />
          <div class="col self-center">
            <router-view
              class="column q-gutter-sm"
              style="padding-left: 20px; max-width: 400px"
            >
            </router-view>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import OrderItems from '../components/OrderItems.vue';
import StepperNumber from '../components/StepperNumber.vue';
import { computed, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';

const route = useRoute();
const totalStep = ref<number>(5);
// params berisi step jika akan membuat pesanan
// params berisi idOrder jika pesanan sudah dibuat
const fullPath = route.fullPath;
console.log(route);
const step = computed(() => {
  if (fullPath.includes('pemesan')) {
    return 1;
  } else if (fullPath.includes('penerima')) {
    return 2;
  } else if (fullPath.includes('alamat')) {
    return 3;
  } else if (fullPath.includes('pembayaran')) {
    return 4;
  }
  return 5;
});
</script>
