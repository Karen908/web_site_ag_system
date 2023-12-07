import React from 'react';

const ProfileCard = ({ imgSrc, name, role, portfolioLink, githubLink, linkedinLink }) => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="Quienes_Somos" className='ml-4 p-3'>
      <div className="relative flex flex-col text-gray-700 bg-black dark:bg-white shadow-md w-64 h-96 rounded-xl bg-clip-border overflow-hidden transform transition-transform ease-in-out hover:scale-105 group">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-xg h-60 rounded-xl bg-clip-border transform transition-transform ease-in-out hover:scale-110">
          <img
            src={imgSrc}
            alt="profile-picture"
            className='w-full h-full object-cover'
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 text-white  dark:text-black">
            {name}
          </h4>
          <p className="block font-sans text-base antialiased font-bold leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text">
            {role}
          </p>
        </div>
        <div className="flex justify-center space-x-5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 absolute bottom-2 left-0 right-0 mx-auto">
          <button onClick={() => openLink(portfolioLink)} className="inline-block text-gray-400">
            <span className="sr-only">Portafolio developer</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase-fill w-6 h-6 text-white  hover:text-gray-400 dark:text-gray-500 dark:hover:text-black " viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
            </svg>
          </button>
          <button onClick={() => openLink(githubLink)} className="inline-block text-gray-400">
            <span className="sr-only">GitHub</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 496 512" className="w-6 h-6 text-white  hover:text-gray-400 dark:text-gray-500 dark:hover:text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
             </path>
            </svg>
          </button>

          <button onClick={() => openLink(linkedinLink)} className="inline-block text-gray-400">
            <span className="sr-only">Linkedin</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 448 512" className="w-6 h-6 text-white  hover:text-gray-400 dark:text-gray-500 dark:hover:text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
             </path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;



