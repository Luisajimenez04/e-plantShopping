import React from "react";
import ProductCard from "./ProductCard";

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
  },
  {
    id: 3,
    name: "Helecho",
    description: "Planta ornamental de hojas verdes",
    price: 12000,
    category: "Plantas Ornamentales",
    image: "https://cdn.pixabay.com/photo/2018/06/22/09/27/fern-3486016_1280.jpg"
  },
  {
    id: 4,
    name: "Romero",
    description: "Planta aromática para cocina",
    price: 8000,
    category: "Plantas Aromáticas",
    image: "https://cdn.pixabay.com/photo/2016/02/13/12/26/rosemary-1199991_1280.jpg"
  },
  {
    id: 5,
    name: "Manzanilla",
    description: "Planta medicinal calmante",
    price: 9000,
    category: "Plantas Medicinales",
    image: "https://cdn.pixabay.com/photo/2017/06/25/20/14/chamomile-2431647_1280.jpg"
  },
  {
    id: 6,
    name: "Cactus",
    description: "Planta suculenta resistente",
    price: 11000,
    category: "Plantas Ornamentales",
    image: "https://cdn.pixabay.com/photo/2015/05/15/14/46/cactus-768723_1280.jpg"
  }
];

export default function ProductList() {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{padding:"1rem"}}>
      {categories.map(category => (
        <section key={category}>
          <h2>{category}</h2>
          <div style={{display:"flex", gap:"1rem", flexWrap:"wrap"}}>
            {plants.filter(p => p.category === category).map(plant => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}