
'use client';
import React from 'react'
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

function Navar() {
  
  return (
    <Navbar expand='lg' className='lg:pr-24  flex items-center fixed-top'>
  <div className="flex items-center ">
  <Navbar.Brand className='ml-8 lg:ml-16'>
  <img
    src='/img/Logos_Empresa/Logo.png'
    className="h-20 lg:h-24 lg:w-auto object-contain lg:ml-0 lg:mr-52"
    alt="Logo"
  />  
     </Navbar.Brand>
    <Navbar.Toggle className="lg:hidden" />
    <div className="xl:ml-60 whitespace-nowrap ml-16  ">
      <Navbar.Collapse>
        <Navbar.Link href="#Home" active className='lg:text-2xl md:text-3xl xl:text-2xl mr-3 font-montserrat'>
          Inicio
        </Navbar.Link>
        <Navbar.Link as={Link} href="#Productos" className='lg:text-2xl md:text-3xl xl:text-2xl mr-3'>
          Producto
        </Navbar.Link>
        <Navbar.Link href="#Quienes_Somos" className='lg:text-2xl md:text-3xl xl:text-2xl mr-3 '>¿Quienes Somos?</Navbar.Link>
        <Navbar.Link href="#Sobre_Nosotros" className='lg:text-2xl md:text-3xl xl:text-2xl mr-3'>Sobre nosotros</Navbar.Link>
        <Navbar.Link href="#Objetivo" className='lg:text-2xl md:text-3xl xl:text-2xl mr-28'>Objetivo</Navbar.Link>
      </Navbar.Collapse>
    </div>
  </div>
</Navbar>
  );
}

export default Navar;


