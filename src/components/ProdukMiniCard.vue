<template>
        <div class="row">
            <q-img  style="width: 131px; height: 81px; margin-right:10px;" src="../assets/cookies7.jpg"/>
            <div class="col">
                <p class='text-subtitle1 text-weight-bold no-margin'>
                    {{ name }}
                </p>
                <p class='text-subtitle1 text-weight-regular'>
                    {{ formatPrice(price) }}
                </p>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import formatPrice from '../composable/function/formatPrice'

export default defineComponent({
    props: {
        name: String,
        price: Number,
    },
    setup() {
        return { formatPrice}
    }
})
</script>
