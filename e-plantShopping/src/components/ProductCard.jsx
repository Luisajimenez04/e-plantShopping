import React from 'react';

export default function ProductCard({ product, onAdd, disabled }) {
  return (
    <article className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h4>{product.name}</h4>
        <p className="desc">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <button className="btn" onClick={() => onAdd(product)} disabled={disabled} aria-disabled={disabled}>{disabled ? 'Añadido' : 'Añadir al carrito'}</button>
      </div>
    </article>
  );
}
