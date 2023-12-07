import React from 'react';

function SobreNosotros({ title, description, svg }) {
    return (
      <div id="Sobre_Nosotros" className="group relative cursor-pointer overflow-hidden bg-white shadow-md p-4 mb-8 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-lg mx-auto max-w-5xl rounded-lg focus:outline-none focus-within:bg-blue-200">
        <div className="flex items-center">
            <span className="relative h-12 w-12 rounded-full bg-sky-400 transition-colors duration-300 group-hover:bg-sky-400 flex items-center justify-center pl-3 pt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-14 w-14 text-white transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round" d={svg.path.d} />
                </svg>
            </span>
          <div className="relative z-10 ml-4 transition-all duration-300">
            <h1 className="text-2xl font-bold font-sans">{title}</h1>
          </div>
        </div>
        <div className=" font-semibold leading-7 text-gray-900  mt-4">
          <p>{description}</p>
        </div>
      </div>
    );
  }

  export default SobreNosotros;
