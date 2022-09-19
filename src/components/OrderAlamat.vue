<template>
    <div>
        <q-input v-model="provinsi" label="Provinsi" />
        <q-input v-model="kabupaten" label="Kabupaten" />
        <q-input v-model="kecamatan" label="Kecamatan" />
        <q-input v-model="kodePos" label="Kode pos" />
        <q-input v-model="alamatLengkap" label="Alamat lengkap" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, watch } from 'vue'
import orderDetailsInfo from '../types/orderDetailsInfo'

export default defineComponent({
    props: {
        detailsProp: Object as PropType<orderDetailsInfo>
    },
    emits: ['details'],
    setup(props, { emit }) {
        const provinsi = ref(props.detailsProp?.provinsi)
        const kabupaten = ref(props.detailsProp?.kabupaten)
        const kecamatan = ref(props.detailsProp?.kecamatan)
        const kodePos = ref(props.detailsProp?.kodePos)
        const alamatLengkap = ref(props.detailsProp?.alamatLengkap)

        const send = () => {
            emit('details', {
                provinsi: provinsi.value,
                kabupaten: kabupaten.value,
                kecamatan: kecamatan.value,
                kodePos: kodePos.value,
                alamatLengkap: alamatLengkap.value
            })
        }

        watch([provinsi, kabupaten, kecamatan, kodePos, alamatLengkap], () => {
            send()
        })

        onMounted(() => {
            send()
        })

        return {
            provinsi,
            kabupaten,
            kecamatan,
            kodePos,
            alamatLengkap
        }
    },
})
</script>
