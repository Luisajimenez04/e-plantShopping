import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{padding:"1rem"}}>
      <h1>Bienvenido a Paradise Nursery</h1>
      <p>Tu tienda online de plantas de interior</p>
      <Link to="/products">
        <button>Ver Productos</button>
      </Link>
    </div>
  );
}
