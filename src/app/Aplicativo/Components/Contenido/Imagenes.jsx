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
      <ul className="sci">
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
    const [currentImage, setCurrentImage] = useState('/img/Logos/LogoCN.png');
  
    const imgSlider = (anything) => {
      setCurrentImage(anything);
    };
  
    const changeCircleColor = (color) => {
      // Puedes implementar aquí la lógica para cambiar el color del círculo si es necesario
    };
  
    return (
      <div>

          <div class="content">
        <div className="imgBox">
          <img src={currentImage} className="CnMecab imgt" />
        </div>
        </div>
    
        <ul className="thumb">
          <SliderThumbnail imgSrc="/img/Logos/LogoCN.png" onClickHandler={imgSlider} className="imagenes" />
          <SliderThumbnail imgSrc="/img/App/imagen1.jpg" onClickHandler={imgSlider} className="imagenes" />
          <SliderThumbnail imgSrc="/img/App/imagen2.jpg" onClickHandler={imgSlider} className="imagenes" />
          <SliderThumbnail imgSrc="/img/App/imagen3.jpg" onClickHandler={imgSlider} className="imagenes" />
        </ul>
       
        <SocialIcons />
     
      </div>
    );
  };
  
  export default Contenido;