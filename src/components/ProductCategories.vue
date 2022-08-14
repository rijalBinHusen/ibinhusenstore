<template>
    <div class="q-container" style="margin-top:20px">
        <div v-for="cat in categories" :key="cat">
            <span class="text-h5 text-weight-medium">
                {{ cat?.name }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Categories from '@/types/Categories'

export default defineComponent({
    props: {
        categories: {
            type: Array as PropType<Categories>,
            required: true,
        }
    },
    // setup(props) {
    //     const categoriesName = computed(() => {
    //         return props?.categories.map((val) => val?.name)
    //     })
        
    //     return { categoriesName }
    // },
})
</script>
