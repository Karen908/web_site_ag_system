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

