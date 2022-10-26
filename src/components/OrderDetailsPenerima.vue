<template>
  <div>
    <q-input v-model="orderDetailsInfo.namaPenerima" label="Nama penerima" />
    <q-input v-model="orderDetailsInfo.nomorWhatsApp" label="Nomor whatsApp" />
    <q-input
      v-model="dikirim"
      mask="date"
      :rules="[minDate]"
      label="Pesanan dikirim sebelum"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model="dikirim" :options="minDate" minimal>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <div v-if="isPenerimaComplete()" class="row">
      <q-btn
        :to="{ path: `/order/${orderId}/alamat` }"
        color="primary"
        label="Selanjutnya (Alamat)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  orderDetailsInfo,
  isPenerimaComplete,
  orders,
} from '../composable/orders';

export default defineComponent({
  setup() {
    let nowDate = new Date();
    nowDate.setDate(nowDate.getDate() + 14);
    let minimalDate = nowDate.toISOString().slice(0, 10).replace(/-/g, '/');
    const route = useRoute();
    const dikirim = ref('');
    const orderId = route.params.orderId;

    const minDate = (date: string) => {
      if (date) {
        return date >= minimalDate;
      }
      return minimalDate;
    };

    onMounted(() => {
      if (!orders.value.dikirim) {
        dikirim.value = minimalDate;
      }
    });

    watch([dikirim], (newVal) => {
      orders.value.dikirim = newVal[0];
    });

    return { orderDetailsInfo, minDate, dikirim, orderId, isPenerimaComplete };
  },
});
</script>
