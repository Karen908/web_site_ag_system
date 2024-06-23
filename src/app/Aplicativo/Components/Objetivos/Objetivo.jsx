'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiffy-slider/css';
import Principal from "./Ventanas/Principal"
import Link from 'next/link';
import DownloadButton from './Descargar';

const Objetivo = () => {
    const slides = [
        {
            content: (
                <div className="two-parts flex center">
                    <div className="two-parts-container flex center">
                        <div className="part-1 flex center">
                            <div className="width-container center mr-4">
                                <h3>¡¡Lo nuevo del cine en CN para ti!! </h3>
                                <p>
                                    Contribuir a los usuarios cinéfilos la exploración, interacción y
                                    publicación de reseñas y opiniones en relación a sus gustos y
                                    preferencias en cine, televisión, literatura y animes, creando una
                                    comunidad enfocada en el mundo del cine.
                                </p>
                                
                            </div>
                        </div>
                        <div className="part-2 flex">
                            <div className="width-container flex center">
                                <img
                                    className="size-s"
                                    src="/img/Cn_mecab/Aplicacion/ferxxo.png"
                                    alt="Description of image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            animation: {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 1 }
            }
        },
        {
            content: (
                <div className="two-parts flex center" >
                    <div className="two-parts-container flex center">
                        <div className="part-1 flex center">
                            <div className="width-container center mr-4">
                                <h3>Crea, Reseña, Comparte y Disfruta de CN_Mecab </h3>
                                <p>
                                    Somos una red social enfocada en el Cine, Multimedia, Entretenimiento, Comics
                                    , Anime y Libros (CN_Mecab).



                                </p>
                            </div>
                        </div>
                        <div className="part-2 flex">
                            <div className="width-container flex center">

                                <Principal />

                            </div>
                        </div>
                    </div>
                </div>
            ),
            animation: {
                initial: { x: '-100%' },
                animate: { x: 0 },
                exit: { x: '100%' },
                transition: { duration: 1 }
            }
        },
        {
            content: (
                <div className="two-parts flex center">
                    <div className="two-parts-container flex center">
                        <div className="part-1 flex center">
                            <div className="width-container center mr-4">
                                <h3>¡Ya puedes descargar la única red social para 
                                    cinéfilos!
                                </h3>
                                <p>
                                    Puedes descargar nuestra App mediante Google Play o directamente 
                                    oprimiendo el botón de descarga azul o directamente el verde.
                                </p>

                                <Link href="https://play.google.com/store/games?hl=es_419">
                                    <img
                                        src="/img/Cn_mecab/Aplicacion/google.png"
                                        alt="Disponible en Google Play"
                                        className="image link"
                                    />

                                 <DownloadButton />
                                </Link>




                            </div>
                        </div>
                        <div className="part-2 flex">
                            <div className="width-container flex center">
                                <img
                                    className="size-s img2"
                                    src="/img/Cn_mecab/Aplicacion/instalar.png"
                                    alt="Description of image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            animation: {
                initial: { y: '100%' },
                animate: { y: 0 },
                exit: { y: '-100%' },
                transition: { duration: 1 }
            }
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const buttonAnimation = {
        hover: { scale: 1.5, transition: { duration: 0.3 } },
        tap: { scale: 2, transition: { duration: 0.2 } }
    };

    return (
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <section className="objetivo section1 flex center" id="Objetivos">
                <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
                    <div className="w-full h-full rounded-2xl bg-center bg-cover duration-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={slides[currentIndex].animation.initial}
                                animate={slides[currentIndex].animation.animate}
                                exit={slides[currentIndex].animation.exit}
                                transition={slides[currentIndex].animation.transition}
                            >
                                {slides[currentIndex].content}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-3 bg-black/20 text-white cursor-pointer bg-blue-600"
                        onClick={prevSlide}
                        whileHover={buttonAnimation.hover}
                        whileTap={buttonAnimation.tap}
                    >
                        <BsChevronCompactLeft size={30} />
                    </motion.div>
                    <motion.div
                        className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-4 text-2xl rounded-full p-3 bg-black/20 text-white cursor-pointer bg-blue-600"
                        onClick={nextSlide}
                        whileHover={buttonAnimation.hover}
                        whileTap={buttonAnimation.tap}
                    >
                        <BsChevronCompactRight size={30} />
                    </motion.div>
                    <div className="flex top-4 justify-center">
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className="botones text-2xl cursor-pointer ml-2 -mt-20"
                            >
                                <div className="p-2">
                                    <RxDotFilled />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Objetivo;
