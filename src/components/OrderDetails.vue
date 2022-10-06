<template>
  <div>
    <q-input v-model="judulPesanan" label="Judul pesanan" />
    <q-input v-model="namaPemesan" label="Nama pemesan" />
    <q-input v-model="metodePembayaran" label="Metode pembayaran" />
    <div v-if="judulPesanan && namaPemesan && metodePembayaran" class="row">
      <q-btn
        :to="{ name: 'order', params: { step: 'penerima' } }"
        color="primary"
        label="Selanjutnya (Penerima)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from '@vue/reactivity';
import orderDetailsInfo from '../composable/orders';

export default defineComponent({
  setup() {
    const judulPesanan = ref(orderDetailsInfo.value.judulPesanan);
    const namaPemesan = ref(orderDetailsInfo.value.namaPemesan);
    const metodePembayaran = ref(orderDetailsInfo.value.metodePembayaran);

    return { judulPesanan, namaPemesan, metodePembayaran };
  },
});
</script>
