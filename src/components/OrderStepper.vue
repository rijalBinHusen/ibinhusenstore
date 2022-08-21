<template>
    <div>
        <StepperNumber :totalStep="totalStep" :step='step' />
        <OrderInfo @nextStep='next' :step='step' @beforeStep='before' />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import OrderInfo from '../components/OrderInfo.vue'
import StepperNumber from '../components/StepperNumber.vue'

export default defineComponent({
    setup() {  
        const step = ref(1)
        const totalStep = ref(3)
        const next = () => {
            if(step.value < 3) {
                step.value++
            }
        }

        const before = () => {
            if(step.value > 1) {
                step.value--
            }
        }

        return { step, next, totalStep, before }
    },
    components: {
        OrderInfo,
        StepperNumber
    }
})
</script>
