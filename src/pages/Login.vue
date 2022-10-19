<template>
  <div
    class="row justify-center q-mt-lg"
    style="margin: 20px 0 0 auto; max-width: 1366px"
  >
    <div class="col-3">
      <form v-if="!isPending" @submit.prevent="handleSubmit">
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
              required
            />

            <!-- Password -->
            <q-input
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Password"
              class="q-mt-lg"
              required
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
              required
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
              @click="handleSubmit"
            />

            <!-- if register and password and password confirm not match -->
            <p
              v-if="!isLogin && password != passwordConfirm"
              class="fuchsia q-my-md"
            >
              Password tidak cocok
            </p>

            <div @click="toggle" v-html="formToggle"></div>
          </q-card-section>
        </q-card>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import signup from '../composable/userRegister';
import { signin, isPending, user } from '../composable/userSignin';
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const isPwd = ref(true);
const isLogin = ref(true);
const router = useRouter();

const toggle = () => {
  isLogin.value = !isLogin.value;
};

const formToggle = computed(() => {
  return isLogin.value
    ? `<p class="text-weight-regular">
      Belum punya akun? klick
        <a
          style="cursor: pointer; text-decoration: underline"
        >
          disini
        </a>
        untuk register
      </p>`
    : `<p class="text-weight-regular">
        Sudah punya akun? klick
        <a
          style="cursor: pointer; text-decoration: underline"
        >
          disini
        </a>
        untuk login
      </p>`;
});

onMounted(async () => {
  if (user?.value?.uid) {
    await router.push('/');
  }
});

const handleSubmit = async () => {
  if (!isLogin.value) {
    await signup({ email: email.value, password: password.value });
    window.location.reload();
  } else {
    let result = await signin({ email: email.value, password: password.value });
    if (result) {
      await router.push('/admin/' + result.user.uid + '/products');
    }
  }
  email.value = '';
  password.value = '';
  passwordConfirm.value = '';
};
</script>
