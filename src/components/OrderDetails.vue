<template>
  <div>
    <q-input v-model="orders.judul" label="Judul pesanan" />
    <q-input v-model="orders.namaPemesan" label="Nama pemesan" />
    <q-input
      v-model="orderDetailsInfo.metodePembayaran"
      label="Metode pembayaran"
    />
    <div v-if="isPemesanComplete()" class="row">
      <q-btn
        :to="{ path: `/order/${orderId}/penerima` }"
        color="primary"
        label="Selanjutnya (Penerima)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  orderDetailsInfo,
  isPemesanComplete,
  orders,
} from '../composable/orders';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const orderId = route.params.orderId;

    return { orderDetailsInfo, orderId, isPemesanComplete, orders };
  },
});
</script>
