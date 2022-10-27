import { firebaseStore } from '../firebaseApp';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
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
  return setDoc(doc(firebaseStore, nameStore, keyStore), data);
};
