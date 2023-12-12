'use client';
import { Helmet } from 'react-helmet';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";


const Ofrecemos = () => {

    
    return (
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <section className="ofrecemos section2 -mt-56" id="Que_Ofrecemos">
        <h1 className="heading font-bold"> <span>CN </span> Te Ofrece </h1>
        <div className="row">
            <div className="image">
                <img className="pantalla" src="/img/Cn_mecab/Aplicacion/cnPantalla.png"/> 

            </div>
            <div className="contento font-bold">
                <h3 className="text-center">Todo Esto Para Ti </h3>
                <p>
                    Contribuir a los usuarios cinéfilos la exploración, 
                    interacción y publicación de reseñas y opiniones en 
                    relación a sus gustos y preferencias en cine, televisión, 
                    literatura y animes, creando una comunidad enfocada en el 
                    mundo del cine. </p>
                    <p>Dónde los usuarios puedan descubrir, discutir y compartir sus 
                        intereses, así como tomar decisiones informadas sobre qué ver y dónde verlo, 
                         fomentando la interacción y la creación de una comunidad de amantes 
                         del cine.</p>
            </div>
        </div>
        <a href="#Objetivos" className="btn"><MdOutlineKeyboardDoubleArrowUp/></a>
    </section>
      </>

);
};
    export default Ofrecemos;