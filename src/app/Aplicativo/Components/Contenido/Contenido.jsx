'use client';


const Contenido = () => {

    
    return (
            <div>
        <section className="flex justify-center items-center" id="Home">
        <div className="circle bg-sky-600 dark:bg-sky-500 mt-24">
        </div>
        <div className="content">
      <div className="textBox font-medium text-gray-800 dark:text-white mt-20 ml-16">
        <h2 className="text-4xl font-weight-500 leading-10 mb-6">
          CN Mecab
          <br />
          <span className="text-2xl font-medium text">APP Movil</span>
        </h2>
        <p className="text-2xl font-medium dark:text-white text-gray-800  mt-2 mr-5">
          Es una plataforma/red social hecha para el público aficionado o
          interesado en el mundo del cine, la televisión y la literatura, en la
          cual puedas observar, opinar, compartir, guardar y publicar reseñas
          relacionadas con tus gustos hacia el cine. El público podrá acceder de
          manera gratuita, registrándose y señalando sus gustos, estos pueden
          ser: géneros cinematográficos, géneros literarios, productoras,
          directores y diferentes temas relacionados.
        </p>
        <a href="img/app-release.apk" className="descarga">Descargar</a>  
    
      </div>
    </div>
            </section>
            </div>


    );
};
    export default Contenido;