<template>
  <div class="q-pa-md bg-grey-2">
    <div class="row justify-center" style="margin-top:96px;">
      <div class="col-md-5 ">
        <div class="column" style="height:450px;">
            <span class="col-4 text-h3 text-weight-bold ">
                Mudah belanjanya,<br> Mudah bayarnya
            </span>
            <br/>
            <span class="col-2 text-h6 text-weight-regular">
                Kami menyediakan banyak <br>
                Metode pebayaran yang mudah.
            </span>
            <span class="col-2">
                <q-btn @click="goToCat" color="primary" label="Mulai pencarian" />
            </span>
            <span class="col-1 row">
                <div class="col">
                    <q-icon class="text-h3 text-grey-8" :name="fasGift" />
                    <p class="text-weight-bold">Puluhan produk</p>
                </div>
                <div class="col">
                    <q-icon class="text-h3 text-grey-8" :name="fasHandsHelping" />
                    <p class="text-weight-bold">Transaksi mudah</p>
                </div>
                <div class="col">
                    <q-icon class="text-h3 text-grey-8" :name="fasBusinessTime" />
                    <p class="text-weight-bold">Hemat waktu</p>
                </div>
            </span>
        </div>
      </div>
      <div class=" column col-md-5 items-end" >
          <q-img
            src="../assets/undraw_empty_cart_co35.svg"
            spinner-color="white"
            style="max-width: 430px"
            />
          <!-- <img src="../assets/undraw_empty_cart_co35.svg" alt="Empty cart"> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fasGift, fasHandsHelping, fasBusinessTime } from '@quasar/extras/fontawesome-v5'

export default defineComponent({
    emits: ['goToCategories'],
    setup(props, { emit }) {
        const goToCat = () => {
            emit('goToCategories')
        }
        return { goToCat, fasGift, fasHandsHelping, fasBusinessTime }
    }
})
</script>
