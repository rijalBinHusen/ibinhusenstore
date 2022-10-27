import { ProductTypes, ProductDescriptionTypes } from 'src/types/Product';
import { ref } from 'vue';
import addDocument from 'src/firebase/Documents/writeDocument';

export const lists = ref<ProductTypes[]>([]);

export const renewProduct = () => {
  lists.value.push(
    {
      id: 'asd1293uasdads1',
      name: 'Cookies kacang @250gr',
      price: 25000,
      images: ['cookies5', 'cookies7'],
      category: ['str'],
      weight: 1200,
      testimonies: ['string'],
    },
    {
      id: 'asd1293uasdads1',
      name: 'Cookies letter @250gr',
      price: 25000,
      images: ['cookies5', 'cookies7'],
      category: ['str'],
      weight: 1200,
      testimonies: ['string'],
    },
    {
      id: 'asd1293uasdads1',
      name: 'Butter cookies @250gr',
      price: 25000,
      images: ['cookies5', 'cookies7'],
      category: ['str'],
      weight: 1200,
      testimonies: ['string'],
    },
    {
      id: 'asd1293uasdads1',
      name: 'Banana cookies @250gr',
      price: 25000,
      images: ['cookies5', 'cookies7'],
      category: ['str'],
      weight: 1200,
      testimonies: ['string'],
    }
  );
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
  const descriptionProduct = <ProductDescriptionTypes>{
    idProduct: product.id,
    description,
  };
  await addDocument('description', descriptionProduct);
};
