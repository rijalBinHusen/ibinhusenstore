import { ref } from 'vue';

import { firebaseAuth } from 'src/firebase/firebaseApp';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface user {
  email: string;
  password: string;
}

export const role = ref('admin');

export const user = ref({});

const signin = async (payload: user) => {
  try {
    const res = await signInWithEmailAndPassword(
      firebaseAuth,
      payload.email,
      payload.password
    );
    if (!res) {
      throw new Error('Could not complete the signup');
    }
    user.value = res.user;
    console.log(user.value);
  } catch (err) {
    alert(err);
  }
};

export default signin;
