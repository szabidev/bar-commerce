import { useNavigate } from 'react-router-dom';
import { ShopItem } from '../../types/products';
import { BASE_URL, path } from './variables';

export const sortData = (items: ShopItem[], text: string) => {
  return items.filter((item) => item.type === text);
};

export const sortByClass = (items: ShopItem[], text: string) => {
  const classes = items.filter((item) => item.class === text);

  return classes;
};

// export const showSingleItem = (id: string | number, navigate: (path: string) => void) => {
//   fetch(`${BASE_URL}${path.barstuff}/${id}`)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Cannot fetch product');
//       }
//       return res.json();
//     })
//     .then(() => {
//       navigate(`${path.barstuff}/${id}`);
//     })
//     .catch((error) => {
//       console.error('Request error:', error);
//     });
// };
