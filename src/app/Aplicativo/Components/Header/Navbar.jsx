'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';


const Header = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
    return (

      <Navbar expand='lg' className='lg:pr-24  flex items-center fixed-top'>
      <div className="flex items-center ">
        <Navbar.Brand className='ml-10 lg:ml-20'>
          <img
            src='/img/Logos/LargoCNMecab.jpeg'
            className="h-24 lg:h-24 lg:w-auto object-contain lg:ml-5 lg:mr-72"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle className="lg:hidden" />
        <div className="xl:ml-80 whitespace-nowrap ml-16 ">
          <Navbar.Collapse>
            <Navbar.Link
              href="#Home"
              active={activeItem === 'Home'}
              onClick={() => handleItemClick('Home')}
              className={`md:text-xl xl:text-xl mr-10 ${activeItem === 'Home' ? 'text-blue-500' : ''}`}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              href="#Objetivos"
              active={activeItem === 'Objetivos'}
              onClick={() => handleItemClick('Objetivos')}
              className={`md:text-xl xl:text-xl mr-10 ${activeItem === 'Objetivos' ? 'text-blue-500' : ''}`}
            >
              Objetivos
            </Navbar.Link>
            <Navbar.Link
              href="#Que_Ofrecemos"
              active={activeItem === 'Que_Ofrecemos'}
              onClick={() => handleItemClick('Que_Ofrecemos')}
              className={`md:text-xl xl:text-xl mr-10 ${activeItem === 'Que_Ofrecemos' ? 'text-blue-500' : ''}`}
            >
              ¿Qué Ofrecemos?
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>

    );
};

export default Header;