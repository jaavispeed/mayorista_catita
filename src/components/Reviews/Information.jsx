import React from 'react'
import { information } from "../../data/information.js";

const Information = () => {
    return (
        <div className='flex items-center p-10 justify-center flex-col'>
            <h2 className='font-extrabold text-3xl mb-8 pt-3'>¿Como comprar?</h2>

            <div className='mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl'>
                {
                    information.map((information, index) => (
                        <div key={index} className='bg-white border border-indigo-400/30 rounded-lg shadow-lg p-6 h-full flex space-x-4'>
                            <div className='font-semibold text-xl'>
                                <h3 className='font-bold text-xl'>{information.title}</h3>
                                <p className='text-gray-500'>{information.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Information