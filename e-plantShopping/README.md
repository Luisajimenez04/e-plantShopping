# e-plant-shopping (Paradise Nursery)

Aplicación en React + Redux creada para el Proyecto Final del curso. Incluye:
- Landing page con imagen de fondo y botón "Comenzar".
- Página de productos con al menos 6 plantas agrupadas en categorías (incluye "Aromáticas" y "Medicinales").
- Carrito con Redux que permite añadir/eliminar y ajustar cantidades. Contador dinámico en la cabecera.
- Persistencia simple del carrito en localStorage.

## Instrucciones rápidas
1. Clona el repo:
   ```bash
   git clone https://github.com/Luisajimenez04/e-plant-shopping.git
   cd e-plant-shopping
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Para desarrollo:
   ```bash
   npm start
   ```
4. Para desplegar en GitHub Pages:
   - Asegúrate de que `homepage` en package.json tenga `https://Luisajimenez04.github.io/e-plant-shopping`.
   - Ejecuta:
     ```bash
     npm run deploy
     ```

## Estructura principal
- public/
- src/
  - app/store.js
  - features/cart/cartSlice.js
  - data/products.js
  - components/*
  - pages/*
  - styles.css
