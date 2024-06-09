'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const Footer1 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '6631032794d178371ebbdeea' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="flex justify-center font-bold mt-2 p-6 bg-zinc-100  dark:bg-black dark:text-white">
      <div>
      <p className='text-xl'>&copy; CN MECAB 2023 | J.M.K.S.A</p>
      <div>
        <Link className='ml-4 font-semibold text-base hover:text-blue-600' href="Terminos_condiciones">Términos y condiciones</Link>
      </div>
      <div>
        <Link className='ml-4 font-semibold text-base hover:text-blue-600' href="Politicas_privacidad">Politicas de privacidad </Link>
      </div>
    </div>
      <div
        className="flex justify-center mt-2 ml-10 w-10 h-10 pt-1 bg-blue-600 rounded-md overflow-hidden"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-up-square-fill w-8 h-8 dark:text-black"
          viewBox="0 0 16 16"
        >
          <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer1;
