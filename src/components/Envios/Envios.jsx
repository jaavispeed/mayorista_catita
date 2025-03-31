import React from 'react';
import { FaTruck, FaClock, FaFileInvoice, FaVideo } from 'react-icons/fa';

const Envios = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Información sobre los envíos</h2>
      <div className="p-4 shadow-md border rounded-lg space-y-2">
        <div className="flex items-center space-x-2">
          <FaTruck className="text-blue-500" />
          <p className="text-gray-700">Los envíos son gestionados por STARKEN.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaTruck className="text-blue-500" />
          <p className="text-gray-700">No manejamos valores de envíos.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaFileInvoice className="text-green-500" />
          <p className="text-gray-700">Los comprobantes son enviados durante la tarde-noche.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaClock className="text-yellow-500" />
          <p className="text-gray-700">Considerar 6 días hábiles para el envío de tu pedido (Tiempo de envío promedio: 2 días).</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaVideo className="text-red-500" />
          <p className="text-gray-700">Recuerda grabar un video de inicio a fin cuando abras tu paquete.</p>
        </div>
      </div>
    </div>
  );
};

export default Envios;