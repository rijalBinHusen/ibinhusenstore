import { ref } from 'vue';
import { firebaseAuth } from '../firebase/firebaseApp';

const error = ref();

const signOut = async () => {
  // reset the error
  error.value = '';
  try {
    await firebaseAuth.signOut().then(() => {
      sessionStorage.clear();
      window.location.reload();
    });
  } catch (err) {
    console.log(err);
    error.value = err;
  }
};

const useSignOut = () => {
  return { signOut, error };
};

export default useSignOut;
