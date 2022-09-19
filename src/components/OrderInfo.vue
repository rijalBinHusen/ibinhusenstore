<template>
    <div class="row" style="min-height: 200px;">
        <div class="col vr self-center">
            <div class="column items-end text-subtitle1">
                <ol>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                    <li>Pastel isi ayam @250gr (4 buah)</li>
                </ol>
            </div>
        </div>
        <div class="col self-center">
            
            <div class="column q-gutter-sm" style="padding-left:20px; max-width: 300px">
                <OrderDetails :detailsProp="orderDetailsValue"  v-if="step == 1" @details="setOrderDetails($event)" />
                <OrderDetailsPenerima :detailsProp="orderDetailsValue" v-if="step == 2" @details="setOrderDetails($event)" />
                <div class="row">
                    <q-btn 
                        v-if="step > 1"
                        @click="before"
                        color="negative" 
                        label="Sebelumnya" 
                        style="margin-right:20px;"
                    />
                    
                    <q-btn 
                        v-if='showNextBtn'
                        @click="next"
                        color="primary" 
                        label="Selanjutnya" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import OrderDetails from './OrderDetails.vue'
import OrderDetailsPenerima from './OrderDetailsPenerima.vue'
import orderDetailsInfo from '../types/orderDetailsInfo'

export default defineComponent({
    components: { OrderDetails, OrderDetailsPenerima },
    props: {
        step: {
            type: Number,
            required: true,
        }
    },
    setup(props, { emit }) {

    const showNextBtn = ref(false)
    let orderDetailsValue = ref<orderDetailsInfo> ({
        judulPesanan: '',
        namaPemesan: '',
        metodePembayaran: '',
        namaPenerima: '',
        nomorWhatsapp: '',
        provinsi: '',
        kabupaten: '',
        kecamatan: '',
        kodePos: 0,
        alamatLengkap: '',
        dikirim: '',
    })
      
      const next = () => {
          emit('nextStep')
          showNextBtn.value = false
      }

      const before = () => {
          emit('beforeStep')
          showNextBtn.value = true
      }

      const setOrderDetails = (ev: orderDetailsInfo) => {
          if(props.step == 1) {
              if(ev.namaPemesan && ev.judulPesanan && ev.metodePembayaran) {
                showNextBtn.value = true
                orderDetailsValue.value = ev
                return
              }
          } else if(props.step == 2) {
              if(ev.namaPenerima && ev.nomorWhatsapp && ev.dikirim) {
                  showNextBtn.value = true
                  orderDetailsValue.value = Object.assign(orderDetailsValue.value, ev)
                  return
              } else {
                  orderDetailsValue.value = Object.assign(orderDetailsValue.value, ev)
              }
          }
          showNextBtn.value = false
      }

      return { 
          next, 
          before,
          showNextBtn,
          setOrderDetails,
          orderDetailsValue,
    }
    },
})
</script>

<style lang="scss" scoped>
    .vr {
        margin-right: 20px;
        padding-right: 20px;
        border-right: 3px solid $primary;
    }
</style>
