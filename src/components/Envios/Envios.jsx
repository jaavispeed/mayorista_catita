import React from 'react';
import { FaTruck, FaClock, FaFileInvoice, FaVideo } from 'react-icons/fa';

const Envios = () => {
  return (
    <div id='envios' className="h-screen flex items-center justify-center bg-gradient-to-b from-transparent via-[#FFEDFA] to-transparent">
      <div className="max-w-4xl p-8 ">
        <h2 className="text-4xl font-semibold mb-8">Información sobre los envíos</h2>
        <p className="text-2xl text-[#BE5985] mb-8">
          Aquí encontrarás todo lo que necesitas saber sobre los envíos de tus productos, tiempos de entrega y el proceso de seguimiento.
        </p>
        <div className="p-8 shadow-lg border rounded-lg space-y-6 bg-white">
          <div className="flex items-center space-x-6">
            <FaTruck className="text-5xl text-[#3B82F6]" />
            <p className="text-xl text-gray-700">Los envíos son gestionados por STARKEN.</p>
          </div>
          <div className="flex items-center space-x-6">
            <FaTruck className="text-5xl text-[#3B82F6]" />
            <p className="text-xl text-gray-700">No manejamos valores de envíos.</p>
          </div>
          <div className="flex items-center space-x-6">
            <FaFileInvoice className="text-5xl text-[#10B981]" />
            <p className="text-xl text-gray-700">Los comprobantes son enviados durante la tarde-noche.</p>
          </div>
          <div className="flex items-center space-x-6">
            <FaClock className="text-5xl text-[#F97316]" />
            <p className="text-xl text-gray-700">Considerar 6 días hábiles para el envío de tu pedido (Tiempo de envío promedio: 2 días).</p>
          </div>
          <div className="flex items-center space-x-6">
            <FaVideo className="text-5xl text-[#BE5985]" />
            <p className="text-xl text-gray-700">Recuerda grabar un video de inicio a fin cuando abras tu paquete.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envios;
