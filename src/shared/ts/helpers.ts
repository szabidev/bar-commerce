import { ShopItem } from '../../types/products';

export const sortData = (items: ShopItem[], text: string) => {
  return items.filter((item) => item.type === text);
};

export const sortByClass = (items: ShopItem[], text: string) => {
  const classes = items.filter((item) => item.class === text);

  return classes;
};
