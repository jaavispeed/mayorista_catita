import React from 'react';
import { FaTruck, FaClock, FaFileInvoice, FaVideo } from 'react-icons/fa';

const Envios = () => {
  const iconos = [
    { icon: <FaTruck className="text-5xl text-[#3B82F6]" />, text: "Los envíos son gestionados por STARKEN." },
    { icon: <FaTruck className="text-5xl text-[#3B82F6]" />, text: "No manejamos valores de envíos." },
    { icon: <FaFileInvoice className="text-5xl text-[#10B981]" />, text: "Los comprobantes son enviados durante la tarde-noche." },
    { icon: <FaClock className="text-5xl text-[#F97316]" />, text: "Considerar 6 días hábiles para el envío de tu pedido." },
    { icon: <FaVideo className="text-5xl text-[#BE5985]" />, text: "Recuerda grabar un video de inicio a fin cuando abras tu paquete." },
  ];

  return (
    <div id='envios' className="h-screen flex items-center justify-center bg-gradient-to-b from-transparent via-[#FFEDFA] to-transparent">
      <div className="max-w-4xl p-8">
        <h2 className="text-4xl font-semibold mb-8">Información sobre los envíos</h2>
        <p className="text-2xl text-[#BE5985] mb-8">
          Aquí encontrarás todo lo que necesitas saber sobre los envíos de tus productos, tiempos de entrega y el proceso de seguimiento.
        </p>
        <div className="p-8 shadow-lg border rounded-lg space-y-6 bg-white">
          {iconos.map((item, index) => (
            <div key={index} className="flex items-center justify-start space-x-4 sm:space-x-6 w-full">
              <div className="icon-container">
                {item.icon}
              </div>
              <p className="text-lg sm:text-xl text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Envios;
