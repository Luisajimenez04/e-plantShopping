import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cartSlice";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = cartItems.some(item => item.id === plant.id);

  return (
    <div style={{border:"1px solid #ccc", padding:"1rem", width:"200px"}}>
      <img src={plant.image} alt={plant.name} style={{width:"100%", height:"150px", objectFit:"cover"}} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p><b>Precio:</b> ${plant.price}</p>
      <button onClick={() => dispatch(addItem(plant))} disabled={isAdded}>
        {isAdded ? "Añadido" : "Agregar al carrito"}
      </button>
    </div>
  );
}