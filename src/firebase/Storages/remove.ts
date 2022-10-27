import { ref, deleteObject } from 'firebase/storage';
import { firebaseStorage } from '../firebaseApp';

export const removeFile = async (downloadURL: string) => {
  const searchProducts = downloadURL.search('products');
  const path = downloadURL.slice(searchProducts, 100);
  const referencePath = path.replace('%2F', '/');

  const storageRef = ref(firebaseStorage, referencePath);
  await deleteObject(storageRef);
  return;
};
