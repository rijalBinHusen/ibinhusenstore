import { ref } from 'vue';
import { getDocuments } from 'src/firebase/Documents/getDocuments';
import { DocumentSnapshot } from 'firebase/firestore';

export interface adminTypes {
  id: string;
  UID: string;
}

export const adminUID = ref([] as adminTypes[]);

export const leftDrawerOpen = ref(true);

export const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

export const getAdminUID = async () => {
  if (adminUID.value.length) {
    return;
  }
  const res = await getDocuments('adminUID');
  if (res) {
    res.forEach((doc: DocumentSnapshot) => {
      const dokumen = doc.data() as adminTypes;
      adminUID.value.push({ id: doc.id, UID: dokumen.UID });
    });
  }
};
