import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ropa from '../../assets/imagensinfondo.png';

const Hero = () => {
  return (
    <section className='hero-section flex flex-col md:flex-row items-center justify-center min-h-screen px-6'>
      {/* Contenedor de texto alineado a la izquierda */}
      <div className='text-left max-w-lg'>
        <h1 className='text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl' style={{ fontFamily: 'Caveat, cursive' }}>
          Mayorista Catita
          <br />
          <span className='bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>
            envíos a todo Chile.
          </span>
        </h1>

        <h2 className='mt-5 text-gray-600 sm:text-xl'>
          Ofrecemos ropa para mujer al por mayor, con envío a todo Chile y entrega en Santiago, ideal para emprendedores y amantes de la moda.
        </h2>

        <div className='mt-5'>
          <a
            href='https://www.whatsapp.com/catalog/56996189098/?app_absent=0'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 rounded-full px-4 py-2 text-base font-medium shadow border-black bg-[#BE5985] text-white w-fit'
          >
            <FaWhatsapp className='text-xl' />
            <span>Catálogo</span>
          </a>
        </div>
      </div>

      {/* Imagen en un círculo a la derecha */}
      <div className='mt-10 md:mt-0 md:ml-10 flex justify-center'>
        <div className='w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg'>
          <img src={ropa} alt='Ropa Mayorista Catita' className='w-full h-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
