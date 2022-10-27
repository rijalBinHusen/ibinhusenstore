import { firebaseStore } from '../firebaseApp';
import {
  collection,
  getDocs,
  QuerySnapshot,
  query,
  limit,
} from 'firebase/firestore';

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

export const getDocumentsAndLimit = async (
  store: string,
  limitNumber: number
) => {
  const documentRef = collection(firebaseStore, store);
  const perintahQuery = query(documentRef, limit(limitNumber));
  const result = await getDocs(perintahQuery);
  return result;
};
