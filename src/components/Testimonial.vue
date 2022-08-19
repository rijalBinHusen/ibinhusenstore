<template>
  <div class="q-pa-md">
    <div class="row justify-center" style="margin-top:20px; height:400px;">
      <div class="column col-md-4" >
          <q-img
            src="../assets/cookies8.jpg"
            spinner-color="white"
            style="max-width: 430px"
            :ratio="4/3"
            />
      </div>
      <div class="col-md-5 items-end offset-md-1" >
        <div class="column" style="height:350px">
            <span class="col-1 text-h5 text-weight-bold ">
                {{ testimonial?.product }}
            </span>
            
            <span class="col-2 text-h4 text-weight-regular">
                <Rating :rating="testimonial.rating" />
            </span>
            
            <div class="col-1 text-subtitle1">
                {{ testimonial.user }}
            </div>
            <br/>
            <div class="col-3 text-h6">
                {{ testimonial.content }}
            </div>
            <br/>
            <div class="col-2">
                <q-btn color="primary" label="Details produk" />
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