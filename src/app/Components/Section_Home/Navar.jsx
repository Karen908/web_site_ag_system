
'use client';
import React from 'react'
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

function Navar() {
  
  return (
    <Navbar expand='lg' className='lg:pr-24  flex items-center fixed-top'>
  <div className="flex items-center ">
  <Navbar.Brand className='ml-8 lg:ml-12 lg:mr-20 md:mr-12 md:ml-0'>
  <img
    src='/img/Logos_Empresa/Logo.png'
    className="h-20 lg:h-24 lg:w-auto object-contain lg:ml-0 lg:mr-52"
    alt="Logo"
  />  
     </Navbar.Brand>
    <Navbar.Toggle className="lg:hidden" />
    <div className="xl:ml-60 whitespace-nowrap ml-1  ">
      <Navbar.Collapse>
        <Navbar.Link href="#Home" active className=' font-sans lg:text-2xl md:text-4xl xl:text-xl mr-3 '>
          Inicio
        </Navbar.Link>
        <Navbar.Link as={Link} href="#Producto" className='text-black font-sans lg:text-2xl md:text-4xl xl:text-xl mr-3'>
          Producto
        </Navbar.Link>
        <Navbar.Link href="#Quienes_Somos" className='text-black font-sans lg:text-2xl md:text-4xl xl:text-xl mr-3 '>¿Quienes Somos?</Navbar.Link>
        <Navbar.Link href="#Sobre_Nosotros" className='text-black font-sans lg:text-2xl md:text-4xl xl:text-xl mr-3'>Sobre nosotros</Navbar.Link>
        <Navbar.Link href="#Objetivo" className='text-black font-sans lg:text-2xl md:text-4xl xl:text-xl mr-28 md:mr-0'>Objetivo</Navbar.Link>
      </Navbar.Collapse>
    </div>
  </div>
</Navbar>
  );
}

export default Navar;


