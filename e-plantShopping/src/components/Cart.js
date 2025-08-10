import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem, clearCart } from "../features/cartSlice";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{padding:"1rem"}}>
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{border:"1px solid #aaa", marginBottom:"1rem", padding:"1rem", display:"flex", gap:"1rem", alignItems:"center"}}>
              <img src={item.image} alt={item.name} style={{width:"80px", height:"80px", objectFit:"cover"}} />
              <div style={{flexGrow:1}}>
                <h3>{item.name}</h3>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <div>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1}>-</button>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button onClick={() => dispatch(removeItem(item.id))}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total a pagar: ${total}</h3>
          <button onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}
