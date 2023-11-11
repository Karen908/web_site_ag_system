"use client"
import Navar from "./Components/Section_Home/Navar";
import Iconos from "./Components/Section_Home/RedesSociales";

export default function Home() {
  return (
    <div className="bg-black min-h-screen " >
      <div class="hero-img">
      <img src='/img/Logos_Empresa/empresaImagotipo.png' alt="LogoAG"  />
      </div>
      <Navar/>
    <div class="circle">
        <div>
          <h1 className="text-black font-extrabold  text-xl lg:text-4xl pl-28 pt-28 pb-2 md:pl-32 lg:pl-52  ">Bienvenido</h1>
          <div className=" min-h-screen text-white p-1  ">
             <div className="prose text-sm text-black max-w-2xl pl-24 md:pl-28 lg:pl-48">
                <p>Somos una empresa en fase de construcción.</p>
                <p>Nos especializamos en el desarrollo de aplicaciones web y aplicaciones móviles. 
                Seguimos los procedimientos y controles de nuestro sistema de calidad, 
                buscando la eficacia para garantizar los resultados y satisfacer las necesidades del cliente.</p>
               <p>Actualmente estamos en la creación de CN_Mecab, producto en el que estamos trabajando  y esperamos publicar muy pronto.</p>
            <p>
              SOMOS AG SYSTEM INFORMATION...
            </p>
              </div>
           </div>
        </div>
           <Iconos/>
        </div>
     </div>
  );
}
