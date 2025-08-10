import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: {} };

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      if (state.items[p.id]) {
        state.items[p.id].qty += 1;
      } else {
        state.items[p.id] = { id: p.id, name: p.name, price: p.price, qty: 1, image: p.image };
      }
      // persist
      localStorage.setItem('cart_v1', JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      delete state.items[action.payload];
      localStorage.setItem('cart_v1', JSON.stringify(state.items));
    },
    incrementQty(state, action) {
      const id = action.payload;
      if (state.items[id]) state.items[id].qty += 1;
      localStorage.setItem('cart_v1', JSON.stringify(state.items));
    },
    decrementQty(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty -= 1;
        if (state.items[id].qty <= 0) delete state.items[id];
      }
      localStorage.setItem('cart_v1', JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = {};
      localStorage.setItem('cart_v1', JSON.stringify(state.items));
    },
    loadCartFromStorage(state, action) {
      state.items = action.payload || {};
    }
  }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart, loadCartFromStorage } = slice.actions;
export default slice.reducer;
