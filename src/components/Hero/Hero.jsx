import React from 'react'
import Store from '../../assets/iconStore.png'

const Hero = () => {
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

        <div className='sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <p className='py-12 text-center text-2xl'>
            👗 | Tienda mayorista de ropa para mujer, siempre con lo mejor en calidad y tendencia. <br />
            📦 | Envíos a todo Chile | 🚗 | Delivery en Santiago por $3.500 <br />
            📲 | ¡Consulta nuestro <strong>CATÁLOGO</strong> en WhatsApp y comienza tu emprendimiento!
          </p>


          <div className='flex justify-center gap-4'>
            <a className='bg-[#FFD0C7] py-2 px-12 rounded-3xl hover:bg-[#FFFECE] transition-all duration-300 items-center cursor-pointer'>Ver catalogo
              <i className="bi bi-eye text-xl ml-2"></i></a>

            <a className='flex items-center cursor-pointer'>Dejar una reseña <i className="bi bi-send-fill text-xl ml-2"></i></a>
          </div>

        </div>
        <div className='flex justify-center py-20'>
          <img src={Store} alt='Tienda mayorista' />
        </div>
      </div>
    </section>
  )
}

export default Hero