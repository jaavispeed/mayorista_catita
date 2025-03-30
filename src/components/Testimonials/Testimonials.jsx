import React from 'react';
import testimonialsData from '../../data/testimonials.js';

const Testimonials = () => {
    return (
        <section id='testimonials' className="flex items-center justify-center flex-col min-h-screen">
            <h2 className="text-3xl font-bold text-center mt-3 mb-8">¿Qué dicen sobre nosotros?</h2>
            <p className="text-center mb-4 text-lg">
                Más de 100 reseñas positivas, puedes verlas y dejar la tuya en nuestro post de Instagram{' '}
                <a 
                    href="https://www.instagram.com/p/C4tCE9hrrJd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 underline"
                >
                    aquí
                </a>.
            </p>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
                {testimonialsData.map(({ id, name, image, text }) => (
                    <div key={id} className="border rounded-lg bg-white/20 backdrop-blur-lg p-6 h-full">
                        <div className="flex space-x-3 mb-4">
                            <img src={image} alt={`${name} Image`} className="rounded-full w-12 h-12" />
                            <p>{name}</p>
                        </div>
                        <p className="text-sm space-x-4 max-h-40 overflow-y-auto">
                            <span>{text}</span>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
