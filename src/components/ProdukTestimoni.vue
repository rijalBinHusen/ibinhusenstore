<template>
    <div style="margin-top:20px;">
        <p class="text-h6">Ulasan produk:</p>
        <div name="testimoni-card">
            <div name='testimoni-card-rating' class="text-h5">
                <Rating :rating=" testimoni.rating" />
            </div>
            <div name='testimoni-card-username' class="text-h6">
                {{ testimoni.user }}
            </div>
            <div class="text-subtitle1">
                {{ testimoni.content }}
            </div>
            <hr />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Rating from './Rating.vue'

export default defineComponent({
    props: {
        testimoni: {
            required: true,
            type: Object,
        }
    },
    components: { Rating }
})
</script>
