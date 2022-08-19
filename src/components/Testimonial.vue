<template>
  <div class="q-pa-md">
    <div class="row justify-evenly" style="margin-top:20px; height:400px;">
      <div class="column col-md-5" >
          <q-img
            src="../assets/cookies8.jpg"
            spinner-color="white"
            style="max-width: 430px"
            :ratio="4/3"
            />
      </div>
      <div class="col-md-5 items-end">
        <div class="column">
            <div class="text-h5 text-weight-bold ">
                {{ testimonial?.product }}
            </div>
            <br/>
            <div class="row text-h4 text-weight-regular">
                <Rating :rating="testimonial.rating" />
            </div>
            <div class="col-2">
                <q-btn color="primary" label="Mulai pencarian" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fasSplotch, fasStar } from '@quasar/extras/fontawesome-v5'
import Rating from './Rating.vue'

export default defineComponent({
    props: {
        testimonial: {
            required: true,
            type: Object,
        }
    },
    setup() {
        const arrayOfNumber = (n: number) => {
            let result = []
            for(let i=1; i <= n; i++) {
                result.push(i)
            }
            return result
        }
        return { fasSplotch, arrayOfNumber, fasStar }
    },
    components: {
        Rating
    }
})
</script>
