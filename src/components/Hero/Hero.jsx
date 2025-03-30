import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import jeans from '../../assets/jeans.jpg';
import Chaleco from '../../assets/Chaleco.jpg';
import Crops from '../../assets/Crops.jpg';

const Hero = () => {
  return (
    <section
      id='hero'
      className='hero-section flex flex-col md:flex-row items-center justify-center min-h-screen px-6 bg-gradient-to-b from-transparent via-[#FFEDFA] to-transparent'>

      {/* Contenedor de texto alineado a la izquierda */}
      <div className='text-left max-w-lg'>
        <h1 className='text-4xl font-extrabold leading-[1.15] text-black sm:text-7xl' style={{ fontFamily: 'Caveat, cursive' }}>
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
            className='transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 rounded-full px-6 py-3 text-lg font-medium shadow border-black bg-[#BE5985] text-white w-fit'
          >
            <FaWhatsapp className='text-xl' />
            <span>Catálogo</span>
          </a>

        </div>
      </div>

      {/* Contenedor de círculos a la derecha */}
      <div className='relative mt-10 md:mt-0 md:ml-10 flex justify-center'>
        {/* Círculo principal */}
        <div className='w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg'>
          <img src={jeans} alt='Ropa Mayorista Catita' className='w-full h-full object-cover' />
        </div>

        {/* Círculo superior izquierdo con imagen más grande */}
        <div className='absolute top-0 left-[-40px] w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white shadow-lg'>
          <img src={Chaleco} alt='Imagen 1' className='w-full h-full object-cover' />
        </div>

        {/* Círculo inferior derecho con imagen más grande */}
        <div className='absolute bottom-[-40px] right-[-40px] w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white shadow-lg'>
          <img src={Crops} alt='Imagen 2' className='w-full h-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
