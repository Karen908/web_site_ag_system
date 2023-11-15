import React from 'react';

function SectionProducto() {
  return (
    <section className="flex flex-col items-center justify-center gap-4  text-white">
      <h2 className="text-3xl text-center mt-8">
        CN_ <span className="text-blue-500 font-bold ">MECAB</span>
        <div class=""></div>

      </h2>
      <div class='loader-container h-60 w-60  '>
 <div class='loader '></div>
 <div class='content relative w-52 h-52 border-2 border-blue-500 rounded-full flex items-center justify-center'>
  <a href="indexCN.html">
    <img src="/img/Logos_Empresa/Cn_azul.png" alt="" />
  </a>
  <span></span>
</div>
</div>

      <div className="text-center text-lg">
        <h3 className="text-blue-500 font-bold text-3xl">¿Qué Es?</h3>
        <p className="mt-3 ml-44 mr-44 mb-8">
          Aplicación móvil donde se podrá contribuir, explorar, publicar reseñas y opiniones <br/>de sus gustos o preferencias del cine, televisión, literatura y animes. Nos encontramos en <br/>creación pero muy pronto podrás ser parte de la primera red social enfocada en el entretenimiento. <br/> SOMOS CN_MECAB...
        </p>
      </div>
    </section>
  );
}

export default SectionProducto;



