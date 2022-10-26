import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as vueRef } from 'vue';
import { firebaseStorage } from '../firebaseApp';

const uploadFile = async (file: File, fileName: string) => {
  const downloadURL = vueRef('');
  const error = vueRef<any>();
  const storageRef = ref(firebaseStorage, 'myreport/' + fileName);
  try {
    const res = await uploadBytes(storageRef, file);
    downloadURL.value = await getDownloadURL(res.ref);
  } catch (err) {
    console.log(err);
    error.value = err;
  }

  return { downloadURL, error };
};

export default uploadFile;
