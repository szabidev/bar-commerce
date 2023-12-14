import { useEffect, useState } from 'react';

import { useAppDispatch } from './hooks/useAppDispatch';
import { AppRouter } from './app-router';
import { ShopItem } from './types/products';
import { AppStore } from './store';
import { setAllProducts, setProductsByType, setProductsByClass } from './store/slices/products';
import { sortByClass } from './shared/ts/helpers';
import { BASE_URL, path } from './shared/ts/variables';

function App() {
  const dispatch = useAppDispatch();
  const [itemData, setItemData] = useState<ShopItem[]>([]);
  const barProducts = itemData.filter((barware) => barware.type === 'barware');
  const machineProducts = itemData.filter((machine) => machine.type === 'machine');
  const bookProducts = itemData.filter((book) => book.type === 'book');
  const glassProducts = itemData.filter((glass) => glass.type === 'glass');
  const jiggerProducts = itemData.filter((jigger) => jigger.type === 'jiggers');
  const knifeProducts = itemData.filter((knives) => knives.type === 'knives');
  const setProducts = itemData.filter((set) => set.class === 'set');
  const shaker = sortByClass(itemData, 'shaker');
  const books = sortByClass(itemData, 'book');
  const glass = sortByClass(itemData, 'glass');
  const machine = sortByClass(itemData, 'machine');
  const muddler = sortByClass(itemData, 'muddler');
  const jigger = sortByClass(itemData, 'jigger');
  const blender = sortByClass(itemData, 'blender');
  const strainer = sortByClass(itemData, 'strainer');
  const set = sortByClass(itemData, 'set');
  const juicer = sortByClass(itemData, 'juicer');
  const mixingSpoon = sortByClass(itemData, 'mixing spoone');
  const shotGlass = sortByClass(itemData, 'shot glass');
  const margaritaMachine = sortByClass(itemData, 'margarita machine');
  const beerGlass = sortByClass(itemData, 'beer glass');
  const sodaMaker = sortByClass(itemData, 'soda maker');
  const wineOpener = sortByClass(itemData, 'wine opener');
  const coffeeGrinder = sortByClass(itemData, 'coffee grinder');

  useEffect(() => {
    fetch(`${BASE_URL}${path.barstuff}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setItemData(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  useEffect(() => {
    dispatch(setAllProducts(itemData));
    dispatch(
      setProductsByType({
        barware: barProducts,
        machine: machineProducts,
        glass: glassProducts,
        book: bookProducts,
        set: setProducts,
        knives: knifeProducts,
        jiggers: jiggerProducts,
      }),
    );
    dispatch(
      setProductsByClass({
        shaker,
        books,
        glass,
        machine,
        muddler,
        jigger,
        blender,
        strainer,
        set,
        juicer,
        mixingSpoon,
        shotGlass,
        margaritaMachine,
        beerGlass,
        sodaMaker,
        wineOpener,
        coffeeGrinder,
      }),
    );
  }, [
    barProducts,
    machineProducts,
    bookProducts,
    glassProducts,
    knifeProducts,
    jiggerProducts,
    setProducts,
    itemData,
    dispatch,
    shaker,
    books,
    glass,
    machine,
    muddler,
    jigger,
    blender,
    strainer,
    set,
    juicer,
    mixingSpoon,
    shotGlass,
    margaritaMachine,
    beerGlass,
    sodaMaker,
    wineOpener,
    coffeeGrinder,
  ]);

  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
}

export default App;
