import React from 'react'
import Navbar from './Navbar'
import RedesSociales from './RedesSociales'

function Section_Principal() {
  return (
    <div>
    <div>
      <div className='w-full h-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
      <div className="circle"></div>
      </div>
      <div  className="icons" style={{ zIndex: 100 }}>
      <RedesSociales />      
      </div>
      <header className="header">
        <a href="#" className="logo">
          <img src="/img/Logos_Empresa/logo.png" data-src="/img/logo.png" alt="" />
        </a>
        <ul>
          <li>
            <button className="switchDark active" id="switch">
              <span>
                <i className='bx bx-sun'></i>
              </span>
              <span>
                <i className='bx bx-moon'></i>
              </span>
            </button>
          </li>
        </ul>
        <Navbar/>
        <div className="icon">
          <div className="fas fa-bars" id="menu-btn"></div>
        </div>
      </header>
      <section className="home flex justify-between" id="Home">
  <div className="home-content flex-1">
    <h1>Bienvenido</h1>
    <p>
      Somos una empresa en fase de construcción.
      <br />
      Nos especializamos en el desarrollo de aplicaciones web y aplicaciones móviles.
      <br />
      Seguimos los procedimientos y controles de nuestro sistema de calidad
      <br />
      buscando la eficacia para garantizar los resultados y satisfacer las necesidades
      <br />
      del cliente.
      Actualmente estamos en la creación de CN_Mecab, un producto en el que
      <br />
      estamos trabajando y esperamos publicar muy pronto ;).
      <br />
      SOMOS AG SYSTEM INFORMATION...
    </p>
  </div>
  <div className="">
    <img src="/img/Logos_Empresa/empresaImagotipo.png" data-src="/img/AGNegro.png" alt="" className="max-w-full h-auto" />
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