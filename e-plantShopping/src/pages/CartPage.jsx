import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const items = useSelector((s) => s.cart.items);
  const entries = Object.values(items);
  const totalItems = entries.reduce((acc, it) => acc + it.qty, 0);
  const totalPrice = entries.reduce((acc, it) => acc + it.qty * it.price, 0);
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <main className="cart-page">
      <h2>Tu carrito</h2>
      <div className="cart-summary">
        <p>Total de plantas: <strong>{totalItems}</strong></p>
        <p>Precio total: <strong>${totalPrice.toFixed(2)}</strong></p>
      </div>

      {entries.length === 0 ? (
        <div className="empty">
          <p>Tu carrito está vacío.</p>
          <button className="btn" onClick={() => nav('/products')}>Continuar comprando</button>
        </div>
      ) : (
        <div className="cart-list">
          {entries.map((it) => (
            <div className="cart-item" key={it.id}>
              <img src={it.image} alt={it.name} />
              <div className="info">
                <h4>{it.name}</h4>
                <p>Precio unitario: ${it.price.toFixed(2)}</p>
                <p>Subtotal: ${(it.price * it.qty).toFixed(2)}</p>
                <div className="qty-controls">
                  <button onClick={() => dispatch(decrementQty(it.id))}>-</button>
                  <span>{it.qty}</span>
                  <button onClick={() => dispatch(incrementQty(it.id))}>+</button>
                </div>
                <div className="actions">
                  <button className="btn small" onClick={() => dispatch(removeFromCart(it.id))}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-actions">
            <button className="btn" onClick={() => nav('/products')}>Continuar comprando</button>
            <button className="btn primary" onClick={() => alert('Próximamente: proceso de pago')}>Pagar</button>
          </div>
        </div>
      )}
    </main>
  );
}
