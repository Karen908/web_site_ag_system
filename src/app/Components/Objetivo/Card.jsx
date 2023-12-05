import React from 'react';

const Card = ({ icon, title, number, description }) => {
  return (
    <div className="w-full  mb-4 px-2">
      {/* Ajusta las clases de ancho según tus necesidades */}
      <div className="card-O ">
        <div className="content-O">
          <div className="back-O">
            <div className="back-content-O text-lg">
              <div>
                {icon}
              </div>
              <strong>{title}</strong>
            </div>
          </div>
          <div className="front">
            <h1 className="text-white font-bold bg-yellow-500 p-2 text-sm md:text-base lg:text-lg xl:text-lg">
              {/* Ajusta las clases de texto según tus necesidades */}
              {number}. {title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg xl:text-lg">
              {/* Ajusta las clases de texto según tus necesidades */}
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



