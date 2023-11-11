export interface ShopItem {
  class: string;
  description: string;
  id: number;
  image: string;
  isPromo: boolean;
  material: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
}

export interface CardProps {
  title: string;
  description: string;
  image: string;
  price?: number;
}
