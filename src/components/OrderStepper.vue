<template>
    <div>
        <StepperNumber :totalStep="totalStep" :step='step' />
        <OrderInfo v-if="step < 5" @nextStep='next' :step='step' @beforeStep='before' />
        <OrderFinished v-else />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import OrderInfo from '../components/OrderInfo.vue'
import StepperNumber from '../components/StepperNumber.vue'
import OrderFinished from './OrderFinished.vue'

export default defineComponent({
    setup() {
        const route = useRoute()  
        const step = Number(route.params.step)
        const totalStep = ref(5)
        const next = () => {
            // if(step < 5) {
            //     step++
            // }
        }

        const before = () => {
            // if(step.value > 1) {
            //     step--
            // }
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
