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
                <div v-if="step == 1">
                    <q-input v-model="judulPesanan" label="Judul pesanan" />
                    <q-input v-model="namaPemesan" label="Nama pemesan" />
                    <q-input v-model="nomorWhatsApp" label="Nomo whatsapp" />
                </div>

                <div v-if="step == 2">
                    <q-input v-model="dikirim" label="Pesanan dikirim sebelum" />
                    <q-input v-model="pembayaran" label="Pilih metode pembayaran" />
                </div>
                <div class="row">
                    <q-btn 
                        @click="next"
                        color="primary" 
                        label="Selanjutnya" 
                        style="margin-right:20px;"
                    />
                    
                    <q-btn 
                        v-if="step > 1"
                        @click="before"
                        color="negative" 
                        label="Sebelumnya" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        step: {
            type: Number,
            required: true,
        }
    },
    setup(props, { emit }) {
      const judulPesanan = ref(null);
      const namaPemesan = ref(null);
      const nomorWhatsApp = ref(null)
      const dikirim = ref(null)
      const pembayaran = ref(null)
      
      const next = () => {
          emit('nextStep')
      }

      const before = () => {
          emit('beforeStep')
      }

      return { judulPesanan, namaPemesan, nomorWhatsApp, next, before }
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
