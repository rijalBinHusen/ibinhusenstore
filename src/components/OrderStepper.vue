<template>
    <div>
        <StepperNumber :totalStep="totalStep" :step='step' />
        <OrderInfo v-if="step < 5" @nextStep='next' :step='step' @beforeStep='before' />
        <OrderFinished v-else />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import OrderInfo from '../components/OrderInfo.vue'
import StepperNumber from '../components/StepperNumber.vue'
import OrderFinished from './OrderFinished.vue'

export default defineComponent({
    setup() {  
        const step = ref(1)
        const totalStep = ref(5)
        const next = () => {
            if(step.value < 5) {
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
        StepperNumber,
        OrderFinished,
    }
})
</script>
