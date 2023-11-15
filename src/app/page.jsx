"use client"
import Section_Principal from "./Components/Section_Home/Section_Principal";
import SectionProducto from "./Components/Producto/Section_Producto";
import ProfileCards from "./Components/Nosotros/ProfileCards";

export default function Home() {
  return (
    <div >
      <Section_Principal/>
      <SectionProducto/>

    <div>
    <div class="flex flex-col justify-center items-center border-white mt-8">
  <h1 class="text-4xl text-white font-semibold mb-4 transition-transform duration-500 transform hover:scale-110">
    ¿Quiénes somos?
  </h1>
  <p class="text-white">Somos una empresa....</p>
    </div>
        <div className="flex flex-wrap justify-center">
      <ProfileCards
        imgSrc="/img/Equipo/jerry.png"
        name="Ivan Sepulveda"
        role="Desarrollador de software"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
      <ProfileCards
        imgSrc="/img/Equipo/joseph.png"
        name="Joseph Lopez"
        role="CEO-Director ejecutivo"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
      <ProfileCards
        imgSrc="/img/Equipo/KarenP.jpeg"
        name="Karen Perez"
        role="Gerente de producto"
        portfolioLink=""
        githubLink="https://github.com/Karen908"
        linkedinLink="https://www.linkedin.com/in/karenperez135/"
      />
      <ProfileCards
        imgSrc="/img/Equipo/andres.png"
        name="Andres Matuk"
        role="Director de proyecto"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
      <ProfileCards
        imgSrc="/img/Equipo/armando1.png"
        name="Armando Torrez"
        role="Director de desarrollo"
        portfolioLink=""
        githubLink=""
        linkedinLink=""
      />
       </div>
    </div>
    </div>
  );
}






{/* <div class="hero-img">
<img src='/img/Logos_Empresa/empresaImagotipo.png' alt="LogoAG" class="w-full h-auto object-cover" />
</div> */}
// <div>
// <h1 className="text-black font-extrabold text-xl lg:text-4xl pl-28 pt-28 pb-2 md:pl-24 lg:pl-40">Bienvenido</h1>
// <div className="min-h-screen text-white p-1">
//   <div className="prose text-sm text-black max-w-2xl pl-24 md:pl-22 lg:pl-36 pr-20 lg:pr-0">
//     <p >Somos una empresa en fase de construcción.</p>
//     <p>Nos especializamos en el desarrollo de aplicaciones web y aplicaciones móviles. Seguimos los procedimientos y controles de nuestro sistema de calidad, buscando la eficacia para garantizar los resultados y satisfacer las necesidades del cliente.</p>
//     <p>Actualmente estamos en la creación de CN_Mecab, producto en el que estamos trabajando y esperamos publicar muy pronto.</p>
//     <p>SOMOS AG SYSTEM INFORMATION...</p>
//   </div>
// </div>
// </div>