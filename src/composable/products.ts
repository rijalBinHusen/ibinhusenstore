import { ProductTypes, ProductDescriptionTypes } from 'src/types/Product';
import { ref } from 'vue';
import {
  getDocumentsAndLimit,
  getDocumentById,
} from 'src/firebase/Documents/getDocuments';
import {
  addDocument,
  writeDocument,
} from 'src/firebase/Documents/createDocument';
import { DocumentSnapshot } from 'firebase/firestore';

export const lists = ref<ProductTypes[]>([]);

export const renewProduct = async () => {
  lists.value.length = 0;
  const res = await getDocumentsAndLimit('products', 10);
  if (res) {
    res.forEach((doc: DocumentSnapshot) => {
      const dokumen = doc.data() as ProductTypes;
      lists.value.push({
        ...dokumen,
        id: doc.id,
      });
    });
  }
};

export const newProductState = ref(<ProductTypes>{
  name: '',
  category: [] as string[],
  price: 0,
  weight: 0,
  images: [] as string[],
});

export const newProductDescription = ref(<ProductDescriptionTypes>{
  description: 'Tulis deskripsi produk disini',
});

export const createNewProduct = async () => {
  const product = await addDocument('products', newProductState.value);
  await writeDocument('description', product.id, newProductDescription.value);
  return;
};

export const getProductById = async (idProduct: string) => {
  const res = await getDocumentById('products', idProduct);
  if (res) {
    newProductState.value = res as ProductTypes;
    newProductDescription.value = (await getDocumentById(
      'description',
      idProduct
    )) as ProductDescriptionTypes;
  }
};

export const updateProduct = async (
  isProductUpdated: boolean,
  isDescriptionUpdated: boolean
) => {
  if (isProductUpdated) {
    await writeDocument(
      'products',
      newProductState.value.id,
      newProductState.value
    );
  }
  if (isDescriptionUpdated) {
    await writeDocument(
      'description',
      newProductState.value.id,
      newProductDescription.value
    );
  }
  return;
};
