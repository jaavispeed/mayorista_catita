import React from 'react';
import { information } from "../../data/information.js";
import { FaCamera, FaQuestionCircle, FaCheckCircle, FaTag, FaShoppingBag, FaDollarSign } from 'react-icons/fa';

const Information = () => {
    return (
        <div
            id='information'
            className='flex items-center justify-center flex-col min-h-screen bg-gradient-to-b from-transparent via-[#FFEDFA] to-transparent'>
            <h2 className='font-extrabold text-4xl mb-4 pt-3 text-[#EC7FA9]'>¿Cómo comprar?</h2>
            <p className='text-lg text-[#BE5985] mb-12 max-w-2xl text-center'>
                Aquí te explicamos paso a paso cómo realizar tu compra de forma rápida y segura. <br></br>Sigue las instrucciones a continuación para completar tu pedido con facilidad.
            </p>
            <div className='mt-10 grid items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl'>
                {
                    information.map((info, index) => (
                        <div key={index} className='bg-white border border-[#FFB8E0] rounded-lg shadow-lg p-6 h-full flex flex-col items-center space-y-4 hover:shadow-xl transition-all duration-300'>
                            {/* Iconos */}
                            {index === 0 && <FaCamera className='text-4xl text-[#3B82F6]' />}
                            {index === 1 && <FaQuestionCircle className='text-4xl text-[#F97316]' />}
                            {index === 2 && <FaCheckCircle className='text-4xl text-[#10B981]' />}
                            {index === 3 && <FaTag className='text-4xl text-[#BE5985]' />}
                            {index === 4 && <FaShoppingBag className='text-4xl text-[#3B82F6]' />}
                            {index === 5 && <FaDollarSign className='text-4xl text-[#10B981]' />}

                            <div className='text-center'>
                                <h3 className='font-bold text-2xl text-[#BE5985]'>{info.description}</h3>
                            </div>
                        </div>
                    ))}
            </div>

            <div className='mt-12 text-center'>
                <p className='text-lg text-[#BE5985]'>Si tienes más dudas, no dudes en <a href="https://www.instagram.com/mayorista_catita/" className='text-[#EC7FA9] font-semibold hover:underline'>contactarnos</a>.</p>
            </div>
        </div>
    );
};

export default Information;
