'use client';
import React from "react";
import DarkMod from "./DarkMod";
import {Navbar, Collapse, Typography, IconButton} 
from "@material-tailwind/react";
 
export function Barra() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row ml-20 lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1"
      >
        <a href="#Home" className="flex items-center text-black dark:text-white font-medium text-sm md:text-base lg:text-lg xl:text-2xl hover:text-cyan-600">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1"
      >
        <a href="#Producto" className="flex items-center text-black dark:text-white font-medium text-sm md:text-base lg:text-lg xl:text-2xl hover:text-cyan-600">
          Producto
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 "
      >
        <a href="#Quienes_Somos" className="flex items-center text-black dark:text-white font-medium text-sm md:text-base lg:text-lg xl:text-2xl hover:text-cyan-600">
          ¿Quienes somos?
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 "
      >
        <a href="#Sobre_Nosotros" className="flex items-center text-black dark:text-white font-medium text-sm md:text-base lg:text-lg xl:text-2xl hover:text-cyan-600">
          Nosotros
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 "
      >
        <a href="#Esencia" className="flex items-center text-black dark:text-white font-medium text-sm md:text-base lg:text-lg xl:text-2xl hover:text-cyan-600">
          Esencia
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  absolute   ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-4 lg:py-1 dark:bg-slate-700   lg:bg-none lg:border-transparent lg:shadow-none mt-4">
        <div className="flex items-center justify-between text-blue-gray-900 ">
        <a className="w-48 md:w-56 md:ml-20 lg:w-72 xl:w-80 mt-8 ml-10 object-contain dark:shadow-lg ">
          <img
              className="dark:hidden"
              src="/img/Logos_Empresa/logo.png"
              alt="Logo en modo claro"
            />
            <img
              className="hidden dark:block mr-8 object-contain"
              src="/img/Logos_Empresa/logoBlanco.png"
              alt="Logo en modo oscuro"
            />
        </a>
          <div className="flex items-center gap-4 ">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1 mt-6 lg:mr-12 lg:mt-2">
              <DarkMod/>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-10 w-10 mt-6 text-black hover:text-cyan-600  lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav  ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Barra

