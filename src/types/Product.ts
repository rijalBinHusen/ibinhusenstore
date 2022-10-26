export interface ProductTypes {
  id: string;
  name: string;
  category: string[];
  price: number;
  weight: number;
  images: string[];
  testimonies: string[];
}

export interface ProductDescriptionTypes {
  id: string;
  idProduct: string;
  description: string;
}

export interface ProductTestimoniesTypes {
  id: string;
  idProduct: string;
  idUser: string;
  rating: number;
  content: string;
}
