import React from 'react';

function SectionProducto() {
  return (
    <section
      id="Producto"
      className="flex flex-col items-center justify-center gap-4 text-white font-semibold relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/Pagina_web/Producto/producto.jpg')",
        backgroundSize: "cover",  
        backgroundPosition: "center",  
      }}
    >
      <h2 className="text-5xl text-center font-sans mt-16">
        CN_ <span className="font-bold text-blue-500">MECAB</span>
      </h2>

      <div className='loader-container h-72 w-72 mt-6'>
        <div className='loader'></div>
        <div className='content relative w-60 h-60 border-8 border-blue-500 rounded-full flex items-center justify-center'>
          <a href="indexCN.html">
            <img src="/img/Pagina_web/Logos_Empresa/Cn_azul.png" alt="Producto" />
          </a>
        </div>
      </div>

      <div className="text-center text-lg">
        <h3 className="text-blue-500 font-bold font-sans text-4xl mt-6">¿Qué Es?</h3>
        <p className="mt-3 mb-16 ml-10 mr-10 lg:ml-40 lg:mr-40 text-white font-semibold">
          Aplicación móvil donde se podrá contribuir, explorar, publicar reseñas y opiniones <br/>
          de sus gustos o preferencias del cine, televisión, literatura y animes. Nos encontramos en <br/>
          creación pero muy pronto podrás ser parte de la primera red social enfocada en el entretenimiento. <br/>
          SOMOS CN_MECAB...
        </p>
      </div>
    </section>
  );
}

export default SectionProducto;




