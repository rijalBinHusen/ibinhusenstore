import { ref } from 'vue';

import { firebaseAuth } from 'src/firebase/firebaseApp';
import { signInWithEmailAndPassword, User } from 'firebase/auth';

interface user {
  email: string;
  password: string;
}

export const isPending = ref(false);

export const role = ref('');

export const user = ref<User>();

export const signin = async (payload: user) => {
  try {
    isPending.value = true;
    const res = await signInWithEmailAndPassword(
      firebaseAuth,
      payload.email,
      payload.password
    );
    if (!res) {
      throw new Error('Could not complete the signup');
    }
    user.value = res.user;
    if (res.user.uid === 'L2JMxk9qOZTF2eB344MoBo1lNtf1') {
      role.value = 'admin';
    }
    sessionStorage.setItem('userLoggedInApp', JSON.stringify(user.value));
    return res;
  } catch (err) {
    alert(err);
  }
  isPending.value = false;
};

export const getUserFromSession = () => {
  // console.log(window.sessionStorage.getItem('user'));
  const getUser: string | null = sessionStorage.getItem('userLoggedInApp');
  if (getUser) {
    // console.log(getUser);
    /*eslint no-unsafe-negation: "error"*/

    const extracted = JSON.parse(getUser) as User;
    user.value = extracted;
  }
};
