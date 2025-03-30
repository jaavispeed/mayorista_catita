import React from 'react'
import Slider from '../Slider/Slider'
import { paymentMethods } from "../../data/paymentMethods"


const Hero = () => {
  return (
    <section className='hero-section text-center flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl' style={{ fontFamily: 'Caveat, cursive' }}>
        Mayorista Catita
        <br></br>
        <span className='bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>
          envíos a todo Chile.
        </span>
      </h1>

      <h2 className='mt-5 text-gray-600 sm:text-xl text-center'>
        Ofrecemos ropa para mujer al por mayor, con envío a todo Chile y entrega en Santiago, ideal para emprendedores y amantes de la moda.
      </h2>

      <div className='mx-auto mt-5 flex max-w-fit space-x-6'>
        <a
          href='https://www.whatsapp.com/catalog/56996189098/?app_absent=0"'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-all duration-300 transform hover:scale-105 rounded-full px-6 py-3 text-base font-medium shadow border-black bg-[#BE5985] text-white'
        >
          Catálogo
        </a>
      </div>
      <div className="py-15">
        <Slider images={paymentMethods} />
      </div>
      </section>
  )
}

export default Hero
