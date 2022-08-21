<template>
    <Navbar />
    <div class="row justify-center">
        <div class="col-10" style="margin-top:20px;">
        <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" to="/" />
            <q-breadcrumbs-el label="Keranjang" to="/keranjang" />
            <q-breadcrumbs-el label="pesan" />
        </q-breadcrumbs>
        <OrderStepper />
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import OrderStepper from '../components/OrderStepper.vue'

export default defineComponent({
    components: { Navbar, Footer, OrderStepper},
})
</script>
