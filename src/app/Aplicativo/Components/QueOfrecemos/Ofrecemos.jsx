'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Burbuja from './Comentarios/Burbuja';
import Cm from './Comentarios/Cm';

const Ofrecemos = () => {

    const [areCommentsVisible, setAreCommentsVisible] = useState(false);

    const toggleComments = () => {
        setAreCommentsVisible(!areCommentsVisible);
    };

    
    return (
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <section className="ofrecemos section2" id="Que_Ofrecemos">
            <div class="text-section flex column">
                <img src="/img/Cn_mecab/Aplicacion/fondocm.png" alt=""/>
                <p class="text-cm">Tú opinión nos importa!!
                    Estamos trabajando en una proxima sección de comentarios
                    ¡¡ MUY PRONTO!!
                </p>
                <div>
            <Burbuja toggleComments={toggleComments} />
            <Cm isVisible={areCommentsVisible} />
                </div>
                <img src="/img/Cn_mecab/Aplicacion/fondocm.png" alt=""/>
            </div>
    </section>
      </>

);
};
    export default Ofrecemos;