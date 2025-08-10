import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <nav style={{padding:"1rem", backgroundColor:"#def"}}>
        <Link to="/" style={{marginRight:"1rem"}}>Inicio</Link>
        <Link to="/products" style={{marginRight:"1rem"}}>Productos</Link>
        <Link to="/cart">Carrito</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
