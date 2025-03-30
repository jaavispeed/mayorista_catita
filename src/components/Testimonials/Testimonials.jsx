import React from 'react';
import testimonialsData from '../../data/testimonials.js';

const Testimonials = () => {
    return (
        <section className="flex items-center justify-center flex-col">
            <h2 className="text-3xl font-bold text-center mt-3 mb-8">Que dicen sobre nosotros</h2>
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
