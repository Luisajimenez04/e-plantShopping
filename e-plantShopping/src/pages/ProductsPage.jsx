import React from 'react';
import PRODUCTS from '../data/products';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.items);

  const categories = PRODUCTS.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});

  return (
    <main className="products-page">
      <h2>Catálogo de plantas</h2>
      {Object.keys(categories).map((cat) => (
        <section key={cat} className="category">
          <h3>{cat}</h3>
          <div className="grid">
            {categories[cat].map((p) => (
              <ProductCard key={p.id} product={p} onAdd={(prod) => dispatch(addToCart(prod))} disabled={!!cart[p.id]} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
