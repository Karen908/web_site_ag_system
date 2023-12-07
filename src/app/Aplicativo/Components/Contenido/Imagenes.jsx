'use client';
import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa6";import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";



const SliderThumbnail = ({ imgSrc, onClickHandler }) => {
    return (
      <li onClick={() => onClickHandler(imgSrc)}>
        <img src={imgSrc}  />
      </li>
    );
  };
  
  const SocialIcons = () => {
    return (
      <ul className="sci mt-10 ml">
        <li href="#">
       <FaFacebookF />
        </li>
        <li href="#">
         <FaInstagram />
        </li>
        <li href="#">
        <FaXTwitter/>
        </li>
      </ul>
    );
  };
  
  const Contenido = () => {
    const [currentImage, setCurrentImage] = useState('/img/Cn_mecab/Logos/LogoCN.png');
  
    const imgSlider = (anything) => {
      setCurrentImage(anything);
    };
  
    const changeCircleColor = (color) => {
      // Puedes implementar aquí la lógica para cambiar el color del círculo si es necesario
    };
  
    return (
      <div>
          <div className="content">
        <div className="imgBox">
          <img src={currentImage} className="CnMecab"  />
        </div>
        </div>
    
        <ul className="thumb">
          <SliderThumbnail imgSrc="/img/Cn_mecab/Logos/LogoCN.png" onClickHandler={imgSlider} className="imagenes" />
          <SliderThumbnail imgSrc="/img/Cn_mecab/Aplicacion/imagen1.jpg" onClickHandler={imgSlider} className="imagenes" />
          <SliderThumbnail imgSrc="/img/Cn_mecab/Aplicacion/imagen2.jpg" onClickHandler={imgSlider} className="imagenes" />
          <SliderThumbnail imgSrc="/img/Cn_mecab/Aplicacion/imagen3.jpg" onClickHandler={imgSlider} className="imagenes" />
        </ul>
       
        <SocialIcons />
     
      </div>
    );
  };
  
  export default Contenido;