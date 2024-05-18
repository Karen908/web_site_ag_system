import React, { useState } from 'react';
import RedesSociales from './RedesSociales';
import Barra from './Barra';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';



function Section_Principal() {

  return (
    <div>
      <div className='Fondo bg-black md:h-full'>
        <Barra />
        <div className='circulo sm:w-98 md:w-11/12 md:h-screen tablet:h-full lg:w-full h-auto '></div>
        <div className="icons" style={{ zIndex: 100 }}>
          <RedesSociales />
        </div>
        <section className=" inicio flex justify-between pl-10 pr-16 pt-4" id="Home">
  <div className="mt-28 pl-8 md:mt-16 lg:mt-1 md:pl-14 lg:pl-16 xl:pl-20">
    
    <TypeAnimation className='text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-black to bg-gray-800 animate-typing'
      sequence={[
        'Bienvenido',
        1000, 
        'Somos Ag system information',
        1000,
        'Encantados de verte por aquÍ!!',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    <p className='text-justify lg:text-base xl:text-lg text-black font-medium w-full md:w-96  lg:w-11/12 mt-4'>
      Somos una empresa en fase de construcción, nos especializamos en el desarrollo de aplicaciones web y aplicaciones móviles, seguimos los procedimientos y controles de nuestro sistema de calidad buscando la eficacia para garantizar los resultados y satisfacer las necesidades del cliente.
    </p>
    <br />
    <p className='text-justify lg:text-base xl:text-lg text-black font-medium w-full md:w-9/12 lg:w-11/12 '>
      Actualmente estamos en la creación de CN_Mecab, un producto en el que estamos trabajando y esperamos publicar muy pronto ;).
      <br />
      SOMOS AG SYSTEM INFORMATION...
    </p>
  </div>

  {/* Contenedor de imágenes */}
  <div className='Logo  pt-44 sm:pt-20 sm:w-96 w-72 md:mb-72 xl:mb-0 pr-10  md:mt-96 lg:mt-0  md:pt-0 lg:pt-0 xl:pt-0 md:pr-0 lg:pr-0 xl:pr-0 md:w-full lg:w-98 lg:mr-28 lg:mb-10 object-contain flex justify-end items-start'>
  <div className="hidden md:block w-96 mt-20 "> 
  <Image
    src="/img/Logos_Empresa/AGBlanco.png"
    alt="Logo en oscuro"
    width={1000}
    height={400}
    priority
  />
</div>
<div className="block md:hidden mt-80 "> 
  <Image
    src="/img/Logos_Empresa/AGnegro.png"
    alt="logo oscuro"
    width={400}
    height={300}
  />
</div>
  </div>
</section>
      </div>
    </div>
  );
}

export default Section_Principal;

