"use client"
import Section_Principal from "./Components/Section_Home/Section_Principal";
import Info_Equipo from "./Components/Nosotros/Info_Equipo";
import SectionProducto from "./Components/Producto/Section_Producto";
import Info from "./Components/MisionVision/Info";
import Esencia from "./Components/Esencia/Esencia";
import Footer from "./Components/Esencia/Footer";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';



function Home() {
  return (
    <div className="bg-gray-100 dark:bg-black">
      <div>
        <Section_Principal />
        <SectionProducto />
      </div>
      <div className="border-t-2 border-blue-800 dark:border-blue-500 mb-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-black dark:text-white font-bold font-sans mb-4 transition-transform duration-500 transform hover:scale-110 mt-8 ">
          Equipo de desarrollo
          </h1 >
          <div>  
          </div>
          <Info_Equipo />
        </div>
      </div>
      <div className="mis flex flex-col sm:flex-row md:flex-row justify-center bg-neutral-500">
        <div>
          <div className="aspect-w-1 aspect-h-1 w-96 h-96 mx-auto md:mt-36 lg:mt-36 xl:mt-36 md:ml-8 lg:ml-8 xl:ml-8">
            <Image
              src="/img/Pagina_web/Logos_Empresa/logo_cir.png"
              alt="Logo circular"
              className="object-cover w-full h-full"
              loading="lazy"
              width={1000} 
              height={60} 
            />
          </div>
        </div>
        <div className="mt-8 sm:ml-8 md:ml-12 lg:ml:12 lx:ml:12 bg-">
          <Info />
        </div>
      </div>
      <div>
        <div className="flex-1 flex  justify-center shadow-lg pb-3 border-b-2  dark:border-blue-500 mt-4">
        <TypeAnimation className='text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold dark:text-blue-500 animate-typing'
      sequence={[
        'Nuestra esencia es:',
        2000, 
        'Nuestra calidad',
        2000,
        'Nuestras habilidades',
        2000,
        'Nuestra innovacion',
        2000,
        'Nuestra adaptabilidad',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>
        <Esencia/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;