import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './app/store';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { loadCartFromStorage } from './features/cart/cartSlice';

function AppInner() {
  const dispatch = useDispatch();
  useEffect(() => {
    const raw = localStorage.getItem('cart_v1');
    if (raw) {
      try {
        const data = JSON.parse(raw);
        dispatch(loadCartFromStorage(data));
      } catch (e) {
        console.error('Failed to parse cart from storage', e);
      }
    }
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}
