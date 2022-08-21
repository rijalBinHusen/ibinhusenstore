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
                    <q-input 
                        v-model="dikirim" 
                        mask='date' 
                        :rules="[dikirim]" 
                        label="Pesanan dikirim sebelum" 
                    >
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="dikirim" :options="minDate" minimal>
                                <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                    <q-input v-model="pembayaran" label="Pilih metode pembayaran" />
                </div>
                <div class="row">
                    <q-btn 
                        v-if='showNextBtn'
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
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        step: {
            type: Number,
            required: true,
        }
    },
    setup(props, { emit }) {

    const minDate =  (date) => {
        let nowDate = new Date()
        nowDate.setDate(nowDate.getDate() + 14)
        let minimalDate = nowDate.toISOString().slice(0, 10).replace(/-/g, '/')
        if(date) {
            return date >= minimalDate
        }
        return minimalDate
    }

    const showNextBtn = computed(() => {
        if(
            props.step == 1 
            && judulPesanan.value 
            && namaPemesan.value 
            && nomorWhatsApp.value
        ) {
            return true
        }
        else if(
            props.step == 2
            && dikirim.value 
            && pembayaran.value
        ) {
            return true
        }
        return false
    })

    const judulPesanan = ref(null);
    const namaPemesan = ref(null);
    const nomorWhatsApp = ref(null)
    const dikirim = ref(minDate())
    const pembayaran = ref(null)
      
      const next = () => {
          emit('nextStep')
      }

      const before = () => {
          emit('beforeStep')
      }

      return { 
          judulPesanan, 
          namaPemesan, 
          nomorWhatsApp, 
          next, 
          before, 
          dikirim, 
          pembayaran,
          minDate,
          showNextBtn,
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
