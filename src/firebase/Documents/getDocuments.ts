import { firebaseStore } from '../firebaseApp';
import {
  collection,
  getDocs,
  QuerySnapshot,
  query,
  limit,
  doc,
  getDoc,
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

export const getDocumentById = async (store: string, id: string) => {
  const docRef = doc(firebaseStore, store, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    // doc.data() will be undefined in this case
    return { id: 'notFound' };
  }
};
