<template>
    <Navbar />
    <div class="row justify-center">
        <div class="col-10">
            <StepperNumber :totalStep="3" :step='step' />
            <OrderInfo @nextStep='next' />
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import OrderInfo from '../components/OrderInfo.vue'
import StepperNumber from '../components/StepperNumber.vue'

export default defineComponent({
    setup() {
        const step = ref(1)
        const next = () => {
            step.value++
        }
        return { step, next }
    },
    components: { Navbar, Footer, OrderInfo, StepperNumber },
})
</script>
