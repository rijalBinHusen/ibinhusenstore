<template>
  <div class="q-pa-md q-container" style="margin-top:96px;">
    <div class="row justify-center">
      <div class="col-md-5">
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
                <q-btn color="primary" label="Mulai pencarian" />
            </span>
            <span class="col-1 row">
                <div class="col-3">
                    <q-icon class="text-h3 text-grey-8" :name="fasGift" />
                    <p class="text-weight-bold">Puluhan produk</p>
                </div>
                <div class="col-3">
                    <q-icon class="text-h3 text-grey-8" :name="fasHandsHelping" />
                    <p class="text-weight-bold">Transaksi mudah</p>
                </div>
                <div class="col-3">
                    <q-icon class="text-h3 text-grey-8" :name="fasBusinessTime" />
                    <p class="text-weight-bold">Hemat waktu</p>
                </div>
            </span>
        </div>
      </div>
      <div class="col-md-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptatem doloremque fugit sequi beatae dolore nulla, suscipit vitae ullam earum? Rerum ratione sequi incidunt provident laborum iusto odio iste rem!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fasGift, fasHandsHelping, fasBusinessTime } from '@quasar/extras/fontawesome-v5'

export default defineComponent({
    setup() {
        return { fasGift, fasHandsHelping, fasBusinessTime }
    }
})
</script>
