<template>
  <div>
    <q-input v-model="orderDetailsInfo.provinsi" label="Provinsi" />
    <q-input v-model="orderDetailsInfo.kabupaten" label="Kabupaten" />
    <q-input v-model="orderDetailsInfo.kecamatan" label="Kecamatan" />
    <q-input v-model="orderDetailsInfo.kodePos" label="Kode pos" />
    <q-input v-model="orderDetailsInfo.alamatLengkap" label="Alamat lengkap" />
    <div v-if="isAlamatComplete()" class="row">
      <q-btn
        :to="{ path: `/order/${orderId}/alamat` }"
        color="primary"
        label="Selanjutnya (Alamat)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { orderDetailsInfo, isAlamatComplete } from '../composable/orders';

export default defineComponent({
  setup() {
    // const send = () => {
    console.log(orderDetailsInfo.value);
    const route = useRoute();
    const orderId = route.params.orderId;
    // }

    // watch([provinsi, kabupaten, kecamatan, kodePos, alamatLengkap], () => {
    //     // send()
    // })

    return { orderDetailsInfo, orderId, isAlamatComplete };
  },
});
</script>
