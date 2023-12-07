import React from 'react';

const Card = ({ icon, title, number, description }) => {
  return (
    <div className="w-full  mb-4 px-2">
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
            <h1 className="text-white font-bold bg-blue-500 p-2 text-sm md:text-base text-center lg:text-lg xl:text-lg">
              {number}. {title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg xl:text-lg p-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



