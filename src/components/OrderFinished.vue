<template>
    <div class="column items-center" style="margin: 60px 0 60px 0">
        <p class="text-center row text-h6" style="margin-bottom: 40px;">
            Pesanan telah bershasil dibuat, 
            <br>
            anda akan dihubungi melalui nomor whatsapp yang telah dimasukkan.
            <br>
            Atau anda bisa menekan tombol konfirmasi dibawah,<br>
            untuk konfirmasi pesanan anda kepada admin kami!
            <br>
            Terimakasih.
        </p>
        <div class='row'>
            <q-btn
                color="primary"
                label="Konfirmasi"
                @click="handleClick"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const handleClick = () => {
            console.log('clicked')
        }

        return { handleClick }
    },
})
</script>
