<template>
    <div>
        <q-input v-model="judulPesanan" label="Judul pesanan" />
        <q-input v-model="namaPemesan" label="Nama pemesan" />
        <q-input v-model="metodePembayaran" label="Metode pembayaran" />
    </div> 
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from 'vue'
import { ref } from '@vue/reactivity'
import orderDetailsInfo from '../types/orderDetailsInfo'

export default defineComponent({
    emit: [ 'details' ],
    props: {
        detailsProp: Object as PropType<orderDetailsInfo>
    },
    setup(props, { emit }) {
        const judulPesanan = ref(props.detailsProp?.judulPesanan)
        const namaPemesan = ref(props.detailsProp?.namaPemesan)
        const metodePembayaran = ref(props.detailsProp?.metodePembayaran)

        watch([judulPesanan, namaPemesan, metodePembayaran], () => {
            emit('details', { 
                judulPesanan: judulPesanan.value, 
                namaPemesan: namaPemesan.value, 
                metodePembayaran: metodePembayaran.value 
                } 
            )
        })

        return { judulPesanan, namaPemesan, metodePembayaran}
    },
})
</script>
