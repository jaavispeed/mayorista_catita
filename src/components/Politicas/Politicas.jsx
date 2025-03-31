import React from 'react';
import { FaBoxOpen, FaShieldAlt, FaBan, FaTruck, FaCreditCard, FaHeadset } from "react-icons/fa";

const politicasItems = [
  { icon: <FaBoxOpen className="text-7xl text-[#3B82F6]" />, text: 'Al momento de recibir tu paquete, debe ser grabado al momento de abrirlo de principio a fin.' },
  { icon: <FaShieldAlt className="text-7xl text-[#F97316]" />, text: 'La garantía es válida durante 12 horas una vez recibido el paquete.' },
  { icon: <FaBan className="text-7xl text-[#10B981]" />, text: 'No se realizan devoluciones.' },
  { icon: <FaTruck className="text-7xl text-[#BE5985]" />, text: 'Ofrecemos envíos nacionales con un tiempo estimado de entrega de 3-7 días hábiles.' },
  { icon: <FaCreditCard className="text-7xl text-[#3B82F6]" />, text: 'Aceptamos pagos con tarjeta de crédito, débito y transferencias bancarias.' },
  { icon: <FaHeadset className="text-7xl text-[#3B82F6]" />, text: 'Para cualquier duda o consulta, puedes contactarnos a través de nuestro correo electrónico o número de atención al cliente.' },
];

const Politicas = () => {
  return (
    <div id='politicas' className="min-h-screen flex items-center justify-center px-4 py-10 md:px-10 bg-gradient-to-b from-transparent via-[#FFEDFA] to-transparent">
      <div className="max-w-5xl mx-auto p-10 md:p-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Políticas de la Tienda
        </h2>
        <p className="text-sm md:text-lg text-[#BE5985] text-center mb-6 md:mb-10">
          Asegúrate de conocer nuestras políticas antes de realizar una compra. Aquí encontrarás información sobre garantías, devoluciones y envíos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-700">
          {politicasItems.map((politica, index) => (
            <section key={index} className="p-6 bg-gray-100 shadow-lg rounded-2xl flex items-center space-x-6">
              <div>{politica.icon}</div>
              <div>
                <p className="mt-2 text-lg font-medium">{politica.text}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Politicas;
