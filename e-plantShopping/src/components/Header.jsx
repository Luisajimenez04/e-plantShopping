import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const items = useSelector((s) => s.cart.items);
  const total = Object.values(items).reduce((acc, it) => acc + it.qty, 0);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">Paradise Nursery</Link>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/cart">Carrito <span className="cart-count">{total}</span></Link>
        </nav>
      </div>
    </header>
  );
}
