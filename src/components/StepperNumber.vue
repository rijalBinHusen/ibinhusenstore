<template>
    <div class="row justify-center" style="margin: 20px 0 20px 0">
        <div 
            class="col-2 row justify-center"
            v-for="number in arrayNumber(totalStep)" 
            :key="number" 
        >
            <q-avatar
                size="md" 
                :color="[number == step ? 'primary' : 'grey'].toString()" 
                text-color="white"
            >
                {{ number }}
            </q-avatar>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        totalStep: {
            type: Number,
            required: true,
        },
        step: {
            type: Number,
            required: true
        }
    },
    setup() {
        const arrayNumber = (totalNumber: number) => {
            let result = []
            for (let i = 1; i <= totalNumber; i++) {
                result.push(i)
            }
            return result
        }

        return { arrayNumber }
    },
})
</script>
