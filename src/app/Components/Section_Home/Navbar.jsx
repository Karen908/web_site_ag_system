
'use client';
import React from 'react'

import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#Home" className="active">
          Home
        </a>
        <a href="#Producto" className="Productos">
          Productos
        </a>
        <a href="#Quienes_Somos">¿Quiénes Somos?</a>
        <a href="#Sobre_Nosotros">Sobre nosotros</a>
        <a href="#Objetivos">Objetivos</a>
      </div>
    </nav>
  );
}

export default Navbar;