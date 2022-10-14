<template>
  <div
    class="row justify-center q-mt-lg"
    style="margin: 20px 0 0 auto; max-width: 1366px"
  >
    <div class="col-3">
      <q-card class="my-card">
        <h3 class="q-pa-md text-center text-weight-light">
          {{ isLogin ? 'Login' : 'Register' }}
        </h3>
        <q-card-section>
          <q-input
            v-model="email"
            class="q-mb-lg"
            filled
            type="email"
            label="Email"
          />

          <!-- Password -->
          <q-input
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            class="q-mt-lg"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <!-- End of Password -->

          <!-- Confirm Password -->
          <q-input
            v-model="passwordConfirm"
            filled
            :type="isPwd ? 'password' : 'text'"
            label="Confirm password"
            class="q-mt-lg"
            v-if="!isLogin"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <!-- End of Confirm Password -->

          <!-- Submit button -->
          <q-btn
            v-if="isLogin || (!isLogin && password == passwordConfirm)"
            color="primary q-my-md"
            :label="isLogin ? 'Login' : 'Register'"
          />

          <!-- if register and password and password confirm not match -->
          <p
            v-if="!isLogin && password != passwordConfirm"
            class="fuchsia q-my-md"
          >
            Password tidak cocok
          </p>

          <!-- Button to register form -->
          <p v-if="isLogin" class="text-weight-regular">
            Belum punya akun? klick
            <a
              style="cursor: pointer; text-decoration: underline"
              @click="isLogin = false"
            >
              disini
            </a>
            untuk register
          </p>
          <!-- Button to register form -->

          <!-- Button to login form -->
          <p v-else class="text-weight-regular">
            Sudah punya akun? klick
            <a
              style="cursor: pointer; text-decoration: underline"
              @click="isLogin = true"
            >
              disini
            </a>
            untuk login
          </p>
          <!-- Button to login form -->
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const isPwd = ref(true);
const isLogin = ref(true);
</script>
