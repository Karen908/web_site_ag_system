
'use client';
import React from 'react'
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

function Navar() {
  return (
    <div>
      <Navbar className='lg:pr-24 ' >
      <Navbar.Brand>
        <img src='/img/Logos_Empresa/Logo.png' className="ml-8 h-12 sm:h-14 lg:h-20 lg:ml-24 md:mb-4 mt-1" alt="Logooo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link href="#Home" active className='lg:text-lg md:text-base mr-3 font-montserrat'>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#Productos" className='lg:text-lg md:text-base mr-3'>
          About
        </Navbar.Link>
        <Navbar.Link href="#Quienes_Somos" className='lg:text-lg md:text-base mr-3'>¿Quienes Somos?</Navbar.Link>
        <Navbar.Link href="#Sobre_Nosotros" className='lg:text-lg md:text-base mr-3'>Sobre nosotros</Navbar.Link>
        <Navbar.Link href="#Objetivo" className='lg:text-lg md:text-base mr-3'>Objetivo</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navar
