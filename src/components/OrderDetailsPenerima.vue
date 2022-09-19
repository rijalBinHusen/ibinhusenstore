<template>
    <div>
        <q-input v-model="namaPenerima" label="Nama penerima" />
        <q-input v-model="nomorWhatsapp" label="Nomor whatsApp" />
        <q-input 
            v-model="dikirim" 
            mask='date'
            :rules="[minDate]" 
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
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch, onMounted } from 'vue'
import orderDetailsInfo from '../types/orderDetailsInfo'

export default defineComponent({
    props: {
        detailsProp: Object as PropType<orderDetailsInfo>
    },
    emits: ['details'],
    setup(props, { emit }) {
        let nowDate = new Date()
        nowDate.setDate(nowDate.getDate() + 14)
        let minimalDate = nowDate.toISOString().slice(0, 10).replace(/-/g, '/')

        const minDate =  (date: string) =>  {
            if(date) {
                return date >= minimalDate
            }
            return minimalDate
        }

        const namaPenerima = ref(props.detailsProp?.namaPenerima)
        const nomorWhatsapp = ref(props.detailsProp?.nomorWhatsapp)
        const dikirim = ref(props.detailsProp?.dikirim)

        onMounted(() => {
            if(!dikirim.value) {
                dikirim.value = minimalDate
            }
        })

        const send = () => {
            emit('details', {
                namaPenerima: namaPenerima.value,
                nomorWhatsapp: nomorWhatsapp.value,
                dikirim: dikirim.value
            })
        }

        watch([namaPenerima, nomorWhatsapp, dikirim], () => {
            send()
        })

        onMounted(() => {
            send()
        })


        return { nomorWhatsapp, dikirim, namaPenerima, minDate}
    },
})
</script>
