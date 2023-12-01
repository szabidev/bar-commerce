export interface ShopItem {
  class: string;
  description: string;
  id?: number | string;
  image: string;
  isPromo: boolean | string;
  material: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
  author: string;
  totalAmount?: number;
}

export interface CardProps {
  title: string;
  description: string;
  image: string;
  price?: number;
  onClick: () => void;
}

export interface Products {
  products: {
    allProducts: ShopItem[];
    productsByType: ProductsByType;
    productsByClass: ProductsByClass;
    soldOutProducts: ShopItem[];
    lastAdded: ShopItem;
  };
}

export interface ProductsByType {
  barware: ShopItem[];
  machine: ShopItem[];
  book: ShopItem[];
  glass: ShopItem[];
  set: ShopItem[];
  knives: ShopItem[];
  jiggers: ShopItem[];
}

export interface ProductsByClass {
  [key: string]: ShopItem[];
}
