<template>
  <div
    class="row justify-center q-mt-lg"
    style="margin: 20px 0 0 auto; max-width: 1366px"
  >
    <div class="col-3">
      <q-card class="my-card">
        <h3 class="q-pa-md text-center text-weight-light">Login</h3>
        <q-card-section>
          <q-input
            v-model="email"
            class="q-mb-lg"
            filled
            type="email"
            label="Email"
          />
          <q-input
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            class="q-mt-lg q-mb-lg"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn color="primary" label="Login" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const password = ref('');
const isPwd = ref(true);
const email = ref('');
</script>
