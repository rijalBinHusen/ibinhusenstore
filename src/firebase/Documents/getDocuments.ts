import { firebaseStore } from '../firebaseApp';
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore';

export const getDocuments = async (store: string) => {
  try {
    const querySnapshot: QuerySnapshot = await getDocs(
      collection(firebaseStore, store)
    );

    if (!querySnapshot?.empty) {
      return querySnapshot;
    }
  } catch (err) {
    alert('Tidak dapat membaca data');
    console.log(err);
  }
};
