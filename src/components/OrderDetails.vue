<template>
    <div>
        <q-input v-model="judulPesanan" label="Judul pesanan" />
        <q-input v-model="namaPemesan" label="Nama pemesan" />
        <q-input v-model="metodePembayaran" label="Metode pembayaran" />
    </div> 
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { ref } from '@vue/reactivity'

export default defineComponent({
    emit: [ 'details' ],
    setup(props, { emit }) {
        const judulPesanan = ref('')
        const namaPemesan = ref('')
        const metodePembayaran = ref('')

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
