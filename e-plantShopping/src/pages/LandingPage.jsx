import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const nav = useNavigate();
  return (
    <main className="landing">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>Descubre plantas de interior para embellecer tu hogar. Sencillas de cuidar y perfectas para principiantes y expertos.</p>
        <button className="btn" onClick={() => nav('/products')}>Comenzar</button>
      </div>
    </main>
  );
}
