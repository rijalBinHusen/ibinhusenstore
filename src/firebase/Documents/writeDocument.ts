import { firebaseStore } from '../firebaseApp';
import { collection, addDoc } from 'firebase/firestore';
import { ProductDescriptionTypes, ProductTypes } from 'src/types/Product';
type dataTypes = ProductDescriptionTypes | ProductTypes;

const addDocument = (nameStore: string, data: dataTypes) => {
  return addDoc(collection(firebaseStore, nameStore), data);
};

export default addDocument;
