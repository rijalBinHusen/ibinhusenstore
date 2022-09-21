<template>
    <div>
        <Navbar />
        <div class="col-10" style="margin-top:20px;">
            <q-breadcrumbs>
                <q-breadcrumbs-el label="Home" to="/" />
                <q-breadcrumbs-el label="Keranjang" to="/keranjang" />
                <q-breadcrumbs-el label="pesan" />
            </q-breadcrumbs>
        </div>        
        <div class="col self-center">
            <StepperNumber :totalStep="totalStep" :step="step"/>
            <div class="column q-gutter-sm" style="padding-left:20px; max-width: 400px">
                <OrderItems />
                <router-view></router-view>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts" setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import OrderItems from '../components/OrderItems.vue'
import StepperNumber from '../components/StepperNumber.vue'
import { computed, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

const route = useRoute()
const totalStep = ref<number>(5)
const step = computed(() => {
    if(route.params.step === 'pemesan') {
        return 1
    }
    return 5
})

</script>
