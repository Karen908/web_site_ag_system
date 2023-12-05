import React from 'react';
import Card from './Card';  // Ajusta la ruta según la ubicación de tu componente Card

function Objetivos() {
  return (
    <div id="Objetivos" className="flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col mt-8 order-2 md:order-1">
        {/* Tarjetas superiores */}
        <div className="flex">
          <div className="w-full mb-4 ml-4 ">
            <Card
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase-fill w-10 h-10 text-white hover:text-gray-400 dark:text-gray-500 dark:hover:text-black" viewBox="0 0 16 16">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>}
              title="Objetivo 1"
              number={1}
              description="Descripción del objetivo 1."
            />
          </div>
          <div className="w-full  mb-4 mr-4">
          <Card
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase-fill w-10 h-10 text-white hover:text-gray-400 dark:text-gray-500 dark:hover:text-black" viewBox="0 0 16 16">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>}
              title="Objetivo 2"
              number={1}
              description="Descripción del objetivo 1."
            />
          </div>
        </div>

        {/* Tarjetas inferiores */}
        <div className="flex">
          <div className="w-full  ml-4">
          <Card
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase-fill w-10 h-10 text-white hover:text-gray-400 dark:text-gray-500 dark:hover:text-black" viewBox="0 0 16 16">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>}
              title="Objetivos 3"
              number={1}
              description="Descripción del objetivo 1."
            />
          </div>
          <div className="w-full  mb-4 mr-4">
          <Card
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase-fill w-10 h-10 text-white hover:text-gray-400 dark:text-gray-500 dark:hover:text-black" viewBox="0 0 16 16">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>}
              title="Objetivos 4"
              number={1}
              description="Descripción del objetivo 1."
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="front-content1">
          <img
            src="/img/Equipo/Equipo.jpeg"
            alt="Logo"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Objetivos;

