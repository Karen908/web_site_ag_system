'use client';
import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
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
      <ul className="sci mt-10 ">
        <li> 
        <a href="https://www.facebook.com/?locale=es_LA.com">
       <FaFacebookF />
       </a>
        </li>

        <li>
          <a href="https://www.instagram.com/ag_sysytem_information/">
         <FaInstagram />
         </a>
        </li>

        <li>
        <a href="https://twitter.com/ag_system_info">
        <FaXTwitter/>
        </a>
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
    };
  
    return (
      <div>
          <div className="content">
        <div className="imgBox">
          <img src={currentImage} className="CnMecab justify-center mt-36"/>
        </div>
        </div>
    
        <ul className="thumb">
          <SliderThumbnail imgSrc="/img/Cn_mecab/Logos/LogoCN.png" onClickHandler={imgSlider} className="imagenes" />
          <SliderThumbnail imgSrc="/img/Cn_mecab/Aplicacion/imagen1.jpeg" onClickHandler={imgSlider} className="imagenes img1" />
          <SliderThumbnail imgSrc="/img/Cn_mecab/Aplicacion/imagen2.jpeg" onClickHandler={imgSlider} className="imagenes img2" />
          <SliderThumbnail imgSrc="/img/Cn_mecab/Aplicacion/imagen3.jpeg" onClickHandler={imgSlider} className="imagenes img3" />
        </ul>
       
        <SocialIcons />
     
      </div>
    );
  };
  
  export default Contenido;