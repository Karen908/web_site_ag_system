import React from 'react';

function SectionProducto() {
  return (
    <section id="Producto" className="flex flex-col items-center justify-center gap-4 text-black dark:text-white">
      <h2 className="text-5xl text-center  font-sans">
        CN_ <span className=" text-blue-800 font-bold dark:text-blue-500   ">MECAB</span>
        <div class=""></div>

      </h2>
      <div class='loader-container  h-72 w-72 mt-6  '>
 <div class='loader '></div>
 <div class='content relative w-60 h-60 border-4 border-blue-800 dark:border-blue-500 rounded-full flex items-center justify-center'>
  <a href="indexCN.html">
    <img src="/img/Logos_Empresa/Cn_azul.png" alt="" />
  </a>
  <span></span>
</div>
</div>

      <div className="text-center text-lg">
        <h3 className="text-blue-800 dark:text-blue-500 font-bold font-sans text-4xl mt-6">¿Qué Es?</h3>
        <p className="mt-3 mb-20 ml-24 mr-24 lg:ml-40 lg:mr-40 text-black dark:text-white ">
          Aplicación móvil donde se podrá contribuir, explorar, publicar reseñas y opiniones <br/>de sus gustos o preferencias del cine, televisión, literatura y animes. Nos encontramos en <br/>creación pero muy pronto podrás ser parte de la primera red social enfocada en el entretenimiento. <br/> SOMOS CN_MECAB...
        </p>
      </div>
    </section>
  );
}

export default SectionProducto;



