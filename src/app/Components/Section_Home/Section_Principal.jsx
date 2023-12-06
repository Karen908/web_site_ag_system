import RedesSociales from './RedesSociales'
import Barra from './Barra';
import React, { useState } from 'react';



function Section_Principal() {
  const [darkMode, setDarkMode] = useState(false);
 
  return (
    <div>
    <div className='Fondo'>
      <Barra/>
      <div className='circle sm:w-98 md:w-11/12 md:h-screen   tablet:h-full  lg:w-full  h-auto'>
      </div>
      <div  className="icons" style={{ zIndex: 100 }}>
      <RedesSociales />      
      </div>
      <section className="home flex justify-between pl-10 " id="Home">
  <div className=" mt-28 ml-8 md:mb-12 md:mt-1 lg:mt-1 md:ml-14 lg:ml-16 xl:ml-20 ">
    <h1 className='font-bold mb-4 text-3xl  md:text-3xl lg:text-4xl xl:text-5xl '>Bienvenido</h1>
    <p className='text-justify lg:text-base xl:text-lg text-black font-semibold w-full md:w-9/12 pr-16 lg:w-11/12 '>
      Somos una empresa en fase de construcción, nos especializamos en el desarrollo de aplicaciones web y aplicaciones móviles, seguimos los procedimientos y controles de nuestro sistema de calidad buscando la eficacia para garantizar los resultados y satisfacer las necesidades del cliente.
    </p>
    <br/>
    <p className='text-justify lg:text-base  xl:text-lg text-black font-semibold w-full pr-16 md:w-2/3 lg:w-11/12 '>
      Actualmente estamos en la creación de CN_Mecab, un producto en el que estamos trabajando y esperamos publicar muy pronto ;).
      <br />
      SOMOS AG SYSTEM INFORMATION...
    </p>
  </div>
<div className='w-72 mb-52 md:mb-0  xl:mb-0 mt-8  pr-10 md:pr-0 lg:pr-0 xl:pr-0 md:w-full lg:w-8/12 lg:mr-28 lg:mb-10 object-contain flex justify-end items-start'>
   {/* Imagen en modo claro */}
<img
  className="dark:hidden"
  src="/img/Logos_Empresa/AGNegro.png"
  alt="Logo en modo claro"
/>

{/* Imagen en modo oscuro */}
<img
  className=" hidden dark:block mr-8 object-contain" style={{width:'1000%'}}
  src="/img/Logos_Empresa/empresaImagotipo.png"
  alt="Logo en modo oscuro"
/>
</div>
 
</section>
    </div>
    </div>
 )
}

export default Section_Principal
{/* // lg:rounded-br-full

//     <div>
//  <Navar />
//  <div className='w-full md:w-2/4 xl:w-3/5 rounded-e-full lg:rounded-br-full bg-custom-green h-full pt-40 pb-2 xl:pt-36 xl:pb-0' id="Home">
//    <div>
//      <div className="ml-24 max-w-xl lg:max-w-xl mx-auto pl-10">
//        <h1 className='text-black font-bold font-sans text-5xl mb-10 '>Bienvenido</h1>
//        <p className="mt-4 text-lg xl:mb-32 ">
//          Somos una empresa en fase de construcción. <br />
//          Nos especializamos en el desarrollo de aplicaciones web y aplicaciones móviles. <br />
//          Seguimos los procedimientos y controles de nuestro sistema de calidad, <br />
//          buscando la eficacia para garantizar los resultados y satisfacer las necesidades del cliente. <br />
//          Actualmente estamos en la creación de CN_Mecab, producto en el que estamos trabajando y esperamos publicar muy pronto. <br />
//          SOMOS AG SYSTEM INFORMATION...
//        </p>
//      </div>
//      <div>
//        <Iconos/>
//      </div>
//    </div>
//    <div className="hero-img lg:mr-12 lg:mt-36">
//      <img src="/img/Logos_Empresa/empresaImagotipo.png" data-src="/img/AGNegro.png" alt="" />
//    </div>
//  </div>
// </div> */}