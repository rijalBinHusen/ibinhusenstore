import { firebaseAuth } from 'src/firebase/firebaseApp';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

interface newUser {
  email: string;
  password: string;
}

const signup = async (payload: newUser) => {
  try {
    const res = await createUserWithEmailAndPassword(
      firebaseAuth,
      payload.email,
      payload.password
    );
    if (!res) {
      throw new Error('Could not complete the signup');
    }
    await updateProfile(res.user, { displayName: payload.email.split('@')[0] });
  } catch (err) {
    alert(err);
  }
};

export default signup;
