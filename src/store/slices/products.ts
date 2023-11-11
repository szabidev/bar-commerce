import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopItem } from '../../types/items';

const initialState = {
  products: {
    allProducts: [] as ShopItem[],
    productsByType: {
      barware: [] as ShopItem[],
      machine: [] as ShopItem[],
      book: [] as ShopItem[],
      glass: [] as ShopItem[],
      set: [] as ShopItem[],
      knives: [] as ShopItem[],
    },
    productsByClass: {
      shaker: [] as ShopItem[],
      books: [] as ShopItem[],
      glass: [] as ShopItem[],
      machine: [] as ShopItem[],
      muddler: [] as ShopItem[],
      jigger: [] as ShopItem[],
      blender: [] as ShopItem[],
      strainer: [] as ShopItem[],
      set: [] as ShopItem[],
      juicer: [] as ShopItem[],
      mixingSpoon: [] as ShopItem[],
      shotGlass: [] as ShopItem[],
      margaritaMachine: [] as ShopItem[],
      beerGlass: [] as ShopItem[],
      sodaMaker: [] as ShopItem[],
      wineOpener: [] as ShopItem[],
      coffeeGrinder: [] as ShopItem[],
    },
    soldOutProducts: [] as ShopItem[],
  },
};

const productsDetailSlice = createSlice({
  name: 'productsDetail',
  initialState,
  reducers: {
    setAllProducts(state, action: PayloadAction<ShopItem[]>) {
      state.products.allProducts = action.payload;
    },
    setProductsByType(state, { payload }) {
      state.products.productsByType = {
        barware: payload.barware,
        machine: payload.machine,
        glass: payload.glass,
        book: payload.book,
        set: payload.set,
        knives: payload.knives,
      };
    },
    setProductsByClass(state, { payload }) {
      state.products.productsByClass = {
        shaker: payload.shaker,
        books: payload.book,
        glass: payload.glass,
        machine: payload.machine,
        muddler: payload.muddler,
        jigger: payload.jigger,
        blender: payload.blender,
        strainer: payload.strainer,
        set: payload.set,
        juicer: payload.juicer,
        mixingSpoon: payload.mixingSpoon,
        shotGlass: payload.shotGlass,
        margaritaMachine: payload.margaritaMachine,
        beerGlass: payload.beerGlass,
        sodaMaker: payload.sodaMaker,
        wineOpener: payload.wineOpener,
        coffeeGrinder: payload.coffeeGrinder,
      };
    },
  },
});

export const { setAllProducts, setProductsByType, setProductsByClass } =
  productsDetailSlice.actions;

export const productsDetail = productsDetailSlice.reducer;
