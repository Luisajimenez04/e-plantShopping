import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();

  return (
    <div style={{border:"1px solid #ccc", padding:"1rem", width:"200px"}}>
      <img src={plant.image} alt={plant.name} style={{width:"100%", height:"150px", objectFit:"cover"}} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p><b>Precio:</b> ${plant.price}</p>
      <button onClick={() => dispatch(addItem(plant))}>Agregar al carrito</button>
    </div>
  );
}
