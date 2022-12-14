import { firebaseStore } from '../firebaseApp';
import { collection, addDoc, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { ProductDescriptionTypes, ProductTypes } from 'src/types/Product';
type dataTypes = ProductDescriptionTypes | ProductTypes;

export const addDocument = (nameStore: string, data: dataTypes) => {
  return addDoc(collection(firebaseStore, nameStore), data);
};

export const writeDocument = (
  nameStore: string,
  keyStore: string,
  data: dataTypes
) => {
  const { id, ...newObj } = data;
  id;
  return setDoc(doc(firebaseStore, nameStore, keyStore), newObj);
};

export const removeDocument = (
  nameStore: string,
  keyStoreOrIdDocument: string
) => {
  return deleteDoc(doc(firebaseStore, nameStore, keyStoreOrIdDocument));
};
