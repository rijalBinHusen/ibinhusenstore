<template>
  <div>
    <q-select
      v-model="provinsiSelected"
      :options="provinsiLists"
      option-value="province_id"
      option-label="province"
      option-disable="inactive"
      emit-value
      map-options
    />
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
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { orderDetailsInfo, isAlamatComplete } from '../composable/orders';

export default defineComponent({
  setup() {
    console.log(orderDetailsInfo.value);
    const route = useRoute();
    const orderId = route.params.orderId;
    const provinsiSelected = ref('')
    const provinsiLists = ref([
      {
        'province_id': '1',
        'province': 'Bali'
      },
      {
        'province_id': '2',
        'province': 'Bangka Belitung'
      },
      {
        'province_id': '3',
        'province': 'Banten'
      },
      {
        'province_id': '4',
        'province': 'Bengkulu'
      },
      {
        'province_id': '5',
        'province': 'DI Yogyakarta'
      },
      {
        'province_id': '6',
        'province': 'DKI Jakarta'
      },
      {
        'province_id': '7',
        'province': 'Gorontalo'
      },
      {
        'province_id': '8',
        'province': 'Jambi'
      },
      {
        'province_id': '9',
        'province': 'Jawa Barat'
      },
      {
        'province_id': '10',
        'province': 'Jawa Tengah'
      },
      {
        'province_id': '11',
        'province': 'Jawa Timur'
      },
      {
        'province_id': '12',
        'province': 'Kalimantan Barat'
      },
      {
        'province_id': '13',
        'province': 'Kalimantan Selatan'
      },
      {
        'province_id': '14',
        'province': 'Kalimantan Tengah'
      },
      {
        'province_id': '15',
        'province': 'Kalimantan Timur'
      },
      {
        'province_id': '16',
        'province': 'Kalimantan Utara'
      },
      {
        'province_id': '17',
        'province': 'Kepulauan Riau'
      },
      {
        'province_id': '18',
        'province': 'Lampung'
      },
      {
        'province_id': '19',
        'province': 'Maluku'
      },
      {
        'province_id': '20',
        'province': 'Maluku Utara'
      },
      {
        'province_id': '21',
        'province': 'Nanggroe Aceh Darussalam (NAD)'
      },
      {
        'province_id': '22',
        'province': 'Nusa Tenggara Barat (NTB)'
      },
      {
        'province_id': '23',
        'province': 'Nusa Tenggara Timur (NTT)'
      },
      {
        'province_id': '24',
        'province': 'Papua'
      },
      {
        'province_id': '25',
        'province': 'Papua Barat'
      },
      {
        'province_id': '26',
        'province': 'Riau'
      },
      {
        'province_id': '27',
        'province': 'Sulawesi Barat'
      },
      {
        'province_id': '28',
        'province': 'Sulawesi Selatan'
      },
      {
        'province_id': '29',
        'province': 'Sulawesi Tengah'
      },
      {
        'province_id': '30',
        'province': 'Sulawesi Tenggara'
      },
      {
        'province_id': '31',
        'province': 'Sulawesi Utara'
      },
      {
        'province_id': '32',
        'province': 'Sumatera Barat'
      },
      {
        'province_id': '33',
        'province': 'Sumatera Selatan'
      },
      {
        'province_id': '34',
        'province': 'Sumatera Utara'
      }
    ])

    watch([provinsiSelected], (newVal) => {
        console.log(newVal)
    })

    return { orderDetailsInfo, orderId, isAlamatComplete, provinsiLists, provinsiSelected};
  },
});
</script>
