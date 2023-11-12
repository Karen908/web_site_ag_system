import React from 'react'
import Navar from './Navar'
import Iconos from './RedesSociales'

function Section_Principal() {
  return (
    <div>
      <div>
      <Navar />
      </div>
      <div className="circle"></div>
      <div className="home" id="Home">
        <div className="home-content mb-40">
          <h1>Bienvenido</h1>
          <p>
            Somos una empresa en fase de construcción. <br />
            Nos especializamos en el desarrollo de aplicaciones web y aplicaciones móviles. <br />
            Seguimos los procedimientos y controles de nuestro sistema de calidad, <br />
            buscando la eficacia para garantizar los resultados y satisfacer las necesidades del cliente. <br />
            Actualmente estamos en la creación de CN_Mecab, producto en el que estamos trabajando y esperamos publicar muy pronto. <br />
            SOMOS AG SYSTEM INFORMATION...
          </p>
          <div >
          <Iconos/>
        </div>
        </div>
        <div className="hero-img">
          <img src="/img/Logos_Empresa/empresaImagotipo.png" data-src="/img/AGNegro.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section_Principal
