import { ProductTypes } from 'src/types/Product';
import { ref } from 'vue';

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
