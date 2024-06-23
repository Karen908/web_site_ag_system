'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Card from './Card';

function Esencia() {
  return (
    <div id="Esencia" className="flex flex-col lg:flex-row">
      <div className=" ml-8 flex-1 flex flex-col mt-8 order-2 md:order-1">
        {/* Tarjetas superiores */}
        <div className="flex">
          <div className="w-full mb-4 ml-2">
            <Card
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill w-10 h-10 text-white" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
              }
              title="Calidad"
              number={1}
              description="Desde el diseño hasta la implementación, nos esforzamos por ofrecer soluciones de software de primera clase que superen las expectativas de nuestros clientes en términos de fiabilidad, seguridad y rendimiento."
            />
          </div>
          <div className="w-full mb-4">
            <Card
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrows-expand-vertical w-10 h-10 text-white" viewBox="0 0 16 16">
                  <path d="M8 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2ZM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
                </svg>
              }
              title="Habilidades"
              number={2}
              description={[
                "Desarrollamos para Android con Dart. ",
                "Utilizamos frameworks de JavaScript como Next.js y React Native. ",
                "Librerias para Front end como Tailwind y flowbite. ",
                "Dominamos JavaScript y PHP."
              ]}
            />
          </div>
        </div>

        {/* Tarjetas inferiores */}
        <div className="flex">
          <div className="w-full ml-2">
            <Card
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-lightbulb-fill w-10 h-10 text-white" viewBox="0 0 16 16">
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
                </svg>
              }
              title="Innovación"
              number={4}
              description="Constantemente exploramos nuevas tecnologías, metodologías y enfoques creativos para llevar las soluciones de software a un nivel superior. Ofreciendo productos y servicios que sorprendan y deleiten a nuestros clientes."
            />
          </div>
          <div className="w-full mb-4">
            <Card
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrows-expand-vertical w-10 h-10 text-white" viewBox="0 0 16 16">
                  <path d="M8 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2ZM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
                </svg>
              }
              title="Adaptabilidad"
              number={5}
              description="Nos comprometemos a adaptarnos ágilmente a las necesidades cambiantes del mercado. Nuestra flexibilidad nos permite ofrecer soluciones personalizadas y escalables que se ajusten perfectamente a cualquier entorno empresarial."
            />
          </div>
        </div>
      </div>

      <div className="ml-8 flex-1 flex items-center justify-center p-8">
        <div className="front-content1">
          <Image
            src="/img/Pagina_web/Equipo/Equipo.jpeg"
            alt="Equipo"
            className="object-cover w-full h-full"
            width={1000}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Esencia;
