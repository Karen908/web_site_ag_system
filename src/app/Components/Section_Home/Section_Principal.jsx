import React, { useState } from 'react';
import RedesSociales from './RedesSociales';
import Barra from './Barra';

function Section_Principal() {

  return (
    <div>
      <div className='Fondo'>
        <Barra />
        <div className='circulo sm:w-98 md:w-11/12 md:h-screen tablet:h-full lg:w-full h-auto'></div>
        <div className="icons" style={{ zIndex: 100 }}>
          <RedesSociales />
        </div>
        <section className="inicio flex justify-between pl-10 " id="Home">
          <div className="mt-28 ml-8 md:mb-12 md:mt-1 lg:mt-1 md:ml-14 lg:ml-16 xl:ml-20">
            <h1 className='font-bold mb-4 text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Bienvenido</h1>
            <p className='text-justify lg:text-base xl:text-lg text-black font-medium w-full md:w-9/12 pr-16 lg:w-11/12 '>
              Somos una empresa en fase de construcción, nos especializamos en el desarrollo de aplicaciones web y aplicaciones móviles, seguimos los procedimientos y controles de nuestro sistema de calidad buscando la eficacia para garantizar los resultados y satisfacer las necesidades del cliente.
            </p>
            <br />
            <p className='text-justify lg:text-base xl:text-lg text-black font-medium w-full pr-16 md:w-2/3 lg:w-11/12 '>
              Actualmente estamos en la creación de CN_Mecab, un producto en el que estamos trabajando y esperamos publicar muy pronto ;).
              <br />
              SOMOS AG SYSTEM INFORMATION...
            </p>
          </div>
          <div className='Logo mt-96 pt-24 w-72 md:mb-72 xl:mb-0 pr-10 md:mt:0 lg:mt-0 xl:mt-0 md:pt-0 lg:pt-0 xl:pt-0 md:pr-0 lg:pr-0 xl:pr-0 md:w-full lg:w-8/12 lg:mr-28 lg:mb-10 object-contain flex justify-end items-start'>
            {/* Imagen en modo claro */}
            <img
              className="dark:hidden"
              src="/img/Logos_Empresa/AGNegro.png"
              alt="Logo en modo claro"
            />

            {/* Imagen en modo oscuro */}
            <img
              className="hidden dark:block mr-8 object-contain"
              src="/img/Logos_Empresa/empresaImagotipo.png"
              alt="Logo en modo oscuro"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Section_Principal;

