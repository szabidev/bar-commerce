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
}

export interface CardProps {
  title: string;
  description: string;
  image: string;
  price?: number;
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
}

export interface ProductsByClass {
  shaker: ShopItem[];
  books: ShopItem[];
  glass: ShopItem[];
  machine: ShopItem[];
  muddler: ShopItem[];
  jigger: ShopItem[];
  blender: ShopItem[];
  strainer: ShopItem[];
  set: ShopItem[];
  juicer: ShopItem[];
  mixingSpoon: ShopItem[];
  shotGlass: ShopItem[];
  margaritaMachine: ShopItem[];
  beerGlass: ShopItem[];
  sodaMaker: ShopItem[];
  wineOpener: ShopItem[];
  coffeeGrinder: ShopItem[];
}
