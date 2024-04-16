import React from 'react';
import Card from './Card';  

function Esencia() {
  return (
    <div id="Esencia" className="flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col mt-8 order-2 md:order-1">

        {/* Tarjetas superiores */}
        <div className="flex">
          <div className="w-full mb-4 ml-4 ">
            <Card
              icon={<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-star-fill w-10 h-10 text-white " viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>}
              title="CALIDAD"
              number={1}
              description="Comprometidos con la entrega de software confiable, seguro y de alto rendimiento."
            />
          </div>
          <div className="w-full  mb-4 mr-4">
          <Card 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrows-expand-vertical  w-10 h-10 text-white" viewBox="0 0 16 16">
              <path d="M8 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2ZM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
            </svg>}
              title="Habilidades"
              number={4}
              description={
      <pre className="">
        {`1)Desarrollamos  para Android con Dart.
2)Frameworks como Next.js y React Native.
3)Dominio de  JavaScript y PHP.
4)Frameworks para web Css= Tailwind CSS.`}
      </pre>
      
    }
  />
          </div>
          <div className="w-full  mb-4 mr-4">
          <Card
              icon={<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-people-fill w-10 h-10 text-white" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
            </svg>}
              title="COLABORACIÓN"
              number={2}
              description="Fomentamos un ambiente de trabajo cooperativo que promueve la comunicación efectiva y la comprensión compartida entre todos los miembros del equipo."
            />
          </div>
        </div>

         {/* Tarjetas inferiores  */}
        <div className="flex">
          <div className="w-full  ml-4">
          <Card
              icon={<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-lightbulb-fill w-10 h-10 text-white" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
            </svg>}
              title="INNOVACIÓN"
              number={3}
              description=" Promoción de la creatividad y la adopción de nuevas ideas para mantenerse a la vanguardia tecnológica."
            />
          </div>
          <div className="w-full  mb-4 mr-4">
          <Card
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrows-expand-vertical  w-10 h-10 text-white" viewBox="0 0 16 16">
              <path d="M8 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2ZM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
            </svg>}
              title="ADAPTABILIDAD"
              number={4}
              description="Flexibilidad para ajustar estrategias y enfoques según las cambiantes necesidades del mercado y del cliente."
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="front-content1">
          <img
            src="/img/Pagina_web/Equipo/Equipo.jpeg"
            alt="Equipo"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Esencia;

