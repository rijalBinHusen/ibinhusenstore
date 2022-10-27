import { ProductTypes, ProductDescriptionTypes } from 'src/types/Product';
import { ref } from 'vue';
import { getDocumentsAndLimit } from 'src/firebase/Documents/getDocuments';
import {
  addDocument,
  writeDocument,
} from 'src/firebase/Documents/createDocument';
import { DocumentSnapshot } from 'firebase/firestore';

export const lists = ref<ProductTypes[]>([]);

export const renewProduct = async () => {
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

export const createNewProduct = async (
  productProperty: ProductTypes,
  description: string
) => {
  const product = await addDocument('products', productProperty);
  const descriptionProduct = <ProductDescriptionTypes>{ description };
  await writeDocument('description', product.id, descriptionProduct);
};
