import React from 'react';
import { FaCamera, FaQuestionCircle, FaCheckCircle, FaTag, FaShoppingBag, FaDollarSign } from 'react-icons/fa';

const Information = () => {
  const infoItems = [
    { icon: <FaCamera className='text-5xl text-[#3B82F6]' />, text: 'Paso 1: Debes tomar captura del producto que necesites comprar e indicarnos la cantidad.' },
    { icon: <FaQuestionCircle className='text-5xl text-[#F97316]' />, text: 'Paso 2: Siempre preguntas si se envían elegidos o surtidos.' },
    { icon: <FaCheckCircle className='text-5xl text-[#10B981]' />, text: 'Paso 3: Una vez que estés segura de la compra, te enviaremos el detalle total y los datos de pago.' },
    { icon: <FaTag className='text-5xl text-[#BE5985]' />, text: 'Paso 4: No hay mínimo de compra.' },
    { icon: <FaShoppingBag className='text-5xl text-[#3B82F6]' />, text: 'Paso 5: Precios mayoristas desde 3 unidades y el mismo modelo.' },
  ];

  return (
    <div id='information' className='h-screen flex items-center justify-center bg-gradient-to-b from-transparent via-[#FFEDFA] to-transparent'>
      <div className='max-w-4xl p-8'>
        <h2 className='text-4xl font-semibold mb-8'>¿Cómo comprar?</h2>
        <p className='text-2xl text-[#BE5985] mb-16'>
          Aquí te explicamos paso a paso cómo realizar tu compra de forma rápida y segura. Sigue las instrucciones a continuación para completar tu pedido con facilidad.
        </p>
        <div className='p-8 shadow-lg border rounded-lg space-y-6 bg-white'>
          {infoItems.map((item, index) => (
            <div key={index} className='flex items-center space-x-6'>
              {item.icon}
              <p className='text-xl text-gray-700 text-left'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
