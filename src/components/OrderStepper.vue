<template>
    <div>
        <StepperNumber :totalStep="totalStep" :step="step"/>
        <router-view></router-view>
        <!-- <OrderInfo v-if="step < 5" :step='step'/>
        <OrderFinished v-else /> -->
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import StepperNumber from '../components/StepperNumber.vue'
// import OrderInfo from '../components/OrderInfo.vue'
// import OrderFinished from './OrderFinished.vue'

export default defineComponent({
    setup() {
        const route = useRoute()  
        const step = computed(() => {
            if(route.params.step === 'pemesan') {
                return 1
            }
            return 1
        })
        const totalStep = ref(5)
        
        return { step, totalStep}
    },
    components: {
        StepperNumber,
        // OrderInfo,
        // OrderFinished,
    }
})
</script>
