import React from "react";
import ProductCard from "./ProductCard";

// Datos de ejemplo - puedes ampliar o cambiar según tu proyecto
const plants = [
  {
    id: 1,
    name: "Lavanda",
    description: "Planta aromática que relaja",
    price: 10000,
    category: "Plantas Aromáticas",
    image: "https://cdn.pixabay.com/photo/2014/06/24/10/47/lavender-373030_1280.jpg"
  },
  {
    id: 2,
    name: "Aloe Vera",
    description: "Planta medicinal con múltiples beneficios",
    price: 15000,
    category: "Plantas Medicinales",
    image: "https://cdn.pixabay.com/photo/2016/10/10/19/26/aloe-plant-1733488_1280.jpg"
  }
];

export default function ProductList() {
  return (
    <div style={{padding:"1rem"}}>
      <h2>Plantas Aromáticas</h2>
      <div style={{display:"flex", gap:"1rem"}}>
        {plants.filter(p => p.category === "Plantas Aromáticas").map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
      <h2>Plantas Medicinales</h2>
      <div style={{display:"flex", gap:"1rem"}}>
        {plants.filter(p => p.category === "Plantas Medicinales").map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
