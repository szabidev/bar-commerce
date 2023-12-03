import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products, ProductsByClass, ProductsByType, ShopItem } from '../../types/products';

const initialState: Products = {
  products: {
    allProducts: [],
    productsByType: {
      barware: [],
      machine: [],
      book: [],
      glass: [],
      set: [],
      knives: [],
      jiggers: [],
    },
    productsByClass: {
      shaker: [],
      books: [],
      glass: [],
      machine: [],
      muddler: [],
      jigger: [],
      blender: [],
      strainer: [],
      set: [],
      juicer: [],
      mixingSpoon: [],
      shotGlass: [],
      margaritaMachine: [],
      beerGlass: [],
      sodaMaker: [],
      wineOpener: [],
      coffeeGrinder: [],
    },
    soldOutProducts: [],
    lastAdded: {
      class: '',
      description: '',
      image: '',
      isPromo: '',
      material: '',
      name: '',
      price: 0,
      quantity: 0,
      type: '',
      author: '',
    },
  },
};

const productsDetailSlice = createSlice({
  name: 'productsDetail',
  initialState,
  reducers: {
    setAllProducts(state, action: PayloadAction<ShopItem[]>) {
      state.products.allProducts = action.payload;
    },
    setProductsByType(state, { payload }: PayloadAction<ProductsByType>) {
      state.products.productsByType = {
        barware: payload.barware,
        machine: payload.machine,
        glass: payload.glass,
        book: payload.book,
        set: payload.set,
        knives: payload.knives,
        jiggers: payload.jiggers,
      };
    },
    setProductsByClass(state, { payload }: PayloadAction<ProductsByClass>) {
      state.products.productsByClass = { ...state.products.productsByClass, ...payload };
    },
    addProduct(state, { payload }: PayloadAction<ShopItem & { type: string }>) {
      const { type } = payload;
      state.products.allProducts.push(payload);

      if (type in state.products.productsByType) {
        (state.products.productsByType as any)[type].push(payload);
      }

      if (payload.class in state.products.productsByClass) {
        (state.products.productsByClass as any)[payload.class].push(payload);
      }
    },
    lastProductAdded(state, { payload }: PayloadAction<ShopItem>) {
      state.products.lastAdded = payload;
    },
  },
});

export const {
  addProduct,
  lastProductAdded,
  setAllProducts,
  setProductsByType,
  setProductsByClass,
} = productsDetailSlice.actions;

export const productsDetail = productsDetailSlice.reducer;
