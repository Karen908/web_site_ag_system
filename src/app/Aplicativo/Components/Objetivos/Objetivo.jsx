'use client';
import { Helmet } from 'react-helmet';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";





const Objetivo = () => {

    
    return (
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
        <section className="objetivo section1" id="Objetivos">
        <h1 className="heading font-bold"> <span>Objetivo</span> CN </h1>
        <div className="row">
            <div className="image">
                <img className="pantalla" src="/img/Cn_mecab/Aplicacion/cnPantalla.png"/> 
            </div>
            <div className="contento font-bold ">
                <h3 className="text-center">Nuestro Objetivo Eres Tú</h3>
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
        <a href="#" className="btn"><MdOutlineKeyboardDoubleArrowUp /></a>
          <a href="#Que_Ofrecemos" className="btn_abajo"><MdOutlineKeyboardDoubleArrowDown /></a>
    </section>
    </>

);
};
    export default Objetivo;



