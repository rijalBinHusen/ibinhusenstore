<template>
  <div>
    <!-- Provinsi -->
    <q-select
      v-model="provinsiSelected"
      :options="provinsiLists"
      option-value="province_id"
      option-label="province"
      option-disable="inactive"
      emit-value
      map-options
    />
    <!-- Kabupaten / kota -->
    <q-select
      v-model="citySelected"
      :options="cityLists"
      option-value="city_id"
      option-label="city_name"
      option-disable="inactive"
      emit-value
      map-options
    >
      <template v-slot:no-option>
        <q-spinner color="primary" size="3em" :thickness="2" />
      </template>
    </q-select>

    <q-input v-model="orderDetailsInfo.kecamatan" label="Kecamatan" />
    <q-input v-model="orderDetailsInfo.kodepos" label="Kode pos" />
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
import { CityResponse, Result as CityResult } from '../types/CityResponse';

export default defineComponent({
  setup() {
    const route = useRoute();
    const orderId = route.params.orderId;
    const provinsiSelected = ref('');
    const provinsiLists = ref([
      {
        province_id: '1',
        province: 'Bali',
      },
      {
        province_id: '2',
        province: 'Bangka Belitung',
      },
      {
        province_id: '3',
        province: 'Banten',
      },
      {
        province_id: '4',
        province: 'Bengkulu',
      },
      {
        province_id: '5',
        province: 'DI Yogyakarta',
      },
      {
        province_id: '6',
        province: 'DKI Jakarta',
      },
      {
        province_id: '7',
        province: 'Gorontalo',
      },
      {
        province_id: '8',
        province: 'Jambi',
      },
      {
        province_id: '9',
        province: 'Jawa Barat',
      },
      {
        province_id: '10',
        province: 'Jawa Tengah',
      },
      {
        province_id: '11',
        province: 'Jawa Timur',
      },
      {
        province_id: '12',
        province: 'Kalimantan Barat',
      },
      {
        province_id: '13',
        province: 'Kalimantan Selatan',
      },
      {
        province_id: '14',
        province: 'Kalimantan Tengah',
      },
      {
        province_id: '15',
        province: 'Kalimantan Timur',
      },
      {
        province_id: '16',
        province: 'Kalimantan Utara',
      },
      {
        province_id: '17',
        province: 'Kepulauan Riau',
      },
      {
        province_id: '18',
        province: 'Lampung',
      },
      {
        province_id: '19',
        province: 'Maluku',
      },
      {
        province_id: '20',
        province: 'Maluku Utara',
      },
      {
        province_id: '21',
        province: 'Nanggroe Aceh Darussalam (NAD)',
      },
      {
        province_id: '22',
        province: 'Nusa Tenggara Barat (NTB)',
      },
      {
        province_id: '23',
        province: 'Nusa Tenggara Timur (NTT)',
      },
      {
        province_id: '24',
        province: 'Papua',
      },
      {
        province_id: '25',
        province: 'Papua Barat',
      },
      {
        province_id: '26',
        province: 'Riau',
      },
      {
        province_id: '27',
        province: 'Sulawesi Barat',
      },
      {
        province_id: '28',
        province: 'Sulawesi Selatan',
      },
      {
        province_id: '29',
        province: 'Sulawesi Tengah',
      },
      {
        province_id: '30',
        province: 'Sulawesi Tenggara',
      },
      {
        province_id: '31',
        province: 'Sulawesi Utara',
      },
      {
        province_id: '32',
        province: 'Sumatera Barat',
      },
      {
        province_id: '33',
        province: 'Sumatera Selatan',
      },
      {
        province_id: '34',
        province: 'Sumatera Utara',
      },
    ]);
    const citySelected = ref('');
    const cityLists = ref<CityResult[]>([]);

    const districtSelected = ref('');
    const districtLists = ref('');

    const getCityLists = async (provinceId: string) => {
      cityLists.value.length = 0;
      citySelected.value = '';

      let headersList = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      };

      let response = await fetch('http://localhost:4000/kota/' + provinceId, {
        method: 'GET',
        headers: headersList,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      let data: CityResponse = await response.json();
      cityLists.value = data.rajaongkir.results;
    };

    const getOngkir = async () => {
      if (citySelected.value) {
        let headersList = {
          Accept: '*/*',
          'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        };

        let response = await fetch(
          `http://localhost:4000/ongkir/160/${citySelected.value}/1000/jne`,
          {
            method: 'GET',
            headers: headersList,
          }
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        let data = await response.json();
        console.log(data);
      }
    };

    watch([provinsiSelected, citySelected], async (newVal, oldVal) => {
      if (newVal[0] !== oldVal[0]) {
        await getCityLists(newVal[0]);
      }
      await getOngkir();
      console.log(newVal[0], newVal[1]);
    });

    return {
      orderDetailsInfo,
      orderId,
      isAlamatComplete,
      provinsiLists,
      provinsiSelected,
      citySelected,
      cityLists,
      districtSelected,
      districtLists,
    };
  },
});
</script>
