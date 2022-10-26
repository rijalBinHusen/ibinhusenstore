import { ref } from 'vue';
import { firebaseAuth } from 'src/firebase/firebaseApp';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { getAdminUID, adminUID, adminTypes } from './admin';

interface user {
  email: string;
  password: string;
}

export const isPending = ref(false);

export const role = ref('');

export const user = ref<User>();

export const signin = async (payload: user) => {
  try {
    await getAdminUID();
    isPending.value = true;
    const res = await signInWithEmailAndPassword(
      firebaseAuth,
      payload.email,
      payload.password
    );
    if (!res) {
      throw new Error('Could not complete the signup');
    }
    setRole(res.user.uid);
    user.value = res.user;
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
    setRole(extracted.uid);
  }
};

const setRole = (uid: string) => {
  const findAdmin = adminUID.value.some((rec: adminTypes) => rec.UID === uid);
  if (findAdmin) {
    role.value = 'admin';
  }
};
